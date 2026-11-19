(function(){
 'use strict';
 const identity=WebThenScreenName,settings=document.querySelector('#aim-settings'),form=document.createElement('form');form.className='aim-identity-form';
 form.innerHTML='<label for="aim-screen-name-input">Screen name</label><input id="aim-screen-name-input" type="text" maxlength="16" minlength="3" autocomplete="off" autocapitalize="off" spellcheck="false" required aria-describedby="aim-name-note"><div class="aim-name-actions"><button type="submit">Save name</button><button type="button" id="aim-name-suggest">Pick another</button><button type="button" id="aim-name-random">Random each session</button></div><small id="aim-name-note" role="status"></small>';
 settings.prepend(form);const input=form.querySelector('input'),note=form.querySelector('small');
 function sync(){input.value=identity.get();note.textContent=identity.isSaved()?'Saved on this browser for future visits.':'Starter name for this visit. Save a name to keep it.'}
 form.onsubmit=event=>{event.preventDefault();const result=identity.save(input.value);input.setAttribute('aria-invalid',String(!result.ok));note.textContent=!result.ok?result.error:result.persistent?'Saved. This screen name will be used on future visits.':'Changed for this visit. Browser storage is unavailable.'};
 form.querySelector('#aim-name-suggest').onclick=()=>{input.value=identity.suggest();input.removeAttribute('aria-invalid');note.textContent='Suggestion ready. Choose Save name to keep it.';input.focus();input.select()};
 form.querySelector('#aim-name-random').onclick=()=>{const result=identity.useRandom();sync();if(!result.persistent)note.textContent='Random name set for this visit. Browser storage is unavailable.'};
 document.querySelector('#aim-self-name').onclick=()=>{if(settings.hidden)document.querySelector('#aim-settings-toggle').click();input.focus();input.select()};
 identity.subscribe(sync);sync();
 const taskbar=document.querySelector('#browser-taskbar'),actions=document.createElement('div');actions.className='desktop-session-actions';
 const replay=[...document.querySelectorAll('#retro-desktop button')].find(b=>b.textContent.trim().toLowerCase()==='replay connection'),portal=document.querySelector('#desktop-return');
 for(const button of [replay,portal])if(button){button.style.position='static';actions.append(button)}taskbar.append(actions);
 const floating=document.querySelector('#desktop-fullscreen-shortcut');if(floating)floating.hidden=true;
})();
