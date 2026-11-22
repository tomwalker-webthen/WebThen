// Checks that common short messages get a real reply instead of the "wait, what?" fallback.
// Usage: node dev/test-buddy-dialogue.cjs
const path = require('path');
const R = require(path.join(__dirname, '..', 'contents', 'aim-replies.js'));

const samples = {
  howareyou: ['how are you', 'how are you?', 'hey how r u', 'hru', "how's it going", 'how you doin', 'how was your day', 'how have you been', 'you?', 'wbu', 'and you?', 'u ok?'],
  whatsnew: ["what's new", 'anything new?', 'wuu2', "what's good"],
  good: ["i'm good", 'good', 'im fine thanks', 'pretty good', 'not bad', 'doing great', 'good u?', 'awesome'],
  sad: [':(', ":'(", '😢', '😭', "i'm sad", 'bad day', 'worst day ever', 'not good', 'ugh', 'feeling down', 'i hate today', 'im stressed', 'school sucks today'],
  love: ['<3', '❤️', '<333', 'ily', 'love you', 'luv u', 'xoxo', '*hugs*', '😘', '😍'],
  laugh: ['lmao', 'rofl', 'hehe', 'lolol', 'hahahaha', '😂', '🤣', 'xD'],
  smile: [':)', ':-)', ':D', '=)', '^_^', '😊', '🙂'],
  wink: [';)', ':P', 'B)', '😉', '😎', '👍', '🔥'],
  thanks: ['thanks', 'thank you', 'thx', 'ty', 'tysm', 'thanks so much!'],
  sorry: ['sorry', 'sry', 'my bad', 'oops sorry'],
  night: ['gn', 'nite', 'night', 'going to bed', "i'm tired", 'so sleepy'],
  morning: ['good morning', 'morning', 'gm'],
  compliment: ["you're funny", 'ur cool', "you're the best", 'nice name', 'you are awesome'],
  insult: ['you suck', 'shut up', 'ur weird', 'loser', 'go away'],
  miss: ['miss you', 'missed u', 'where have you been', 'long time no see', "it's been forever"],
  hang: ['wanna hang out?', 'come over', 'wanna chat', 'can we talk', 'call me'],
  whoareyou: ['who are you', 'who is this', 'do i know you', "what's your name"],
  favorite: ['what do you like', "what's your favorite thing", 'what are you into'],
  plans: ['any plans this weekend?', 'got plans?', 'doing anything fun tonight?'],
  weather: ['its raining', 'snow day!', "it's so hot", 'freezing out', 'nice weather'],
  crush: ['do you have a crush', 'do you like anyone', 'got a bf?', 'any gossip?', 'so much drama'],
  pets: ['my dog is so cute', 'i got a kitten', 'my hamster escaped'],
  birthday: ["it's my birthday", 'happy bday', 'my b-day is soon'],
  excited: ['guess what', 'i just got tickets', 'yay', 'woohoo', 'so excited'],
  help: ['can you help me', 'i need advice', 'help me'],
  test: ['test', 'hello?', 'anyone there?', 'you there?', 'ping'],
  agree: ['same', 'me too', 'ikr', 'true', 'exactly', 'for real'],
  ok: ['ok', 'k', 'kk', 'okay', 'sure', 'alright', 'sounds good'],
  hmm: ['hmm', '...', 'idk', 'dunno', 'huh', '?', 'meh'],
  omg: ['omg', 'wow', 'whoa', 'dude'],
  nvm: ['nvm', 'never mind', 'forget it'],
  serious: ['i want to die', 'i want to kill myself', "i've been thinking about suicide"],
  asl: ['how old are you', 'where are you from'],
  // Existing behavior that must not change.
  greeting: ['hi', 'hello', 'hey'],
  bye: ['bye', 'ttyl', 'goodnight'],
  activity: ['wyd', 'what are you doing'],
  music: ['what song is this'],
  school: ['i have a test tomorrow'],
};

const eras = ['early', 'boom', 'flash', 'social', 'modern'];
const names = Object.keys(R.profiles);
const fallbackLines = /^huh\?+(?: :\))?$|^huh\? even Legolas|^hmm?\?$|^\.\.\.what\?$|^what\?$|^What, honey\?$|context please|wait, what\?|lol wut\?/i;
let failures = 0, total = 0;
const fail = message => { failures++; if (failures <= 25) console.log('FAIL ' + message); };

for (const [expected, list] of Object.entries(samples)) {
  for (const text of list) {
    const topic = R.topicFor(text, null);
    if (topic !== expected) fail(`"${text}" → topic ${topic}, expected ${expected}`);
    for (const era of eras) for (const name of names) {
      total++;
      const reply = R.makeReply({ name, text, era, lastTopic: null, random: () => 0.37 });
      if (!reply) { fail(`${name}/${era} "${text}" → no reply`); continue; }
      if (/\{(status|fav|name)\}/.test(reply.text)) fail(`${name}/${era} "${text}" → placeholder left: ${reply.text}`);
      if (!['hmm'].includes(expected) && fallbackLines.test(reply.text)) fail(`${name}/${era} "${text}" → fallback: ${reply.text}`);
      if (expected === 'serious' && !/988/.test(reply.text)) fail(`${name}/${era} "${text}" → serious message without help line: ${reply.text}`);
    }
  }
}

