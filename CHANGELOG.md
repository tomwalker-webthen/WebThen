# Snood in the Game Room — 2026-11-26

- Added the real Snood (1999 MS-DOS shareware release) from the Internet Archive, played through its DOSBox emulator. Shown in every era (the game first appeared on the Mac in 1996).
- Tested locally: the card appears in the early and modern eras, and Play opens `archive.org/embed/msdos_Snood_1999` in the game window. Gameplay inside WebThen is not yet confirmed because the sandbox cannot reach archive.org.

# Live QA across eras and themes — 2026-11-19

- Checked the protected WebThen.org build at `57abc94` using all 28 era-compatible theme combinations at 1280×720 and 1440×900 (56 startup layout cases), plus 84 tour-step fit checks.
- Found four issues: Classic Mac menu-bar occlusion, raw archive 429 pages reported as Done, Show Appearance tour action not opening settings, and silent Dial-up retaining a roughly five-second delay. No app fixes or deployment were made in this QA task.
- Functional results, reproduction steps, provider errors and coverage limits: dev/qa/LIVE-QA-2026-11-19.md. Access membership and main are unchanged.

# Private preview deployment — 2026-11-19

- Deployed combined commit `57abc94` through `hosting/cloudflare-pages` to https://webthen.org/. Main was not changed.
- Includes ThenChat, original shell/category artwork and six ThenAmp skins, initial-Connect Favorites repair, stronger tour spotlight, and the remembered 2002–2004 Dial-up/Broadband choice. Includes the previously prepared current-edition Line Rider routing repair.
- Existing approved-email protection, DNS and policy membership are unchanged. No public release or payment work.
- Deployment details and honest test limits: dev/hosting/RELEASE-2026-11-19.md. Earlier Unreleased entries below describe development history; these listed features are now deployed.

# Private test custom domain — 2026-11-19

- Connected WebThen.org to the existing hosting/cloudflare-pages preview with a proxied CNAME. Pages reports Active / SSL enabled.
- Added the exact hostname to the existing protected application before DNS activation; retained the shared approved-email policy and one-week sessions.
- Checked anonymous HTTP → HTTPS → Access redirects, existing authorized browser entry and excluded-source Not found pages.
- No app code, policy membership, release/deployment or main changes. Recorded setup in dev/hosting/WEBTHEN-ORG.md.

# Unreleased — Christmas in every era and a ThenAmp station list — 2026-11-22

- In the holiday season (Nov 15 – Jan 6) every era lists all six Christmas stations (Traditional, Oldies, Standards, Pop Hits, plus new Swing and Country), the era's closest match first, and Follow era plays that match. Outside the season ThenAmp is unchanged.
- ThenAmp's lower pane is now a Winamp-style station list showing station names only: click to switch, double-click to switch and play, arrow keys and Enter, current station highlighted, skin colors, scrolls when long. The 1.5× button stays in the "Stations" header; the dropdown remains underneath for ThenAmp's own logic.
- Tested in Chrome: all five eras in season and in July (lists, Follow era defaults, no console errors); list click, double-click, keyboard and Next button with the highlight following; ThenAmp still fits a 1280×720 screen. now-playing test covers the new stations.

# Unreleased — Seasonal Christmas station for each era — 2026-11-22

