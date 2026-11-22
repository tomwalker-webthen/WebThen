(function(root){
 'use strict';
 const profiles={
  xXstarryskiesXx:['dreamy','music','heyy :)','taking a break from rewriting my away message'],
  sk8rKid_99:['energetic','games','yo!!','trying to finish one more level'],
  pixelprincess:['creative','websites','hey :)','making my homepage prettier instead of doing homework'],
  awaymsg_poet:['poetic','music','hey...','deciding whether my away message is too dramatic'],
  dialupdreamer:['patient','computers','hey! you made it online','waiting for this download to finish'],
  soccergurl23:['sporty','school','heyyy','back from practice and avoiding homework'],
  burntCDmix:['music nerd','music','yo, good timing','rearranging a mix CD for absolutely no reason'],
  neon_dolphin:['playful','videos','hiiii :D','looking for something weird to send people'],
  xDragonFlamex:['fantasy gamer','games','hey, adventurer','taking a break from a very important game'],
  sleepy_penguin:['sleepy','school','oh hey... still awake somehow','pretending this counts as a study break'],
  glitterbug87:['bubbly','websites','heyyy!!','trying to find the perfect profile colors'],
  bandgeek2001:['band kid','music','hey! whats up','supposed to be practicing, technically'],
  cousin_on_dialup:['family comedian','computers','hey cousin!','hoping nobody picks up the phone'],
  mom_says_hi:['practical parent','family','Hello!','checking whether everyone has eaten'],
  uncle_jpeg:['helpful relative','computers','Hello there.','trying to figure out which cable does what'],
  pizzaAfterSchool:['laid-back','games','hey, whats up','considering another slice of pizza'],
  moonlight_mp3:['late-night DJ','music','hey, night owl','putting together a late-night playlist'],
  pwned_by_a_duck:['competitive gamer','games','yo. rematch?','recovering from a completely unfair defeat'],
  T0mewalker:['enthusiastic schemer','games','YO!','working on another extremely profitable idea'],
  HammzT10:['Middle-earth fan','fantasy','greetings from the Woodland Realm','considering a quest instead of homework'],
  Thebebegirl22:['dry humor','websites','hey lol','watching everyone turn a profile update into a major event'],
  ekillians:['practical family','family','hey!','checking dinner plans and looking for the printed directions'],
  SunKistBuTtKisS:['pop superfan','music','OMG hiii!!','refreshing fan sites and playing the same three CDs on repeat']
 };
 // Superfan replies by era and subject; general chat about music or what they are doing stays on these subjects too.
 const fanReplies={"SunKistBuTtKisS":{"social":{"twilight":["Edward Cullen. that's it. that's the reply.","have you read New Moon yet?? we need to talk about Jacob"],"avril":["Avril is everything. Under My Skin is still in my CD player","did you see the pics from Avril and Deryck's wedding??"],"britney":["Britney forever. Toxic is still my favorite","my little sister and i made up a dance to Oops... I Did It Again. it's a masterpiece"]},"modern":{"twilight":["the Twilight movie is next month!! are you going to the midnight showing with me??","Team Edward or Team Jacob? choose wisely lol"],"avril":["Girlfriend still gets stuck in my head every single day","i want Avril's whole wardrobe from the Best Damn Thing era"],"britney":["Womanizer is SO good. she's totally back","Circus comes out in December and i'm already counting down"]},"boom":{"britney":["Britney is the best. did you see her VMA performance??","i have the Oops CD AND the single. yes both."]},"flash":{"avril":["Avril is so cool. Let Go hasn't left my CD player","Complicated or Sk8er Boi? trick question, both"],"britney":["did you see Britney and Madonna at the VMAs??","Me Against the Music is SO good"]}}};
 const fanSubjects={twilight:/twilight|edward|jacob|bella|cullen|new moon|breaking dawn|vampire|robert pattinson/,avril:/avril|lavigne|sk8er|deryck/,britney:/britney|spears|womanizer|piece of me|toxic/};
 const eraLines={
  early:{games:['i keep finding games through people’s homepages. half the fun is finding the link.','try Newgrounds. some old interactive stuff may need its original software.'],music:['everyone wants the radio on while the computer is using the phone line. this household needs a plan.','picking one CD for the whole evening is a serious commitment.'],school:['the printer is louder than my entire homework assignment.','i opened the computer to do homework. somehow i am making a homepage.'],computers:['please tell me nobody needs the phone. this download has become a member of the family.','the connection dropped at 98%. i am choosing to take this personally.'],pop:['my tamagotchi has a more demanding schedule than i do.','pokemon red or blue? this friendship may require a trading arrangement.'],website:'GeoCities',videos:'there are some period clips in the Video Lounge. pick one and report back.'},
  boom:{games:['we can look around Newgrounds. i cannot promise our homework survives.','everyone has a game they claim they can beat. i would like evidence.'],music:['making a mix CD takes longer than listening to it, apparently.','the downloaded file name and the actual song are sometimes unrelated. fun surprise.'],school:['my research project has accidentally become a search for new away messages.','i made a homework playlist. that counts as starting, right?'],computers:['the download estimate says one minute. it said that before dinner.','i think the computer survived Y2K better than my sleep schedule did.'],pop:['saw The Matrix and now every pair of sunglasses feels important.','Fellowship has an impressive amount of walking. i respect the commitment.'],website:'Neopets',videos:'the Video Lounge has some clips from this era. i vote we watch something instead of working.'},
  flash:{games:['Newgrounds is a dangerous place to visit with unfinished homework.','try a browser game and tell me how far you get. some preserved games still need old plugins.'],music:['my mix CD needs one more song and absolutely no input from my sibling.','i spent more time choosing a profile song than writing the profile.'],school:['the assignment is open. the Flash cartoon is also open. these things are unrelated.','we should study. counterpoint: one more game.'],computers:['i have too many IM windows open and no idea where the music is coming from.','this computer is running on hope and one very determined cooling fan.'],pop:['napoleon dynamite quotes have taken over lunch. there may be no cure.','Return of the King was worth it. the next morning’s alarm was not.'],website:'Badger Badger Badger',videos:'the Video Lounge has web cartoons from this era. this is research, probably.'},
  social:{games:['the Game Room has the 2005 GBA edition of Elf Bowling. want to compare scores?','i have a suspiciously urgent need to play one more game.'],music:['i keep changing my profile song like it is a major life decision.','that new iPod has more room than my entire CD shelf. unreasonable.'],school:['YouTube was supposed to be a five-minute break. an optimistic estimate.','my top 8 is organized. my homework is not.'],computers:['someone keeps sending me videos and the browser is losing the argument.','the Wii wrist strap exists for a reason. please tell your lamp i said hello.'],pop:['the last Harry Potter book means away messages are now a spoiler minefield.','people are arguing about MySpace top 8 like there is a governing body.'],website:'MySpace',videos:'the Video Lounge has early viral clips. i cannot promise you will stop after one.'},
  modern:{games:['FarmVille has turned checking a website into agricultural shift work.','the Game Room has the browser-playable GBA Elf Bowling collection. i demand a rematch.'],music:['i still make playlists like i am burning a CD. old habits.','Lady Gaga is dressed for the future. i am dressed for a very average Tuesday.'],school:['opened Facebook for a second. homework has filed a missing-person report.','we need a study plan that does not include watching another video.'],computers:['this netbook keyboard was apparently designed for very small hands.','Windows 7 looks promising. i am still keeping the recovery discs nearby.'],pop:['The Dark Knight was worth the late night. tomorrow’s alarm disagrees.','everyone is discussing Avatar. i am mostly concerned about keeping the 3D glasses.'],website:'YouTube',videos:'the Video Lounge has some excellent late-2000s clips. one more and then we do something useful.'}
 };
 const followups={games:['what kind of game are you in the mood for?','how did you do? i am accepting wildly exaggerated scores.'],music:['what song would you put first on a mix?','are we going for loud, dramatic, or something we can actually study to?'],school:['what assignment are you avoiding?','we could try ten minutes of actual work. radical idea.'],computers:['is it slow, frozen, or making an interesting new noise?','have you saved your work recently? asking with concern.'],websites:['what kind of site are you looking for?','i like the ones where you immediately know someone spent all weekend making it.'],videos:['did you watch it yet?','which clip did you pick?'],fantasy:['which character are you playing?','every quest benefits from snacks and a second player.'],family:['so, what is the plan?','let me know before anyone starts printing another set of directions.'],pop:['what did you think of it?','everyone at school is going to be talking about this, aren’t they?']};
 const eraOrder=['early','boom','flash','social','modern'];
 const contactFrom={SunKistBuTtKisS:'social',sk8rKid_99:'boom',bandgeek2001:'boom',moonlight_mp3:'boom',pwned_by_a_duck:'boom'};
 function available(name,era){return !!profiles[name]}
 Object.assign(eraLines.early,{games:['want to compare Minesweeper times?','i keep finding little games on people’s homepages. got any favorites?'],videos:'found a tiny movie clip. it will probably take longer to download than to watch.'});
 Object.assign(eraLines.boom,{videos:'found another clip worth waiting for. want to see it?'});
 Object.assign(eraLines.flash,{games:['Newgrounds is a dangerous place to visit with unfinished homework.','one quick game, then homework. definitely just one.'],videos:'you have to see this cartoon. there goes the rest of my evening.'});
 Object.assign(eraLines.social,{games:['Elf Bowling rematch? i have been practicing.','i have a suspiciously urgent need to play one more game.'],videos:'someone sent me another video. i cannot promise you will stop after one.'});
 Object.assign(eraLines.modern,{games:['FarmVille has turned checking a website into agricultural shift work.','Elf Bowling rematch? i demand another chance.'],videos:'one more clip and then we do something useful. probably.'});
 const artistPatterns={early:/\b(nirvana|oasis|spice girls|backstreet boys|hanson|tupac|radiohead)\b/,boom:/\b(nsync|n sync|britney|backstreet boys|blink.?182|destiny.?s child|eminem)\b/,flash:/\b(nsync|n sync|britney|linkin park|avril|outkast|evanescence|beyonce|eminem)\b/,social:/\b(fall out boy|my chemical romance|green day|rihanna|justin timberlake|beyonce)\b/,modern:/\b(lady gaga|gaga|taylor swift|beyonce|rihanna|katy perry|coldplay)\b/};
 const allArtists=new RegExp(Object.values(artistPatterns).map(x=>x.source).join('|'));
 function topicFor(input,lastTopic){
  const text=String(input).toLowerCase().replace(/[’‘]/g,"'").trim();
  if(/\b(bot|robot|scripted|ai|artificial intelligence|real person|are (?:you|u) real|are (?:you|u) (?:a )?human)\b/.test(text))return 'identity';
  if(/\b(bye|goodnight|g2g|gtg|gotta go|see ya|ttyl|cya)\b/.test(text))return 'bye';
  if(/\b(brb|afk|be right back|be back soon)\b/.test(text))return 'brb';
  if(/\b(away (?:msg|message)|awaymsg)\b/.test(text))return 'away';
  if(/\b(asl|a\/s\/l|age sex location)\b/.test(text))return 'asl';
  if(/\b(what (?:are you|r u|are u|you) doing|whatcha doing|wyd|what.*up to)\b/.test(text))return 'activity';
  if(/\b(joke|make me laugh)\b/.test(text))return 'joke';
  if(/elf\s*bowling/.test(text))return 'elf';
  if(/\b(legolas|gandalf|lotr|lord of the rings|middle.earth|breached wall|fellowship)\b/.test(text))return 'fantasy';
  if(/\b(song|songs|music|band|playlist|cd|mp3|thenamp|winamp|radio|sing|listen)\b/.test(text)||allArtists.test(text))return 'music';
  if(/\b(youtube|video|videos|watch|cartoon|clip)\b/.test(text))return 'videos';
  if(/\b(game|games|gaming|play|score|runescape|halo|pinball)\b/.test(text))return 'games';
  if(/\b(homework|school|study|studying|class|exam|assignment)\b/.test(text))return 'school';
  if(/\b(computer|internet|connection|download|printer|windows|mac|slow|frozen|dial.?up)\b/.test(text))return 'computers';
  if(/\b(dinner|mom|mum|family|home|directions|eat|food)\b/.test(text))return 'family';
  if(/\b(website|websites|site|sites|recommend|bored|homepage|profile|where should|what should i do)\b/.test(text))return 'websites';
  if(/\b(movie|movies|pokemon|tamagotchi|matrix|harry potter|myspace|avatar|dark knight|napoleon|survivor)\b/.test(text))return 'pop';
  if(/(?:^|\n)(?:omg[ ,!]*)?(lol|haha|cool|really|why|yes|yeah|yep|no|nope|no way|nice|tell me more|what about that|what next|what now|count me in)[!?. ]*$/.test(text))return ['bye','brb','idle'].includes(lastTopic)?'idle':lastTopic&&followups[lastTopic]?'followup':'reaction';
  if(/\b(hi|hello|hey|heyy|yo|sup|how are you|what.s up|whats up)\b/.test(text))return 'greeting';
  return 'fallback';
 }
 function sentence(text){return /[.!?…]$|[:;][)(DP]$/i.test(text)?text:text+'.'}
 function typingDelay(text,style,random=Math.random){
  const base=Math.max(3000,Math.min(10000,2200+String(text).length*38+(style==='sleepy'?900:0)+random()*800));
  return Math.round(base+(random()<0.08?4000+random()*3000:0));
 }
 function makeReply({name,text,era,lastTopic,turn=0,lastReply='',awayMessage='',random=Math.random}){
  const profile=profiles[name];if(!profile||!available(name,era))return null;
  const lines=eraLines[era]||eraLines.flash,topic=topicFor(text,lastTopic);let choices,action;
  const fan=fanReplies[name]?.[era],said=String(text).toLowerCase(),subject=fan&&Object.keys(fanSubjects).find(k=>fanSubjects[k].test(said));
  const fanChoice=!fan||['identity','bye','brb','idle','away','asl'].includes(topic)?null:subject?fan[subject]:['activity','music'].includes(topic)?Object.values(fan).flat():null;
  if(fanChoice)choices=fanChoice;
  else if(topic==='identity')choices=['i am a local scripted buddy in WebThen. no messages go to a real account or an AI service.'];
  else if(topic==='bye')choices=['later! catch you next time :)','ttyl!'];
  else if(topic==='brb')choices=['k, see you in a bit :)','no rush. i will be around.'];
  else if(topic==='idle')choices=lastTopic==='brb'?['back already? hey :)']:['oh hey, still here?','thought you were heading out. hey again :)'];
  else if(topic==='asl')choices=['keeping the mysterious screen-name thing going :)','just here to hang out. no personal stats required :)'];
  else if(topic==='activity')choices=[sentence(profile[3])+' you?',sentence(profile[3])+' how about you?'];
  else if(topic==='away')choices=awayMessage?['my away message says: '+awayMessage]:['no away message right now. you caught me at the keyboard :)'];
  else if(topic==='joke')choices=['my homework and i have agreed to see other people.','my printer only jams when it knows i am already late.','i organized my desk. now i cannot find anything.'];
  else if(topic==='reaction')choices=['lol right?','haha, yeah :)','i know!!'];
  else if(topic==='greeting')choices=[sentence(profile[2])+' '+sentence(profile[3])+' what are you up to?',sentence(profile[2])+' '+sentence(profile[3])+' how is your evening?'];
  else if(topic==='elf'){
   if(['social','modern'].includes(era)){choices=['Elf Bowling rematch? see if you can beat my score :)'];action={kind:'game',id:'elf-bowling-gba',label:'Play Elf Bowling 1 & 2 · GBA (2005)'}}
   else if(era==='early'){choices=['i was about to play Minesweeper. want to compare times?'];action={kind:'catalog',name:'GeoCities',label:'Explore GeoCities homepages'}}
   else {choices=['those elves are ridiculous. i am going to lose the rest of my evening to this.'];action={kind:'download',id:'elf-bowling-windows',label:'Elf Bowling · Windows original · download required'}}
  }
  else if(topic==='fantasy')choices=era==='early'?['i could reread The Hobbit instead of doing homework. a very sensible plan.']:name==='HammzT10'?['Legolas is clearly the correct choice. i will be accepting no questions. the Woodland Realm awaits.','Gandalf could use a second player. are you volunteering for this quest? the Woodland Realm awaits.']:['Middle-earth sounds like an excellent reason to postpone homework.','which character are you choosing?'];
  else if(topic==='videos'){choices=[lines.videos];action={kind:'videos',label:'Open Video Lounge · selected era'}}
  else if(topic==='websites'){choices=['try '+lines.website+'. i was only going to look for a minute and you know how that goes.','i would start with '+lines.website+'. tell me what you find.'];action={kind:'catalog',name:lines.website,label:'Visit '+lines.website}}
  else if(topic==='family')choices=name==='ekillians'?['are you coming over for dinner? i need an actual answer this time.','the directions are on the kitchen counter. please take them before somebody moves them.']:name==='mom_says_hi'?['Have you eaten? Please save your work before you leave the computer.','Let me know what time you will be home.']:['i should probably check whether anyone needs the phone before making plans.','what time are we supposed to be there?'];
  else if(topic==='followup')choices=followups[lastTopic];
  else if(topic==='music'&&allArtists.test(String(text).toLowerCase()))choices=artistPatterns[era]?.test(String(text).toLowerCase())?['that is going on the next mix. now the question is where in the track order.','yes! headphones on, homework postponed.']:['i am still working through my CD pile. what should i put on next?'];
  else if(lines[topic])choices=lines[topic];
  else choices=({energetic:['lol wut?','wait, say that again?'],dreamy:['hmm? got distracted for a second :)','what do you mean?'],poetic:['lost my train of thought there. try me again?','hmm. tell me a little more?'],'dry humor':['i am going to need a little more context lol','wait, what?'],'practical parent':['Could you explain what you mean?'],'practical family':['wait, what do you mean?'],'Middle-earth fan':['even an elf needs a little more context.','wait, what?']}[profile[0]]||['wait, what?','haha, you lost me. say that another way?']);
  if(topic==='games')action=era==='early'?{kind:'catalog',name:'GeoCities',label:'Explore GeoCities homepages'}:['social','modern'].includes(era)?{kind:'game',id:'elf-bowling-gba',label:'Play Elf Bowling 1 & 2 · GBA (2005)'}:{kind:'catalog',name:'Newgrounds',label:'Visit Newgrounds · playback untested'};
  const prefix=!['greeting','identity','bye','brb','idle','away','asl'].includes(topic)&&turn%3===2?({energetic:'yo, ',bubbly:'omg, ','competitive gamer':'okay, ','enthusiastic schemer':'hear me out: '}[profile[0]]||''):'';
  const decorated=choices.map(line=>prefix+line),filtered=decorated.filter(line=>line!==lastReply),pool=filtered.length?filtered:decorated;
  return {text:pool[(turn+Math.floor(random()*pool.length))%pool.length],topic:topic==='followup'?lastTopic:topic,era,scripted:true,action,personality:profile[0]};
 }
 const api={makeReply,profiles,topicFor,eraLines,available,contactFrom,typingDelay};if(typeof module==='object'&&module.exports)module.exports=api;else root.WebThenReplies=api;
})(globalThis);
