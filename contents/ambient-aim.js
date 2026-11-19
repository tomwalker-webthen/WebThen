(function(){
  'use strict';
  const panel=document.querySelector('#ambient-aim');
  const mainToggle=document.querySelector('#ambient-aim-toggle');
  const browserToggle=document.querySelector('#ambient-aim-browser-toggle');
  const archive=document.querySelector('#browser-overlay');
  const onlineList=document.querySelector('#aim-online-list'),familyList=document.querySelector('#aim-family-list'),offlineList=document.querySelector('#aim-offline-list');
  const muteInput=document.querySelector('#aim-mute'),volumeInput=document.querySelector('#aim-volume'),paceInput=document.querySelector('#aim-pace');
  let volume=35,muted=false,pace='normal',minimized=false,soundProblem='',offlineExpanded=false,buddiesExpanded=true,familyExpanded=true;
  try{const saved=JSON.parse(localStorage.getItem('webthen-aim-settings-v1')||'null');if(saved){if(Number.isFinite(saved.volume))volume=Math.max(0,Math.min(100,saved.volume));muted=saved.muted===true;if(['quiet','normal','lively'].includes(saved.pace))pace=saved.pace;}}catch(e){}
  const sounds=Object.fromEntries(Object.entries(ambientAimSounds).map(([kind,uri])=>{const sound=new Audio(uri);sound.preload='auto';sound.volume=volume/100;return [kind,sound]}));
  function persist(){try{localStorage.setItem('webthen-aim-settings-v1',JSON.stringify({volume,muted,pace}));}catch(e){}}
  function stopSound(){Object.values(sounds).forEach(s=>{s.pause();try{s.currentTime=0}catch(e){}});}
  function play(kind){if(muted||volume===0||!engine.view().running||engine.view().paused)return;stopSound();const sound=sounds[kind];if(!sound)return;sound.volume=volume/100;soundProblem='';sound.play().then(()=>{if(engine.view().running){panel.dataset.lastSound=kind;panel.dataset.soundState='played';render(engine.view());}}).catch(()=>{if(engine.view().running&&!muted){soundProblem='Sound paused · try a preview';panel.dataset.soundState='blocked';render(engine.view());}});}
  function item(b,state){const li=document.createElement('li');li.className=(b.away?'away ':'')+(state.lastEvent?.type==='signin'&&state.lastEvent.buddy===b.name?'aim-new':'');li.title=b.online?(b.away||'Available'):'Offline';const dot=document.createElement('span');dot.className='aim-person-dot';dot.setAttribute('aria-hidden','true');const button=document.createElement('button');button.type='button';button.className='buddy-chat-button';button.textContent=b.name;const count=state.unreadByBuddy?.[b.name]||0;button.setAttribute('aria-label','Open chat with '+b.name+(count?', '+count+' unread messages':''));button.onclick=()=>WebThenChats.open(b.name);li.append(dot,button);if(count){const badge=document.createElement('span');badge.className='buddy-unread';badge.textContent='('+count+')';li.append(badge)}if(b.away){const label=document.createElement('span');label.className='aim-away-label';label.textContent='away';li.append(label)}return li;}
  function render(state){
    const online=state.buddies.filter(b=>b.online&&b.available),offline=state.buddies.filter(b=>!b.online&&b.available);
    panel.hidden=!state.running;panel.dataset.minimized=String(minimized);panel.classList.toggle('aim-message-pending',state.unread>0);panel.dataset.paused=String(state.paused);
    mainToggle.setAttribute('aria-pressed',String(state.running));browserToggle.setAttribute('aria-pressed',String(state.running));
    const gameToggle=document.querySelector('#game-aim-toggle');if(gameToggle){gameToggle.setAttribute('aria-pressed',String(state.running));gameToggle.textContent=state.running?'AIM On':'AIM Off';}
    mainToggle.textContent='Ambient AIM · '+(state.running?'On':'Off');browserToggle.textContent=state.running?'AIM On':'AIM Off';
    document.querySelector('#aim-title').textContent=(state.unread?'✉ '+state.unread+' · ':'')+WebThenScreenName.get()+'’s Buddy List'+(minimized?' ('+online.length+' online)':'');
    document.querySelector('#aim-self-name').textContent=WebThenScreenName.get();
    document.querySelector('#aim-minimize').textContent=minimized?'▣':'_';document.querySelector('#aim-minimize').setAttribute('aria-label',minimized?'Expand AIM buddy list':'Minimize AIM buddy list');
    onlineList.replaceChildren(...online.filter(b=>b.group==='Buddies').map(b=>item(b,state)));
    familyList.replaceChildren(...online.filter(b=>b.group==='Family').map(b=>item(b,state)));
    document.querySelector('#aim-buddies-heading').textContent=(buddiesExpanded?'▾':'▸')+' Buddies ('+online.filter(b=>b.group==='Buddies').length+')';
    document.querySelector('#aim-family-heading').textContent=(familyExpanded?'▾':'▸')+' Family ('+online.filter(b=>b.group==='Family').length+')';
    onlineList.hidden=!buddiesExpanded;familyList.hidden=!familyExpanded;document.querySelector('#aim-buddies-heading').setAttribute('aria-expanded',String(buddiesExpanded));document.querySelector('#aim-family-heading').setAttribute('aria-expanded',String(familyExpanded));
    document.querySelector('#aim-online-count').textContent=online.length+' / '+state.buddies.length+' online';
    document.querySelector('#aim-offline-toggle').textContent=(offlineExpanded?'▾':'▸')+' Offline ('+offline.length+')';document.querySelector('#aim-offline-toggle').setAttribute('aria-expanded',String(offlineExpanded));offlineList.hidden=!offlineExpanded;offlineList.replaceChildren(...offline.map(b=>item(b,state)));
    const eventText=state.paused?'Away from this tab · ambience paused':state.lastEvent?.text||'Your buddy list is ready.';document.querySelector('#aim-event').textContent=eventText;
    const messageBox=document.querySelector('#aim-message');messageBox.hidden=!state.unread||!state.lastMessage;
    const previewMessage=state.latestUnreadMessage||state.lastMessage;if(previewMessage){document.querySelector('#aim-message-from').textContent=previewMessage.from+' says:';const text=document.querySelector('#aim-message-text');text.replaceChildren();WebThenChats.appendMessage(text,previewMessage)}
    muteInput.checked=muted;volumeInput.value=String(volume);document.querySelector('#aim-volume-value').textContent=volume+'%';paceInput.value=state.pace;
    const audioLabel=document.querySelector('#aim-audio-status');audioLabel.textContent=soundProblem||(muted||volume===0?'Sound off':'Sound on · '+volume+'%');audioLabel.classList.toggle('aim-audio-problem',!!soundProblem);
  }
  const engine=createAmbientAimEngine({getEra:()=>selected,onChange(state,event){render(state);WebThenChats.observe(state,event);if(['signin','signout','message'].includes(event?.type))play(event.type);}});
  WebThenChats.bind(engine);engine.setPace(pace);
  function place(){if(panel.parentElement!==document.body)document.body.append(panel);}
  function turnOff(){try{localStorage.setItem('webthen-aim-enabled','off')}catch(e){}engine.stop();stopSound();soundProblem='';panel.dataset.soundState='stopped';}
  function toggle(){if(engine.view().running){turnOff();return;}minimized=false;soundProblem='';try{localStorage.setItem('webthen-aim-enabled','on')}catch(e){}place();engine.start();WebThenLayers.raise(panel);if(document.hidden){engine.setPaused(true);stopSound();}}
  mainToggle.onclick=toggle;browserToggle.onclick=toggle;
  document.querySelector('#aim-close').onclick=()=>{turnOff();(archive.hidden?mainToggle:browserToggle).focus()};
  document.querySelector('#aim-minimize').onclick=()=>{minimized=!minimized;render(engine.view())};
  const settings=document.querySelector('#aim-settings'),settingsToggle=document.querySelector('#aim-settings-toggle');
  settingsToggle.onclick=()=>{settings.hidden=!settings.hidden;settingsToggle.setAttribute('aria-expanded',String(!settings.hidden));};
  muteInput.onchange=()=>{muted=muteInput.checked;if(muted)stopSound();soundProblem='';persist();render(engine.view());};
  volumeInput.oninput=()=>{volume=Number(volumeInput.value);Object.values(sounds).forEach(s=>s.volume=volume/100);if(volume===0)stopSound();persist();render(engine.view());};
  paceInput.onchange=()=>{pace=paceInput.value;engine.setPace(pace);persist();};
  document.querySelector('#aim-preview-signin').onclick=()=>engine.preview('signin');
  document.querySelector('#aim-preview-signout').onclick=()=>engine.preview('signout');
  document.querySelector('#aim-preview-message').onclick=()=>engine.preview('message');
  document.querySelector('#aim-message-dismiss').onclick=()=>{const s=engine.view(),message=s.latestUnreadMessage||s.lastMessage;if(message)engine.markRead(message.from)};
  document.querySelector('#aim-buddies-heading').onclick=()=>{buddiesExpanded=!buddiesExpanded;render(engine.view())};document.querySelector('#aim-family-heading').onclick=()=>{familyExpanded=!familyExpanded;render(engine.view())};
  document.querySelector('#aim-offline-toggle').onclick=()=>{offlineExpanded=!offlineExpanded;render(engine.view())};
  document.querySelector('#aim-dock').onclick=()=>{panel.style.left='';panel.style.top='';panel.style.right='';panel.style.bottom='';};
  document.addEventListener('visibilitychange',()=>{if(!engine.view().running)return;engine.setPaused(document.hidden);if(document.hidden)stopSound();});
  window.addEventListener('pagehide',()=>{engine.stop();stopSound()});
  panel.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();if(!settings.hidden){settings.hidden=true;settingsToggle.setAttribute('aria-expanded','false');settingsToggle.focus();}else{minimized=true;render(engine.view());document.querySelector('#aim-minimize').focus();}}});
  const titlebar=document.querySelector('#aim-titlebar');let drag=null;
  titlebar.addEventListener('pointerdown',e=>{if(e.target.closest('button')||e.button!==0)return;const r=panel.getBoundingClientRect();drag={x:e.clientX-r.left,y:e.clientY-r.top};titlebar.setPointerCapture(e.pointerId);e.preventDefault();});
  titlebar.addEventListener('pointermove',e=>{if(!drag)return;panel.style.left=Math.max(0,Math.min(window.innerWidth-panel.offsetWidth,e.clientX-drag.x))+'px';panel.style.top=Math.max(0,Math.min(window.innerHeight-35,e.clientY-drag.y))+'px';panel.style.right='auto';panel.style.bottom='auto';});
  const endDrag=()=>{drag=null};titlebar.addEventListener('pointerup',endDrag);titlebar.addEventListener('pointercancel',endDrag);
  window.addEventListener('resize',()=>{if(!engine.view().running)return;const r=panel.getBoundingClientRect();if(r.left<0||r.right>window.innerWidth||r.top<0||r.top>window.innerHeight-35){panel.style.left='';panel.style.top='';panel.style.right='';panel.style.bottom='';}});
  // Optional browser placement hook; the simulation does not use network services.
  globalThis.WebThenAmbientAIM={place,followEra(){engine.followEra()},startDefault(){let enabled=true;try{enabled=localStorage.getItem('webthen-aim-enabled')!=='off'}catch(e){}if(enabled&&!engine.view().running){place();engine.start();WebThenLayers.raise(panel);if(document.hidden)engine.setPaused(true)}}};
  WebThenScreenName.subscribe(()=>render(engine.view()));
  render(engine.view());
})();