- From November 15 to January 6 (by the visitor's real date) ThenAmp's Station list adds one Christmas station for the current era: 181.FM Christmas Traditional (1995–1998), 181.FM Christmas Oldies (1999–2001), 1.FM Always Christmas (2002–2004) and 181.FM Christmas Power (2005–2009). Outside the season they are hidden; a saved seasonal station falls back to the era's decade station. Song titles work for these stations too.
- ThenAmp now updates its station list when the era is chosen on Connect To, and "Follow era" switches to that era's decade station (previously it kept the station from the last visit until a reload).
- Tested in Chrome for all five eras in season and with the clock set to July: correct station listed and tuned, correct now-playing request, no console errors. now-playing test updated for the new stations. Live stream playback not tested from the development machine. Details in contents/MUSIC-CREDITS.md.

# Unreleased — Classic Winamp skins back in ThenAmp — 2026-11-22

- ThenAmp uses the six classic Winamp-era skins again for private testing: Classic Winamp, Winamp5 Classified, Sony CDX-MP3, AMPBOY, Windows XP and OS8 Aquamarine. Testers who picked an original skin in the last few days get its Winamp counterpart (Graphite → Classic Winamp, Skyline → Windows XP, and so on).
- The six original ThenAmp skins are saved for a public release in dev/artwork/thenamp-skins/; `node dev/use-thenamp-skins.mjs original` switches back in one step (round trip tested to restore an identical page). check-original-art.cjs accepts either set and reports which is active. AGENTS.md, SKIN-CREDITS.md and dev/artwork/REVIEW.md record the decision and the release step.
- Checked in Chrome: picker lists all six skins, Classic Winamp applies, the now-playing title shows in the skin, no console errors.

# Unreleased — ThenAmp shows the current song — 2026-11-22

- While a station plays, ThenAmp's display shows the current artist and title ("No Doubt – Hey Baby"), refreshed every 20 seconds; every skin picks it up. Paused, stopped, or when a station sends no title, it shows the station name as before.
- New Cloudflare Pages Function `functions/api/now-playing.js` reads the song title embedded in the station's Shoutcast/Icecast stream; it only serves ThenAmp's three stations. See dev/hosting/WEBTHEN-ORG.md.
- Tested: dev/test-now-playing.mjs (title parsing, chunked streams, missing metadata, station allow-list) and a Chrome check with a simulated stream and endpoint (song shown while playing, station name restored on pause, no console errors). The real 181.FM and 1.FM streams could not be reached from the test machine; whether each station sends titles is unverified until checked on webthen.org.

# Unreleased — New WebThen logo, banner and favicon — 2026-11-22

- Tom's Timewarp Globe artwork, traced to SVG in its navy, teal and blue: the favicon (SVG plus a 32 px PNG fallback), a WebThen banner at the top of Connect To (the old symbol and tagline stay hidden), and the globe mark for the browser activity logo (replacing the "W"), the Internet desktop and Start-menu icon, the Start menu header and the Mac menu bar (replacing the dot).
- Checked in Chrome: Connect To at 1100×760 and 390×844 fits without scrolling; Windows XP desktop, Start menu and browser, Aqua and Classic Mac menu bars; no console errors. Repo checks pass.

# Unreleased — New ThenChat logo — 2026-11-22

- The ThenChat icon is now Tom's waving figure, traced to SVG and recolored to a black figure with a yellow outline, on the desktop, in the tray or Mac menu bar, and in the buddy list header. Classic Mac shows the desktop icon in grayscale like its other icons.
- Public-launch note added to dev/artwork/REVIEW.md: the yellow-and-black waving figure still resembles AIM's Running Man.
- Checked in Chrome on Windows XP and Classic Mac (no console errors); repo checks pass.

# Unreleased — Short confused replies for every personality — 2026-11-22

- All confused replies are now short, IM-style lines: lol wut? / huh?? (energetic), hmm? / huh? :) (dreamy), hm? / ...what? (poetic), context please lol (dry humor), What, honey? / Huh? (mom_says_hi), huh? / what? (family) and "huh? even Legolas is confused" (HammzT10). Dialogue test updated and passing.

# Unreleased — Shorter confused reply — 2026-11-22

- The default confused reply "haha, you lost me. say that another way?" is now just "huh?" (alongside "wait, what?"). Dialogue test updated and passing.

# Unreleased — Buddy dialogue: small talk and graceful exits — 2026-11-22

