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
 // Small talk: common short messages and several replies for each. {status}, {fav} and {name} come from the buddy's profile.
 const smallTalk=[
  ['serious',/\b(kill myself|killing myself|suicide|suicidal|want to die|wanna die|end it all|hurt myself|hurting myself|self.harm)\b/],
  ['howareyou',/\b(how (?:are|r) (?:you|u|ya)|hru|how(?:'s| is) it going|how (?:you|u) doin|how(?:'s| was) (?:your|ur) (?:day|night|weekend)|how have you been)\b|^(?:and )?(?:you|u|wbu|hbu|how about you)\?*$|^(?:you|u) ok\??$/],
  ['whatsnew',/\b(what'?s new|anything new|what'?s good|wuu2|what (?:is|r) (?:up|new) with (?:you|u))\b/],
  ['good',/^(?:(?:i'?m |im )(?:ok|okay|alright)|(?:i'?m |im )?(?:good|great|fine|pretty good|not bad|doing good|doing great|amazing|awesome))(?: thanks| thx| tho)?[!. ]*(?:you\??|u\??)?$/],
  ['sad',/:\(|:'\(|😢|😭|☹|\b(i'?m sad|im sad|so sad|sad today|bad day|worst day|not good|not great|i hate today|feeling down|upset|i'?m crying|crying|ugh+|sucks|i'?m stressed|stressed out|lonely)\b|^bad[!. ]*$/],
  ['love',/<3|❤|💕|💖|😍|😘|🥰|\b(ily|ilu|love (?:you|u|ya)|luv (?:you|u|ya)|xoxo|hugs|\*hug\*|\*hugs\*)\b/],
  ['laugh',/😂|🤣|\bx-?d\b|\b(lmao|lmfao|rofl|roflmao|hehe+|lolol+|lulz|haha(?:ha)+|bahaha+)\b/],
  ['smile',/^(?::\)|:-\)|:d|:-d|=\)|\^_\^|\^\^|😊|🙂|😄|😁|☺|c:)+[!. ]*$/],
  ['wink',/^(?:;\)|;-\)|:p|:-p|xp|b-?\)|😉|😜|😛|😎|👍|👌|🔥|💀|🙌|🎉|✌)+[!. ]*$/],
  ['thanks',/\b(thanks|thank you|thank u|thx|ty|tyvm|tysm|thanx|thnx)\b/],
  ['sorry',/\b(sorry|sry|soz|my bad|apologies|i apologize|oops)\b/],
  ['night',/\b(gn|nite|good nite|night night|going to bed|going to sleep|bedtime|so tired|i'?m tired|sleepy|falling asleep)\b|^night[!. ]*$/],
  ['morning',/\b(good morning|mornin'?|gm)\b|^morning[!. ]*$/],
  ['compliment',/\b(?:you'?re|ur|you are|u r) (?:so )?(?:funny|cool|awesome|the best|nice|sweet|smart|great|hilarious|amazing)\b|\b(nice|cool|love your|i like your) (?:screen ?)?name\b/],
  ['insult',/\b(you suck|u suck|ur dumb|you'?re dumb|you are dumb|shut up|loser|you'?re boring|ur boring|ur weird|you'?re weird|you'?re annoying|ur annoying|go away|i hate you)\b/],
  ['miss',/\b(miss (?:you|u|ya)|missed (?:you|u|ya)|where (?:have you|have u|you) been|long time no (?:see|talk)|it'?s been forever|haven'?t talked)\b/],
  ['hang',/\b(wanna hang|want to hang|hang out|come over|wanna chat|want to chat|wanna talk|want to talk|can we talk|call me|let'?s do something|wanna do something)\b/],
  ['whoareyou',/\b(who (?:are|r) (?:you|u)|who is this|who'?s this|do i know (?:you|u)|how do i know (?:you|u)|what'?s your name|whats ur name)\b/],
  ['favorite',/\b(what do you like|what are you into|what'?s your (?:fav|favorite|favourite)|what'?s ur fav|favorite thing|fave)\b/],
  ['plans',/\b(any plans|got plans|plans (?:for|this|tonight|tomorrow)|this weekend|doing anything (?:fun|tonight|later)|what are (?:you|u) doing (?:tonight|tomorrow|this weekend|later))\b/],
  ['weather',/\b(weather|raining|rainy|snowing|snow day|snowstorm|so hot|so cold|freezing|sunny|thunderstorm)\b/],
  ['crush',/\b(crush|like anyone|like-like|boyfriend|girlfriend|bf|gf|dating|going out with|gossip|drama)\b/],
  ['pets',/\b(my dog|my cat|my puppy|my kitten|puppy|kitten|my pet|hamster|goldfish|my bird)\b/],
  ['birthday',/\b(birthday|bday|b-day)\b/],
  ['excited',/\b(guess what|i got a|i just got|yay+|woo+|woohoo|i'?m so excited|so excited|best day)\b/],
  ['help',/\b(help me|can you help|i need help|need advice|any advice|what should i do about)\b/],
  ['test',/^(?:test|testing|hello\?+|helloo+|anyone (?:there|home)\??|(?:are )?(?:you|u) there\??|ping|knock knock)[!?. ]*$/],
  ['agree',/^(?:same|same here|me too|me 2|ikr|true|so true|totally|exactly|for real|fr|agreed|word|right)[!?. ]*$/],
  ['ok',/^(?:ok|k|kk|okay|okk|okie|sure|alright|aight|fine|fair|cool cool|sounds good)[!. ]*$/],
  ['hmm',/^(?:hmm+|\.\.\.+|idk|i don'?t know|dunno|huh|what\?*|\?+|eh|meh|um+|uh+)[!?. ]*$/],
  ['omg',/^(?:omg|oh my god|wow+|whoa+|woah+|dang|dude|seriously)[!?. ]*$/],
  ['nvm',/\b(nvm|never ?mind|forget it)\b/]
 ];
 const smallTalkReplies={
  serious:['that sounds really heavy. i\'m just a pretend buddy in a nostalgia app, so please talk to someone you trust right now, or call or text 988 if you\'re in the US.'],
  howareyou:['pretty good! just {status}. you?','can\'t complain. well, i can, but i won\'t :) how are you?','good now that someone fun is online lol. how about you?','eh, surviving. {status}. what about you?'],
  whatsnew:['not much! {status}. you?','same old. {status}. what\'s new with you?','nothing exciting yet. give me news!'],
  good:['good! glad to hear it :)','nice :) that\'s what i like to hear','yay. good days are the best','sweet. what\'s been good about it?'],
  sad:[':( what happened?','aw no. want to talk about it, or want me to distract you?','that stinks. *hugs*','bad days are the worst. i\'m here if you want to vent'],
  love:['<3 <3','aww :) <3 right back','*hugs* lol','ok now i\'m smiling at my monitor like a dork <3'],
  laugh:['lmao i know right','rofl ok i\'m glad SOMEONE thinks i\'m funny','hahaha stoppp','i laughed so loud someone asked what was funny'],
  smile:[':D','^_^','what are you so happy about? spill','=) good mood today huh'],
  wink:[';)','lol :P','B-)','haha ;)'],
  thanks:['np!','anytime :)','no prob bob','you owe me one. kidding. mostly.'],
  sorry:['it\'s ok, no worries','lol you\'re forgiven','don\'t worry about it :)','apology accepted. this time ;)'],
  night:['night! don\'t let the bedbugs byte lol','gn :) sweet dreams','already?? ok fine. night!','sleep is for the weak. but ok, night :)'],
  morning:['morning! you\'re up early','good morning :) i need cereal before i can function','morning sunshine lol'],
  compliment:['aw stop it. no, keep going :)','i know ;) jk thanks!','you\'re pretty cool yourself'],
  insult:['wow ok rude lol','takes one to know one :P','ouch. my feelings. they\'re in pieces. lol','i\'m telling. jk. what\'s wrong?'],
  miss:['i know!! it\'s been forever','aww i missed you too. where have YOU been?','life got busy. but i\'m back now :)'],
  hang:['yes! when?','maybe later? gotta ask first lol','always down. what do you want to do?','can\'t leave the house right now but we can chat here :)'],
  whoareyou:['it\'s me! {name}. we\'ve been buddies forever lol','you added me, remember? lol','just your friendly neighborhood {name}'],
  favorite:['honestly? {fav}. always {fav}.','{fav}, obviously. what about you?','easy. {fav}. what\'s yours?'],
  plans:['no big plans. probably right here lol','maybe the mall? if i can get a ride','sleeping in. that\'s the whole plan','you tell me! i\'m open'],
  weather:['SNOW DAY please please please','perfect weather for staying inside on the computer lol','ugh it\'s so gross out'],
  crush:['omg who?? i won\'t tell','no comment lol. ok fine maybe','drama?? spill'],
  pets:['aww what\'s their name?','pics or it didn\'t happen. ok i know they take forever to load lol','my dog just barked at nothing for ten minutes. normal day'],
  birthday:['happy birthday!! :D','ooh birthday! is there cake?','birthday!! what are you doing for it?'],
  excited:['WHAT?? tell me tell me','omg what happened?','yay!! details please'],
  help:['sure, what\'s up?','i\'ll try lol. what\'s going on?','i\'m listening. what do you need?'],
  test:['i\'m here!','yep, still here lol','loud and clear'],
  agree:['ikr','right?? exactly','great minds lol'],
  ok:['k :)','cool cool','alrighty','...so what\'s new?'],
  hmm:['lol same honestly','you ok? you seem distracted','hellooo? earth to you','idk either. that\'s the spirit'],
  omg:['i KNOW','right?!','omg what'],
  nvm:['lol ok','now i\'m curious though','ok but you can\'t just say that and leave lol']
 };
 const parentSmallTalk={love:['Love you too, sweetheart. Have you eaten?'],howareyou:['I\'m fine, honey. Did you finish your homework?'],night:['Goodnight, sweetie. Don\'t stay up too late on the computer.'],sad:['Oh honey. Do you want to talk about it when I get home?'],crush:['Is this about someone from school? I won\'t ask. (I\'m asking.)'],insult:['Excuse me? Try that again.'],thanks:['You\'re welcome, honey.'],miss:['I miss you too. Call more often!']};
 const favLabels={music:'music',games:'games',websites:'making websites',school:'avoiding homework',computers:'computers',fantasy:'anything Middle-earth',family:'family dinners',fantasyfan:'fantasy'};
 // Graceful exits: era lines a buddy uses to leave a conversation instead of getting stuck on messages it can't follow.
 const exitLines={"all":["hey sorry, gotta go. someone needs the computer. ttyl!","g2g, dinner's ready and my mom said NOW","ok i have to actually do my homework now. ttyl!","gtg, my brother is literally standing behind me waiting for the computer","gotta run! talk later :)"],"early":["gotta go, my mom needs to use the phone. ttyl!","hey sorry, gotta go. we're headed to Blockbuster to pick out a couple of movies for this weekend","g2g, TGIF is starting","my dad says i've been tying up the phone line too long. bye!!","gotta go, my favorite song is on the radio and i'm taping it"],"boom":["hey sorry, gotta go. we're headed to Blockbuster to pick out a couple of movies for this weekend","g2g, TRL is on","gotta go, my Napster download finally finished and i need to burn it before someone picks up the phone","g2g, we're going to Pizza Hut to use my BOOK IT! certificate","my mom needs the phone line. bye!!"],"flash":["gtg, we're going to Blockbuster. hope the new release wall isn't empty","g2g, The O.C. is starting","gotta go, my mom's driving me to the mall to get a CD","g2g, my parents are making me get off the computer. ttyl!","gtg, going to Hot Topic before it closes"],"social":["gtg, Blockbuster run with my dad. two movies and microwave popcorn","g2g, the Netflix DVD came in the mail and we're watching it tonight","gotta go update my MySpace before bed","sorry gtg, my sister needs the computer for her MySpace","g2g, out of texts for the month and i still have homework"],"modern":["gtg, the Netflix envelope came and we're watching it tonight","g2g, my mom is taking my laptop. ttyl!","gotta go, my Sidekick battery is dying","g2g, going to a friend's to play Rock Band","gtg, Gossip Girl is on"]},parentExitLines=["I have to go, honey. Dinner won't make itself. Love you!", "I'm heading to the store. Call me later!"];
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
  if(smallTalk[0][1].test(text))return 'serious';
  if(/\b(bot|robot|scripted|ai|artificial intelligence|real person|are (?:you|u) real|are (?:you|u) (?:a )?human)\b/.test(text))return 'identity';
  if(/\b(bye|goodnight|g2g|gtg|gotta go|see ya|ttyl|cya)\b/.test(text))return 'bye';
  if(/\b(brb|afk|be right back|be back soon)\b/.test(text))return 'brb';
  if(/\b(away (?:msg|message)|awaymsg)\b/.test(text))return 'away';
  if(/\b(asl|a\/s\/l|age sex location|how old (?:are|r) (?:you|u)|where (?:do you|do u|you) live|where (?:are|r) (?:you|u) from|boy or (?:a )?girl)\b/.test(text))return 'asl';
  if(/\b(what (?:are you|r u|are u|you) doing|whatcha doing|wyd|what.*up to)\b/.test(text))return 'activity';
  if(!/(?:^|\n)(?:omg[ ,!]*)?(lol|haha|cool|really|why|yes|yeah|yep|no|nope|no way|nice|tell me more|what about that|what next|what now|count me in)[!?. ]*$/.test(text))for(const [intent,re] of smallTalk.slice(1))if(re.test(text))return intent;
  if(/\b(joke|make me laugh)\b/.test(text))return 'joke';
  if(/elf\s*bowling/.test(text))return 'elf';
  if(/\b(legolas|gandalf|lotr|lord of the rings|middle.earth|breached wall|fellowship)\b/.test(text))return 'fantasy';
  if(/\b(song|songs|music|band|playlist|cd|mp3|thenamp|winamp|radio|sing|listen)\b/.test(text)||allArtists.test(text))return 'music';
  if(/\b(youtube|video|videos|watch|cartoon|clip)\b/.test(text))return 'videos';
  if(/\b(game|games|gaming|play|score|runescape|halo|pinball)\b/.test(text))return 'games';
  if(/\b(homework|school|study|studying|class|exam|exams|test|tests|quiz|assignment)\b/.test(text))return 'school';
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
  const canExit=!['serious','identity','bye','brb','idle'].includes(topic),confused=topic==='fallback'&&(lastTopic==='fallback'||(turn>=4&&random()<0.5)),longChat=turn>=12&&random()<0.4;
  if(canExit&&(confused||longChat)){const pool=profile[0]==='practical parent'?parentExitLines:[...exitLines.all,...(exitLines[era]||[])];return {text:pool[Math.floor(random()*pool.length)%pool.length],topic:'exit',era,scripted:true,exit:true,personality:profile[0]}}
  const fan=fanReplies[name]?.[era],said=String(text).toLowerCase(),subject=fan&&Object.keys(fanSubjects).find(k=>fanSubjects[k].test(said));
  const fanChoice=!fan||['identity','bye','brb','idle','away','asl','serious'].includes(topic)?null:subject?fan[subject]:['activity','music'].includes(topic)?Object.values(fan).flat():null;
  if(fanChoice)choices=fanChoice;
  else if(smallTalkReplies[topic])choices=(profile[0]==='practical parent'&&parentSmallTalk[topic])||smallTalkReplies[topic];
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
  else choices=({energetic:['lol wut?','huh??'],dreamy:['hmm?','huh? :)'],poetic:['hm?','...what?'],'dry humor':['context please lol','wait, what?'],'practical parent':['What, honey?','Huh?'],'practical family':['huh?','what?'],'Middle-earth fan':['huh? even Legolas is confused','wait, what?']}[profile[0]]||['wait, what?','huh?']);
  choices=choices.map(line=>String(line).replace(/\{status\}/g,profile[3]).replace(/\{fav\}/g,favLabels[profile[1]]||profile[1]).replace(/\{name\}/g,name));
  if(topic==='games')action=era==='early'?{kind:'catalog',name:'GeoCities',label:'Explore GeoCities homepages'}:['social','modern'].includes(era)?{kind:'game',id:'elf-bowling-gba',label:'Play Elf Bowling 1 & 2 · GBA (2005)'}:{kind:'catalog',name:'Newgrounds',label:'Visit Newgrounds · playback untested'};
  const prefix=!['greeting','identity','bye','brb','idle','away','asl'].includes(topic)&&!smallTalkReplies[topic]&&turn%3===2?({energetic:'yo, ',bubbly:'omg, ','competitive gamer':'okay, ','enthusiastic schemer':'hear me out: '}[profile[0]]||''):'';
  const decorated=choices.map(line=>prefix+line),filtered=decorated.filter(line=>line!==lastReply),pool=filtered.length?filtered:decorated;
  return {text:pool[(turn+Math.floor(random()*pool.length))%pool.length],topic:topic==='followup'?lastTopic:topic,era,scripted:true,action,personality:profile[0]};
 }
 const api={makeReply,profiles,topicFor,eraLines,available,contactFrom,typingDelay};if(typeof module==='object'&&module.exports)module.exports=api;else root.WebThenReplies=api;
})(globalThis);