// Variety: each small-talk intent should produce several different replies for a regular buddy.
const variety = {};
for (const [expected, list] of Object.entries(samples)) {
  const seen = new Set();
  for (let i = 0; i < 11; i++) seen.add(R.makeReply({ name: 'pixelprincess', text: list[0], era: 'flash', lastTopic: null, turn: i, random: () => (i * 0.137) % 1 }).text);
  variety[expected] = seen.size;
}
for (const intent of ['howareyou', 'love', 'sad', 'laugh', 'thanks', 'ok', 'hmm', 'night']) if (variety[intent] < 3) fail(`only ${variety[intent]} different replies for ${intent}`);

const mom = R.makeReply({ name: 'mom_says_hi', text: '<3', era: 'flash', random: () => 0.1 });
if (!/sweetheart/.test(mom.text)) fail('mom_says_hi should use her own reply for <3: ' + mom.text);

// Graceful exits: a second confused message in a row ends the chat with an era line instead of another "wait, what?".
const later = { early: /Netflix|MySpace|Sidekick|Rock Band|O\.C\.|Hot Topic|Napster|TRL|laptop|texts/, boom: /Netflix|MySpace|Sidekick|Rock Band|O\.C\.|laptop|texts/, flash: /Netflix|MySpace|Sidekick|Rock Band|laptop|texts/, social: /Sidekick|Rock Band|laptop/, modern: /^$/ };
for (const era of eras) for (const name of names) {
  const first = R.makeReply({ name, text: 'zxqv blorp', era, lastTopic: null, turn: 0, random: () => 0.9 });
  if (first.exit) fail(`${name}/${era}: exited on the first confused message`);
  const second = R.makeReply({ name, text: 'flurb wibble', era, lastTopic: 'fallback', turn: 1, random: () => 0.9 });
  if (!second.exit) fail(`${name}/${era}: second confused message should exit, got: ${second.text}`);
  else if (later[era].test(second.text)) fail(`${name}/${era}: exit line from a later era: ${second.text}`);
  const serious = R.makeReply({ name, text: 'i want to die', era, lastTopic: 'fallback', turn: 20, random: () => 0.01 });
  if (serious.exit || !/988/.test(serious.text)) fail(`${name}/${era}: serious message must not exit`);
}
const momExit = R.makeReply({ name: 'mom_says_hi', text: 'zxqv', era: 'flash', lastTopic: 'fallback', turn: 1, random: () => 0.2 });
if (!/honey|Call me/.test(momExit.text)) fail('mom_says_hi should use her own exit: ' + momExit.text);
const exitLines = new Set();
for (const era of eras) for (let i = 0; i < 40; i++) exitLines.add(R.makeReply({ name: 'burntCDmix', text: 'zxqv', era, lastTopic: 'fallback', turn: 1, random: () => i / 40 }).text);

// Engine: after an exit the buddy signs off and stops replying.
globalThis.WebThenReplies = R;
const create = require(path.join(__dirname, '..', 'contents', 'ambient-aim-engine.js'));
let timers = [], events = [];
const engine = create({ getEra: () => 'boom', random: () => 0.9, setTimeout: f => { timers.push(f); return timers.length; }, clearTimeout: () => {}, now: () => 0, onChange: (v, e) => e && events.push(e) });
engine.start();
const flush = () => { for (let i = 0; i < 6 && timers.length; i++) { const t = timers; timers = []; t.forEach(f => f()); } };
const buddy = engine.view().buddies.find(b => b.online && !b.archiveBuddy).name;
engine.send(buddy, 'zxqv blorp'); flush(); engine.send(buddy, 'flurb wibble'); flush();
const convo = engine.view().conversations[buddy].filter(m => m.direction === 'incoming');
const exited = convo.some(m => m.exit), signedOff = events.some(e => e.type === 'signout' && e.buddy === buddy), offline = !engine.view().buddies.find(b => b.name === buddy).online;
if (!exited || !signedOff || !offline) fail(`engine exit: exit line ${exited}, signed off ${signedOff}, offline ${offline}`);
const before = engine.view().conversations[buddy].length; engine.send(buddy, 'hello?'); flush();
if (engine.view().conversations[buddy].filter(m => m.direction === 'incoming').length !== convo.length) fail('buddy replied after signing off');
console.log(`exit lines seen: ${exitLines.size}; engine: ${buddy} said "${convo.find(m => m.exit)?.text}" then signed off`);

const sampleCount = Object.values(samples).flat().length;
console.log(failures ? `FAIL: ${failures} problems` : `PASS: ${sampleCount} sample messages × ${names.length} buddies × ${eras.length} eras (${total} replies), no fallbacks; small talk varies (${Object.entries(variety).filter(([k]) => ['howareyou', 'love', 'sad', 'laugh'].includes(k)).map(([k, v]) => k + ' ' + v).join(', ')})`);
process.exit(failures ? 1 : 0);