- About 40 small-talk intents with three to five replies each: how are you / I'm good / I'm sad, <3 and other hearts, lmao and laughing emoji, :) and winks, thanks, sorry, ok, hmm, same, omg, good night / morning, compliments, teasing, who is this, favorites, plans, weather, crushes, pets, birthdays, "guess what", help and "you there?". Replies use text emoticons only, draw on each buddy's own activity and favorite, and mom_says_hi has her own lines. "test" and "quiz" now count as school talk.
- Messages about self-harm get one plain reply that steps out of character and points to someone trusted or the 988 line; buddies never joke or leave on those.
- Graceful exits: after two confused messages in a row (sometimes after one later in a chat), or when a chat runs long, a buddy sends an era line and signs off a few seconds later, e.g. Blockbuster and TGIF in 1995–1998, Napster and BOOK IT! in 1999–2001, The O.C. and Hot Topic in 2002–2004, Netflix DVDs and MySpace in 2005–2007, Sidekick and Rock Band in 2008–2009. Messages sent while they are offline wait until they sign back on.
- New dev/test-buddy-dialogue.cjs: 189 sample messages × 23 buddies × 5 eras with no fallback replies, reply variety, era-correct exits, no exits on serious messages, and engine sign-off after an exit. Chrome chat check: "<3" answered "<3 <3", no console errors.

# Unreleased — Snarky away messages — 2026-11-22

- Replaces the six fixed away messages with 16 snarky lines for every era plus four period lines per era (phone line and TGIF in 1995–1998, TRL in 1999–2001, The O.C. and LiveJournal in 2002–2004, MySpace Top 8 and Laguna Beach in 2005–2007, Gossip Girl and Facebook in 2008–2009). Original text; no song lyrics.
- Each session shuffles which buddies start away and what they say, without repeats. During a session, online buddies occasionally go away with a fresh message or come back; the buddy list status line shows it. Away text appears in buddy tooltips, the conversation status and replies about away messages.
- Verified with 40 Node engine sessions per era (unique setups, no repeats, no other-era lines, away/back events) and the buddy list in Chrome.

# Unreleased — Every buddy in every era — 2026-11-22

- All ThenChat buddies now appear in all five eras, including sk8rKid_99, bandgeek2001, moonlight_mp3 and pwned_by_a_duck (previously 1999–2001 onward), SunKistBuTtKisS (previously 2005–2007 onward) and the six Bash.org quote buddies.
- What buddies say stays period-correct. Quote buddies appear everywhere but only post their quote in the eras listed for it (era check added; not observed firing in tests). SunKistBuTtKisS has no Avril, Twilight or Britney lines in 1995–1998 and uses ordinary chatter there; 1999–2001 is Britney only (Oops!... I Did It Again, 2000 VMAs); 2002–2004 adds Avril's Let Go era and Britney's 2003 VMAs and Me Against the Music; Twilight starts in 2005–2007.
- Verified with a Node engine run per era: all 29 buddies available, SunKistBuTtKisS online at start, no anachronistic lines, regular buddies reply in every era.

# Unreleased — New ThenChat buddy: SunKistBuTtKisS — 2026-11-22

- Adds SunKistBuTtKisS (Buddies group), available from 2005–2007 onward because the first Twilight book is from late 2005. Starts signed on in those eras so the new buddy is visible right after Connect.
- Superfan buddy: every message is about Avril Lavigne, Twilight or Britney Spears, using lines true on each era's visit date (October 2006: New Moon, Avril's July 2006 wedding, Over the Hedge; October 2008: the upcoming Twilight film, Breaking Dawn, Womanizer, Britney's 2008 VMA wins, Circus in December). Replies stay on those subjects when you mention them or ask what they are up to; identity, goodbye and brb replies are unchanged.
- Other buddies' messages and replies are unchanged. Verified with a Node engine run per era (on-topic messages in 2005–2009, hidden with no messages in earlier eras), reply checks, and the buddy list in Chrome.

# Unreleased — Clean startup and window behavior — 2026-11-20

- Connect now opens an empty desktop. The Start page, ThenAmp and the buddy list no longer open on their own; the Start page taskbar button no longer launches ThenChat or ThenAmp.
- ThenChat signs on minimized to the tray. The tray icon blinks while a message is unread (steady highlight with reduced motion), and the ThenChat desktop icon now shows the buddy list instead of signing off.
- Quick tour rewritten around the desktop: Internet, ThenChat in the tray, ThenAmp/Video Lounge/Game Room, the clock, Appearance and the taskbar. It starts once the desktop appears; the first run cannot be skipped, replays can.
- Window fixes: restore buttons clear when a window returns by any route (previously a minimized window reopened from its icon left a stale taskbar button); Video Lounge, conversations and browser windows no longer get a second taskbar button; minimizing a game now hides it and the game reappears correctly after close/reopen; ThenAmp, Appearance, the skin picker and the tour no longer offer Maximize (ThenAmp stretched only vertically).
- Hidden ThenAmp, buddy list and conversation windows now stay hidden; their stylesheet previously overrode the hidden state.
- Classic Mac: the menu bar is visible and clickable again (fixed position, Platinum styling), and windows stop below it. Mac minimized-window buttons use a window icon instead of a house.
- Phones under 520 px: the taskbar hides the Directory and Start page shortcuts (both remain in the Start menu) so the clock fits.

# Unreleased — Connection screen cleanup — 2026-11-20

- Remove the separate era/visit-date line from Connect To; the Travel to selector already shows the same text. Era selection, labels and connection behavior are unchanged.
- Verified in headless Chrome: all five eras selectable, Connect reaches the desktop, no script errors.

# Unreleased — ThenChat message sounds — 2026-11-19

- Play the message sound when you send a ThenChat message, as well as when a buddy's message arrives.
- Unlock buddy sounds on the first tap, click or key press so phones and strict browsers allow later sign-in, sign-out and message sounds. The unlock is silent and respects the existing sound toggle and volume.
- Verified in headless Chrome: send and receive both play; no console errors. Physical audio output and mobile Safari were not tested.

# Unreleased — Restore buddy sounds — 2026-11-19

- Restore the earlier ThenChat buddy sound set (sign-in, sign-out, message) at Tom's request, replacing the composed cues from the original-artwork branch. Sounds play through the existing ThenChat sound toggle and volume.
- Keep the restored WAVs in `contents/buddy-sounds/`; the composed cues remain in `contents/original-art/` but are inactive.
- Provenance of the restored set is not documented; confirm usage rights before any public launch. No other ThenChat, modem audio, deployment, DNS or Access changes.

# Unreleased — 2002–2004 connection choice — 2026-11-19

- Add a period Connection selector in Connect To for 2002–2004: Broadband (default) or Dial-up.
- Dial-up uses the 53,333 bps sequence and the existing supplied modem recording when enabled. Broadband remains quiet and brief.
- Save the choice locally for visits, Replay, Disconnect/reconnect and clock travel; lock the selector while connecting.
- Preserve other eras, instant Skip, the separate sound toggle and skip-intro setting, radio's paused startup and existing audio bytes.
- Add connection-model regression checks and document the controls. No deployment, DNS or Access-policy changes.

# Unreleased — Original artwork and Line Rider — 2026-11-19

- Rename the simulated messenger to ThenChat; retain buddy identities, archived quotations, chat logic, screen-name storage and preferences.
- Add original waving-person, browser-window, cassette, diamond Start mark and folder artwork. Replace Bliss with original Evening Lake.
- Replace preserved WSZ skins with six original ThenAmp SVG finishes; migrate old skin IDs and retain the paused launch, size and controls.
- Retire the active destination brand-image cache in favor of existing original category illustrations.
- Compose three original buddy sound cues. Preserve the user-supplied modem MP3.
- Route new and previously received simulated Line Rider links to its current browser edition, clearly labeled; keep historical links and archived quotes separate. Add Game Room entry and More info verification limits.
- Document artwork provenance, user-confirmed royalty-free modem status and unresolved public-use permissions. No outreach or deployment.

# Unreleased — Favorites and Quick Tour — 2026-11-19

- Refresh Favorites when opened so the first Connect era selection applies immediately to Start page, Directory and historical-browser menus.
- Add a bright labeled spotlight, dim surrounding UI and pulse the frame during targeted Quick Tour steps. Keep controls clickable and track window movement.
- Highlight the visible ThenAmp skin Play control and focus the fullscreen control from its tour action.
- Suspend the spotlight for open system dialogs, clear it when the tour ends, and disable pulsing for reduced-motion preferences.
- Work stays on a new fix branch. Main and the deployed private preview remain unchanged. No AIM/chat or payment changes.

# GitHub repository migration — 2026-11-19

- Imported the active v0.35 source only; historical releases/ZIPs remain outside the repository.
- Kept index.html at root and contents/ beside it; moved local launcher/server to dev/ and updated their links.
- Synced two stale source mirrors to the already-running inline desktop/music implementations. No UI, AIM/chat or payment behavior changed.
- Added working conventions and a dependency-free verification command. Created the private tomwalker-webthen/WebThen remote; initial source is imported on main.

# WebThen v0.35 — Hapland and Longmont Potion Castle

- Added Hapland and Hapland 2 using creator-hosted Ruffle players, available from 2005 onward.
- Checked basic interactions in both; retained completion/audio/browser limitations under More info.
- Added Mark Prindle's 2003 Longmont Potion Castle interview to the Directory from 2003 onward.
- Interview read separately; embedded loads did not complete and remain unverified, with an original-site fallback.
- Kept current preserved pages distinct from historical captures. No game files or article text bundled.
- Startup layout, AIM/chat and the payment hold remain unchanged.

# WebThen v0.34.1 — Start page fit

- Compact Start page text, cards and spacing so all actions are visible without scrolling.
- Keep the existing Start page size and position.
- Place Aqua ThenAmp in the lower-left startup slot to avoid the quick tour.
- Verified 24 browser cases across seven themes, five eras and both desktop sizes.
- No AIM/chat or payment changes.

# WebThen v0.34 — period browser and connection

- Visiting month/year in Connect and Date/Time; removed the modern OS choice.
- Small period Start icons and Close-only system dialogs.
- Shared themed browser toolbars, history menus, Go, Favorites, animated activity logo and status/progress bars.
- Archive details and separate-open/window/fullscreen actions moved to a status icon.
- One Connect To flow for startup and travel, with dial-up phases/speeds, broadband shortcut, immediate Skip and connection timer.
- Optional 56k reveal, disabled by default and ignored after 2001.
- Quick tour fits all six steps without scrolling at both tested desktop sizes.
- AIM/chat unchanged; payments on hold.

# WebThen v0.33 — OS defaults

- Date-based defaults: Win95 → Win98 → XP; Win2000, ME and Aqua remain manual-only.
- Manual Appearance choices persist within an era and reset on every change to another era.
- Later OSes are disabled and marked Not yet released in Appearance and Connect.
- Added Win95 classic variant and manual ME variant; updated quick-tour guidance.
- Payments remain on hold. No AIM/chat source changes.

# WebThen v0.32

- Made era a session setting chosen on Connect or through clock Date/Time Properties; removed Start-page and Directory era controls.
- Added period clock tooltips, clock tour guidance, first-use balloon and Start-menu travel entry.
- Added Disconnecting → five-second skippable reconnect → new-era reload, closing browsers/media and preserving OS override and saved preferences. The new era initializes suggestions, buddy availability, hits station and video queue.
- Replaced tray actions with icons, added dial-up Status/Disconnect, Start-menu fullscreen and Log Off/Log Out, plus right-click Sign Off/Exit. Mac menu actions are icon-only with tooltips.
- Reserved the left shortcut rail in every theme. Twelve requested theme/viewport launch checks found no window covering a desktop icon.
- Updated current README, changelog, verification and evidence; retained earlier README as history. AIM/chat sources and quotes are unchanged.

# WebThen v0.31

- Removed routine verification/explanation labels and the virtual-desktop badge; preserved source/audit detail under More info and plain Not available states.
- Added era-following OS defaults with persistent manual override and Use era default. Mac controls now live in the top menu bar, with no bottom taskbar.
- Fixed Directory alignment, Game Room search/category matching, favicon, starter-name stem collisions and startup crowding at both requested sizes. ThenAmp remains open and paused.
- Added shared themed minimize/maximize/close controls and restore buttons across app shells, including skin picker and Connection.
- Used if_ archive embeds with plain external capture links. Added initial connection checking and a period failure screen. Later cross-origin failure detection has the documented qa-03 limitation.
- Suppressed pre-2005 YouTube window titles and prevented file: launches from creating a YouTube API/player. Updated documentation and per-item verification; chat engine/replies are unchanged.

# WebThen v0.30

- Expanded ordinary AIM intents: activity, actual away text, brb/afk, ASL, jokes, reactions and artist names. Fixed music-versus-games matching and robot/AI/real-person disclosure.
- Added goodbye/idle context, corrected greeting punctuation, reduced repeated prefixes and shortened unsupported-topic replies.
- Prepared replies now drive 3–10-second typing delays, with occasional longer pauses. Batched sends restart the timer; offline, pause/resume and era-change handling remain covered.
- Removed app explanations from ordinary dialogue, added clearly labeled Windows download actions, and restricted four later-style contacts plus early recommendations by era bucket.
- Moved routine AIM explanations under More info. Preserved original archive screen names, seven exact source excerpts, source links and exhaustion notices; personal and reviewed ambient messages are unchanged.
- Updated documentation, profile inventory, QA issue status and verification. Desktop/video redesign findings remain deferred.

# WebThen v0.29

- Reviewed the attached v0.28 QA report. Per user direction, recorded remaining findings/design proposals in qa-roadmap-backlog.json instead of broadening this release.

- Added a message composer to buddy chats: Enter sends, Shift+Enter adds a line, with 500-character messages and retained page-session history.
- Added local scripted replies, typing delays, topic follow-ups, and 22 distinct fictional regular-buddy profiles using five era-aware topic pools. Replies can link to Game Room editions, catalog destinations and Video Lounge.
- Offline messages wait for sign-on; reply timers pause off-tab/AIM-off and resume when active. Multiple quick messages are batched, with up to five pending messages per buddy. Era changes re-evaluate queued replies.
- Archive contacts replay only their own preserved excerpts. When none remain, a clearly labeled WebThen notice appears instead of invented dialogue. Original archive provenance stays intact.
- Updated documentation, conversation-profile inventory and verification notes. No AI service, login or external message sending is used.

# WebThen v0.28

- Added Video Lounge: 24 era-curated selections, with 13 browser-confirmed in-app videos and 11 clearly labeled external-only links. Pre-2005 selections are retrospective uploads; original years and upload dates are recorded separately.
- Added same-era Previous/Next/automatic queues, era-switch teardown, out-of-list playback guard, desktop/Start/taskbar launch, movable/resizable layered player, loading/error states and source details. Closing stops playback; minimizing pauses it. No startup playback.
- Connect now enters immediately when Play modem recording is unchecked; checked sound keeps the recording and 18.5-second sequence.
- AIM heading reads AIM / Ambient Instant Messenger; app shortcut/menu labels use AIM.
- White buddy-list area expands with its window. Buddies, Family and Offline collapse independently.
- Added ekillians to Family with three personal messages; moved T0mewalker, HammzT10 and Thebebegirl22 to Family. Existing messages are preserved. All regular contacts, including Family, can send era chatter; archived quotes stay with original screen names.
- Updated README, verification notes, source/message inventories and the experience backlog. Interactive AIM replies remain proposed, not implemented.

# WebThen v0.27

- Added all 40 reviewed fictional messages to regular Buddies: eight for each era. They mix with ordinary chatter at the existing message interval, independently of rare Easter egg eligibility.
- Reviewed lines avoid repeats within the selected era until that era’s eight have all been used. Era changes immediately select the matching pool.
- Preserved six archive contacts and their seven exact excerpts, with no unrelated chatter assigned to archive screen names. Personal contact-specific messages and rare-event limits are unchanged.
- Added collapsed Message inspiration links for the seven source-inspired adaptations, explicitly distinguishing them from original quotes.
- Updated README, message inventory and verification notes. Interactive conversation replies remain a proposed next step, not implemented.

# WebThen v0.26

- Changed ThenAmp’s default skin size to 1.5× (412.5 × 174 artwork).
- Size button now displays the current actual size and cycles 1× → 1.5× → 2× → 1×; accessible label and tooltip also identify the next size.
- Saves the new three-size preference. An old saved 2× preference resets to the new 1.5× default; an old saved 1× choice is retained.
- Narrow displays fit to the largest supported size that fits and visibly label it as fitted. Preserved audio state, skin choice, collapsible options and the thin frame.

# WebThen v0.25

- Added a 2× toggle beside ThenAmp’s station selector. It doubles the entire skin face, text, hit targets and volume slider to 550 × 232, with matching window dimensions.
- Saves the size choice independently of skin/OS selection. Size changes retain playback and collapsed-option state. Station options use larger readable text at 2×.
- Temporarily uses 1× on screens narrower than 564px, showing 2× (fit), and restores double size when space is available.
- Retained compact borders, dragging, fold/restore, all six skins, original-player fallback, and paused startup.

# WebThen v0.24

- Reduced the skinned ThenAmp frame to a one-pixel edge at the original 275 × 116 skin artwork size. Removed duplicate OS title-bar chrome while the skin is expanded.
- Added collapsed-by-default Options & station info below the station selector, with saved open/closed preference. Follow era, connection status, station source, Reconnect, Off and provider details remain available inside.
- Added dragging and keyboard movement from the skin title strip. Existing skin minimize, fold, close, playback and volume controls remain available. Fixed-size artwork keeps its proportions; the original WebThen appearance retains window resizing.

# WebThen v0.23

- Added six archive-based buddies: AzureDiamond, Cthon98, erno, Khassaki, darkshines0, and SmarterChild.
- Each archive buddy sends only short excerpts attributed to that screen name. No generic or unrelated pop-culture chatter is assigned to them.
- Added collapsed Archive buddy info with provenance, source links, simulation disclosure and date limitations. IRC origins are identified accurately.
- Preserved rare-message gating, two Easter eggs per page session, no repeats, era availability, personal contacts/history, ThenAmp and paused music startup.

# WebThen v0.22

- Named the player ThenAmp across desktop shortcuts, Dock, Start menu, title bar, tutorial, taskbar, and skin picker. Historical skin names/credits are retained.
- Added the seven requested personal AIM messages, restricted to the matching contact; preserved rare delivery, no repeats, conversation history, and paused music startup.

- Added six familiar, visually reviewed Winamp skins selected from the museum’s download-ranked list.
- Added a preview picker, saved skin choice, and functional skinned radio controls using the original skin bitmaps.
- Preserved station/playback state during skin changes and paused startup.
- Expanded and embedded destination images: 263/351 source icons, all 36 default picks, and 88 clearly labeled category illustrations.
- Retained tutorial, desktop themes, window movement, Games, archived links, and embedded modem sound/fullscreen controls.

ThenAmp starts at 2× by default when no size preference has been saved. A saved 1× preference is respected.

- Replaced WebThenGuest with a random starter screen name from a preseeded 100-name pool. Added Save name, Pick another and Random each session in AIM settings; saved names persist locally and immediately update the buddy-list header and own-name button.
- Moved Replay connection and Return to portal into the bottom toolbar, and hid the floating desktop fullscreen shortcut. The bottom fullscreen button, Mac menu action and Escape remain available.

