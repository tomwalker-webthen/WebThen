# Favorites and Quick Tour branch verification — 2026-11-19

Branch: `fix/first-connect-favorites`, based on hosting/cloudflare-pages at 1999acd. Main remains afb74ab95e03d4e817bb2fb1734cb9476ce6702f. This is local verification, not a deployment of the fix.

- Five separate fresh localhost origins: changed the first Connect selection to each era, entered via Skip, then opened Favorites in Start page and Directory. All matched the table below. For 1996, Connect was also started before Skip.
- Clock travel from 1996 to 2006 reloaded correctly; Favorites became MySpace / YouTube / Xanga. A historical browser opened from MySpace also showed that list. External MySpace replay itself was outside this fix's verification.
- Quick Tour visually checked in Win95, XP and Aqua at a measured 1280×720 viewport. Windows taskbar and Mac menu-bar clock targets were visible with label, bright frame and dim surroundings. No larger-viewport result is claimed.
- Appearance, window-title, fullscreen and visible skinned ThenAmp Play targets checked. The fullscreen tour action focused its actual control. Moving ThenAmp right by 10 px moved its spotlight by 10 px.
- Clock remained clickable through the overlay. Spotlight hid for Date/Time Properties and returned after Cancel. Completion, Skip and Escape cleared it. No console warnings/errors observed in the tour checks.
- Reduced-motion CSS disables the pulse; an OS-level reduced-motion session was not exercised. Other OS theme variants were not separately visually retested.
- `node dev/verify.cjs`: passed (29 scripts parse, 31 mirrors match; local assets, game data, documentation parity and credential-pattern checks).

| First Connect era | Start page and Directory Favorites |
| --- | --- |
| 1995–1998 | Yahoo! Directory / GeoCities / AltaVista |
| 1999–2001 | Yahoo! Directory / Neopets / eBaum’s World |
| 2002–2004 | Xanga / eBaum’s World / Salad Fingers |
| 2005–2007 | MySpace / YouTube / Xanga |
| 2008–2009 | YouTube / Twitter / Newgrounds |

# GitHub repository preparation verification — 2026-11-19

node dev/verify.cjs passed: 29 inline scripts parse, 31 source mirrors match, game data matches, local index links resolve, linked documentation copies match, local development tools are separated, and the inspected runtime files contain none of the checked credential patterns. The relocated local server returned HTTP 200 for index, game data and documentation. These checks do not establish external playback or asset rights clearance.

The shipped v0.35 release and ZIP are unchanged. Private remote: https://github.com/tomwalker-webthen/WebThen. No public deployment or payment setup. Remote hash verification is recorded in the parent workspace migration record after the push. Prior release verification follows as history.

# v0.35 verification — 2026-11-19

| Addition | Observed inside WebThen | Remaining limits |
| --- | --- | --- |
| Hapland | Creator page and Ruffle game loaded. Built-in help opened/closed. Clicking the cannon visibly changed its aiming position. | Full completion, audio, mobile and other browsers unverified. Current creator page includes a modern Steam promotion and is not a verified 2005 snapshot. |
| Hapland 2 | Creator page and Ruffle game loaded. Clicking the red direction switch changed it to a green arrow. | Same completion/audio/browser and historical-snapshot limits. |
| Longmont Potion Castle interview | Correct original URL opens in the simulated browser. Embedded requests did not complete and reached the period failure pane with Open original interview. | In-app reading unverified. The original page was opened separately and the 2003 heading and interview text were read. Failure cause was not established; no claim of an embedding prohibition. No historic snapshot verified. |

The games used actual creator-hosted pages, not test substitutes. Screens loaded in the regular Game Room window. Specific mouse interactions were checked after maximizing because the automation surface could not safely target fractional iframe coordinates in the original size. This is an automation limitation, not evidence that user input fails at normal size. Neither puzzle was fully solved.

All five eras checked: games absent before 2005 and present in 2005–2007/2008–2009. Interview absent before 2003 and present from the October 2003 representative date onward. Games have an additional open guard before 2005. Filtering checked: download 0, browser 2, music category 0, games category 2. Search and More info disclosures checked.

Evidence: destination-checks-v035.json, hapland-v035.png, hapland-2-v035.png, hapland-game-room-v035.png, longmont-info-v035.png. Game metadata stores tested actions and limits. The source catalog import is unchanged; the interview is a supplemental entry, without an invented timestamp or checked historical-capture status.

Final fresh WebThen load: zero browser-console errors. Twenty-nine inline scripts parse; changed runtime sources and game data match their inline copies. Six AIM/chat sources, startup-layout code and Start page CSS are byte-identical to v0.34.1. Broad layout, direct-file, audio, all-browser and full-game checks were not repeated.

The new direct-source navigation branch applies only to the marked interview. Existing archive URLs retain their prior Wayback path, probe, failure and separate-open behavior. Inherited cross-origin archive/internal-history limits remain. No game files or article text were republished. No rights clearance beyond linking/technical verification is claimed. Sources: [Hapland](https://foon.uk/farcade/hapland/), [Hapland 2](https://foon.uk/farcade/hapland2/), [2003 interview](https://markprindle.com/longmont-i.htm).

# v0.34.1 verification — 2026-11-19

The Start page opens without horizontal or vertical scrolling, with Surprise me, Game Room and Browse all destinations fully visible. The heading, all destination names/descriptions and More info remain present. This is achieved by compact layout, not clipped overflow or removed actions. Its startup window footprint is unchanged. Aqua ThenAmp now uses the shared lower-left startup slot; this corrects a possible overlap with the quick tour.

Actual browser checks: seven themes × two sizes (14 cases), plus all five era defaults × two sizes (10 cases). Sizes: 1280×720 and 1440×900. All 24 cases have zero Start page overflow, all three actions visible, zero intersections among Start page/AIM/ThenAmp/tour and zero desktop-icon intersections. The quick tour also remains without overflow. See start-page-checks-v0341.json and start-page-v0341.png.

Clicked Game Room and confirmed it opens that section; clicked Browse all destinations and confirmed the full catalog opens. Final browser console: zero errors. Inline scripts parse, CSS/source parity holds, and the six AIM/chat files remain byte-identical to v0.34. No payments work.

Compact styling applies to desktop widths of 1100px and above. Existing small-screen layouts remain unchanged. Expanded More info or a manually reduced window can still scroll as needed. Checks use default player scale, not every user-resized window or custom skin dimension. Prior v0.34 verification below is historical and was not repeated beyond this scoped change.

# v0.34 verification — 2026-11-18

All listed v0.34 features are implemented; none deferred. Previous release verification follows below as history.

| Requirement | Result and evidence |
| --- | --- |
| A1 visiting date | Connect and Date/Time option labels include the era plus visiting month/year. Travel updates the connection selection and OS availability to the destination date. Screenshots connect-*-v034.png and date-*-v034.png. |
| A2 OS lists | Seven period options; modern removed from the shared theme list and both visible OS selectors. |
| A3 small Start icons | Original 24×24 glyph holders replace oversized placeholder windows. Win95/Win98/XP screenshots start-*-v034.png. |
| A4 Close-only dialogs | Date/Time, Connection Status and Connect To have Close only. Win95/Win98/XP screenshots; browser-checks-v034.json. |
| B period browser | Start page, Directory and archive window checked in every theme: 21 surfaces. Seven icon controls, separate Back/Forward dropdowns, Favorites, address, Go, loading logo, status/progress and Internet zone. chrome-checks-v034.json and browser-*-v034.png. |
| B behavior | Browser exercised Stop on a deliberately pending archive request, per-window Back/Forward history, Home, Favorites, new arbitrary HTTP(S) address via Go, archive details and plain external fallback URL. browser-checks-v034.json. |
| C connection | Actual shared flow exercised with a fake clock in 20 first/travel/recording combinations plus 20 immediate Skip paths. Exact 28,800/53,333 bps sequences; broadband never dials. Real browser checked dial-up, recording source/playback rejection indicator, Skip, speeds/timer and broadband travel. |
| D optional 56k | Default off; browser observed normal Done/no clip with off, a partial clip and matching progress while enabled in early era, and no clip/progress in broadband despite toggle on. 56k-reveal-v034.png and browser-checks-v034.json. The v0.33 base archive loader is byte-identical; the disabled branch adds no timers or waits before displaying a loaded page. |
| Regression layout | All 7 themes × 1280×720 and 1440×900: 14 cases, zero window/icon intersections and zero tray/Mac-menu text buttons. layout-checks-v034.json. |
| Quick tour | All 6 steps × 7 themes × 2 sizes: 84 cases, no overflow and navigation above the taskbar. tour-checks-v034.json and tour-v034.png. |
| Load errors | Final production page browser console: zero errors. QA HTTP server: zero 404s across the recorded tests. http-checks-v034.json. |
| Source integrity | 28 inline scripts parse; inline/source parity checks pass. Six AIM/chat sources and base browser-sessions.js identical to v0.33. No new third-party scripts. |

## Test method and limits

UI tests used the supported browser automation surface. A separate, unshipped QA HTTP fixture substituted only archive probe/frame destinations with predictable local pages to test Stop, history and reveal without depending on Wayback latency. Release files never contain that substitution. Startup/Connect and final console checks also used the unchanged production server. Deterministic flow tests ran the actual connection controller, including recording/skip callbacks, with a fake clock.

The optional reveal is 3.5 seconds after a successful iframe load. With it off there is no added artificial wait. Real archive/network latency cannot be made identical between runs; timing parity is supported by retaining the base loader byte-for-byte and observing the disabled reveal path.

Inherited archive boundary: WebThen cannot inspect every internal navigation or native failure page inside a cross-origin iframe. The previous qa-03 limitation remains. Period failure handling, historical preview and Open archive fallback remain available. History menus track navigation initiated through WebThen; they cannot enumerate cross-origin iframe-internal history. Live radio, YouTube and all catalog playback were not re-audited in this scoped release. Direct-file YouTube handling remains inherited; no new file-browser permissions were assumed.

New visual assets are original CSS/SVG/glyph artwork. The existing user-supplied modem MP3 and prior theme/skin assets were preserved; no additional third-party sounds or artwork were sourced. The seven-theme styling is inspired by period interfaces, not a full operating-system emulator.

# v0.33 verification — 2026-11-18

Automated checks: default cutoff dates (June 30/July 1, 1999 and Dec 31, 2002/Jan 1, 2003); all OS release-day boundaries; XP disabled throughout 1999; manual Win98 in 2004; bidirectional travel resets; same-era re-render retains override; actual controller/storage fixtures; inline/source parity; 24 scripts parse; six AIM/chat source files identical to v0.32.

Browser checks and screenshots are recorded in theme-checks-v033.json. The UI retains five era buckets and representative dates; exact 1999/2004/2005 examples are covered by date-policy tests, while UI travel uses the corresponding bucket dates. No historical-content playback or other broad QA audit was repeated.

Known inherited limitation: qa-03 remains partial for cross-origin archive failures after navigation. No payment code or third-party scripts added.

Release dates: [Microsoft history](https://news.microsoft.com/facts-about-microsoft/), [Windows ME announcement](https://news.microsoft.com/source/2000/09/14/microsoft-announces-immediate-availability-of-windows-millennium-edition-windows-me/), [Mac OS X announcement](https://www.apple.com/newsroom/2001/01/09Apples-Mac-OS-X-to-Ship-on-March-24/). July 1, 1999 is the chosen interpretation of mid-1999 for defaults, not the Win98 release date.

# WebThen v0.32 verification

Checked November 18, 2026. Scope: approved era/session travel and tray camouflage. No AIM/chat logic work.

## era-controls passed

Live DOM contained only connection-era and session-era selects with era options. welcome-era and eras were absent. Start-menu travel opened the clock dialog.

## period-clock passed

Browser observed Tuesday, October 15, 1996; Wednesday, October 15, 2003; Wednesday, October 15, 2008. Unit tests check all five dates against bucket bounds.

## travel-flow passed

With archive browser, Video Lounge and radio open, Apply removed browser windows/video frames and cleared/paused audio sources. Automatic reconnect entered the requested era; Skip also worked. Existing ambient sound controls stopped the buddy-list audio activity and restored its enabled preference after reload.

## era-initialization passed

Early travel produced Win98, 1990s Hits and Yahoo/GeoCities/AltaVista. Modern travel produced Aqua, 2000s Hits, YouTube/Twitter/Newgrounds and the 2008–2009 Video Lounge queue. Early buddy DOM had 18 eligible regular contacts and omitted later/archived contacts. A manual XP override survived travel to early.

## icon-trays passed

All twelve layout cases had zero visible text buttons in the system tray and Mac menu bar. Status/Disconnect, Start travel, Mac Log Out and right-click Sign Off/Exit were exercised. Exited ThenAmp reopened paused with no audio src.

## clock-discovery passed

First visit displayed the exact clock balloon. Tour Next displayed Travel with the clock. Start-menu travel opened Date/Time Properties.

## startup-icon-clearance passed

Twelve browser cases: win98, win2000, xp, classic, mac and modern at 1280x720 and 1440x900. Every visible startup surface had an empty icon-overlap list. Recorded rectangles are in layout-checks-v032.json.

## Automated and retained checks

- The central session model rejects invalid eras and assigns a period date inside every era. The 2003 example resolves to Wednesday, October 15, 2003.
- Timer tests check the 650ms disconnect balloon phase and 5000ms total reconnect, manual skip, duplicate-finish protection, resource teardown, era/hits-station persistence and the one-use intro bypass. A separate check confirms the bypass consumes the travel state exactly once.
- Teardown invokes the existing video/game/radio and ambient controls, closes browser windows and clears HTML media. Ambient enabled preference is restored without restarting it during the reconnect wait. Off preferences stay off.
- ambient-aim-engine.js, ambient-aim.js, aim-replies.js, aim-chats.js, aim-identity.js and aim-identity-ui.js match v0.31 byte for byte. No quotes, contacts, personalities or message behavior changed.
- All 23 inline scripts parse. Supporting session, onboarding, connection and video sources match embedded sources. The 12-case layout record is checked for no shortcut intersections and no tray/menu text buttons.
- Retained catalog/cache hashes, specific historical submissions, original message/source inventories, video catalog, radio configuration, window histories, local links and connection behavior are checked through the existing regression suite. v0.31’s archive error and direct-file video branch checks are retained.
- ZIP validation expands the archive, compares every file hash/count and confirms index.html is the only top-level file beside contents/.

## Limits

- Native browser fullscreen was not newly exercised; original request handler retained and reachable via tray and Start item.
- Video teardown was checked with the embed/player path opened; this was not a fresh per-video playback audit.
- Travel intentionally reloads the page and resets in-memory page/session state.
- Existing cross-origin archive detection and file-video testing limits remain as documented for v0.31.

The layout matrix used actual browser interactions: save each manual theme, reload into the connection/startup flow at each requested viewport, then measure the visible startup windows and all visible desktop shortcuts. The tour was included. This is not a test of arbitrary user-resized windows, restored custom positions or mobile layouts. No console errors were recorded in the final browser test. Screenshots and evidence are in session-checks-v032.json.

---

# WebThen v0.31 verification

Checked November 18, 2026. Scope: authorized immersion and visible fixes only. The AIM engine, reply rules, buddy data and chat code match v0.30 byte for byte; only starter-name selection and shared window chrome changed as required by this scope.

## qa-01 passed

Embedded eBaum’s World src used /web/20070703022547if_/. The external archive link retained /web/20070703022547/. A real archived page rendered successfully.

## qa-02 passed

Live measurements returned html width = innerWidth at 1280 and 1440. Final Mac measurement also returned 1280 = 1280.

## qa-03 implemented with limitation

Refused-network fixture displayed The page cannot be displayed with Try archive, Directory and Open archive. The iframe remained hidden and had no failed src assigned. Tests cover timeout, late onload, rejection and success. The absolute never-browser-error guarantee remains unavailable for every later cross-origin navigation; see the boundary below.

## qa-04 passed

Search geocities showed zero Game Room cards; elf showed two. Portals and Viral animations categories showed zero, Games & interactive showed all three. Search, category and the existing game-type filter combine.

## qa-05 passed

Directory hero and search panel measured the same outer edges, 142.5 to 1282.5 at 1440. Era tabs were inside the same border at 143.5 to 1281.5. No header overhang.

## qa-06 passed

Both Aqua and Classic Mac moved the actual toolbar into aqua-menu-bar at top 0/0.5px. No bottom taskbar remained. Its buttons and clock remain accessible in the top menu bar; overflow can scroll. The Aqua Dock moved to 8px above the bottom.

## qa-07 passed with shared implementation

Shared theme-styled minimize/maximize/close controls installed for Directory, browser, welcome, AIM shell, ThenAmp, game, Video Lounge, Appearance, Connection, skin picker and conversation shells. Browser tested Directory maximize/restore/minimize, welcome maximize/restore/minimize/task restore, ThenAmp minimize/task restore, game maximize/restore/minimize/task restore/close, and Video Lounge close. Other shells share the implementation; no chat feature or reply logic was changed.

## qa-08 passed

Inline SVG data-URI favicon is present. A fresh browser launch recorded zero console warnings/errors, including no favicon 404. External archive resources are outside this initial-load check.

## qa-09 passed

At 1280x720 and 1440x900, first-launch welcome, buddy list, open-paused ThenAmp and tour occupied separate rectangles. Aqua additionally places ThenAmp to the right of the Dock.

## qa-10 passed

All 100 replacement starters are valid and unique and avoid the buddy/archived-contact stem list. Saved custom screen names are preserved. No contact names or conversation pools changed.

## qa-03 security boundary

Archive embeds are cross-origin. A successful no-cors preflight confirms a connection but cannot inspect the HTML/status of an opaque response, and WebThen cannot read later internal navigation URLs or browser-generated error documents reliably. Initial network rejection and timeout are masked with the period screen, but a later iframe redirect/navigation can fail after the connection check. Meeting an unconditional never guarantee would require a cooperative archive signal or a separately designed replay/proxy system. This release does not weaken browser security, proxy third-party scripts into WebThen’s origin, or disable working embedding to pretend the guarantee is complete.

The refused-connection test used a development-only server fixture redirecting the requested archive URL to an unused localhost port. It was not bundled or enabled in the release. Browser evidence showed the period heading/actions and a hidden iframe with no src. The ordinary server separately loaded the real eBaum’s World archive using if_. Automatic unit cases cover network rejection, success, timeout and a late load after timeout. This is a partial result against the absolute wording of qa-03, not a deferred implementation or a claim that every cross-origin failure can be detected.

## Additional acceptance checks

- Five era selections produced Win98, Win2000, XP, XP and Aqua respectively. A manual Classic Mac override survived an era change and reload. Use era default restored automatic behavior. Existing stored manual theme choices remain valid overrides.
- ThenAmp remained open and PAUSED. It was repositioned to avoid initial overlap; it was not hidden as a crowding fix. Audio/radio code is unchanged.
- The version/virtual desktop badge was removed. Date unknown, routine verification hints and untested action labels were removed from the main Directory. Full descriptions, source notes and audit data remain in More info. Missing destinations display Not available. Routine AIM wording was already collapsed in v0.30 and was not rewritten here.
- The pre-2005 Video Lounge title no longer says YouTube. The visible official embed remains unchanged when used over HTTP. For file: launches, the selection handler returns before requesting the API or constructing any player and shows a period notice plus the existing Open on YouTube link. Automated branch verification passed. Direct-file browser testing was blocked by the test browser’s file URL policy; no policy workaround was attempted.
- Exact catalog/cache hash, local links, script syntax, personal/archive message inventories, video catalog, radio configuration and original connection fast-path checks pass. The dedicated v0.31 checks cover 100 non-colliding names, unchanged chat sources, inline/source parity, archive failure behavior and the file-player guard.
- No new rights, full-game, mobile, native-fullscreen or general external playback audit was performed. Screenshots and measured rectangles are listed in browser-checks-v031.json. ZIP packaging expands and compares all release file hashes and root layout.

---

# WebThen v0.30 verification

Checked November 18, 2026. Scope: ten logged AIM refinement findings; broader desktop/video roadmap remains deferred.

## Browser verification

- Enter sent can we play some music and produced a music reply rather than games. What are you doing returned pixelprincess’s activity. Are you a robot returned an honest local-script/no-real-account explanation.
- Goodbye followed by lol produced oh hey, still here? rather than a generic topic follow-up. Tell me a joke produced a joke. The typing indicator appeared while replies waited.
- An away-message question returned the same brb, dinner text shown in the buddy’s status. Routine chat explanation was collapsed under More info and expanded on request.
- erno replayed the existing excerpt under erno’s name with a visible archive label. Archive buddy info kept its source URL and date caveat. No new historical quote was generated.
- In 1995–1998, bandgeek2001 and sk8rKid_99 were absent from the available/offline lists. Elf Bowling prompted a Minesweeper conversation with a GeoCities link, not Newgrounds. In 1999–2001, its Windows collection link was labeled download required and pointed to the existing source collection. The link was inspected, not downloaded or executed.
- No browser console errors were observed. Screenshot: aim-conversation-preview-v030.jpg.

## Automated verification

- All supplied everyday-chat examples now match explicit intents. Tests check activity, actual away text, honest identity, safe ASL, goodbye/idle, greeting punctuation, intermittent prefixes, artist matching and music priority.
- Reply-length delay tests cover the ordinary 3–10-second bounds and occasional longer pause. Engine integration checks actual scheduling and away text. Existing transcript, five-pending-message limit/batching, incoming-only unread, offline queue, sign-off cancellation, AIM-off/pause resume and pending-era-change tests pass with the new delays.
- All six archive contacts replay only their original excerpts before a WebThen exhaustion notice. All seven exact excerpts/source metadata, ten personal messages and 40 reviewed ambient messages match v0.29. Fictional personality rules do not apply to archive contacts.
- Tests verify five-era actions and restricted contact availability, local-only/plain-text reply rendering, inline/supporting-source parity, retained catalog/cache hashes, 24 video records, radio configuration, startup pause and connection behavior. No new external playback claims are made.
- Packaging expands the ZIP and verifies each file hash/count. index.html is the only root file beside contents/.

## Limits

Scripted conversation uses intent rules and small reply pools. It can still misunderstand unlisted wording. Era matching is by five buckets, not individual years/months; historical transcript dates retain their prior uncertainty. Histories remain in memory until page reload, while saved screen names remain local preferences. A longer pause can take up to about 17 seconds. Native fullscreen, mobile layout and live archive/game/radio/video playback were not newly tested in this AIM release. The unchanged broader QA findings remain deferred in qa-roadmap-backlog.json.

---

# WebThen v0.29 verification

Checked November 18, 2026. Scope: scripted AIM conversations; remaining attached QA findings logged for future releases.

## Conversation checks

- Browser-tested the actual message composer: Enter sent text immediately under the generated screen name, a typing indicator appeared, and a delayed fictional reply arrived. Website recommendations included a clickable catalog action; a Video Lounge recommendation opened the matching era's app without starting playback.
- Browser-tested a short topic follow-up ("what next?") retaining the website topic. Shift+Enter created a multiline outgoing message and Send submitted it. Closing and reopening a chat retained its draft and transcript during the same page session.
- Sent to offline HammzT10: the window displayed one queued message. Preview sign-ins brought that buddy online and produced one personality-specific reply about Gandalf and the Woodland Realm. The incoming unread count cleared when the conversation was opened.
- Cthon98 replayed its original labeled excerpt. A second request produced a WebThen system notice after its source pool was exhausted. Archive buddy info retained the original source link and explanation; no invented reply was attributed to that archive screen name.
- Browser-resized the conversation using the keyboard grip; composer and controls remained available. Final screenshot: aim-conversation-preview-v029.jpg. No browser console errors were recorded in the test session.

## Automated checks

- Tests cover 22 unique fictional greetings, all five era pools, topic continuity, safe game actions, immediate outgoing messages and delayed incoming replies, incoming-only unread previews, 500-character validation, five-message queue limits/batching, offline waiting, sign-off cancellation, pause/AIM-off resume, and changing era while a reply is pending.
- All six archive contacts replay only their own existing excerpts, then produce a WebThen notice. Archive-only contacts are unavailable before their configured simulation era. User-requested excerpts do not use ambient Easter-egg slots.
- Supporting conversation sources match the scripts/styles embedded in index.html. Plain-text rendering and local reply rules are checked. Identity, ThenAmp size and video engines remain unchanged from v0.28.
- Retained catalog, cached image hashes, personal messages, reviewed era messages, archive inventories, video catalog, radio configuration, connection fast path, local links and script syntax checks pass.
- Packaging expands the ZIP and compares every file's hash and count against the release folder. index.html is the sole top-level file beside contents/.

## Limits and deferred work

Replies are local templates with simple topic memory, not general AI or real messaging. Conversation history, drafts and pending messages last only while the page remains open. Saved screen-name preferences persist separately. Some unsupported prompts receive a fallback. Archived excerpts may be unrelated to the user's prompt and are explicitly labeled as replays.

No fresh external archive/game/radio/video playback audit, mobile layout audit or native fullscreen test was performed for this chat-only release. Prior checks below describe their own dates and scope. Reported v0.28 QA issues and broader redesign proposals are recorded in qa-roadmap-backlog.json, marked deferred and awaiting reproduction; they are not claimed fixed. Independent OS themes remain available.

---

# WebThen v0.28 verification

Checked November 18, 2026.

## Video Lounge

- Checked public YouTube oEmbed title/channel metadata and watch-page publish/upload metadata for 24 selected uploads. Original-period references are recorded separately. Date notes identify retrospective uploads/remasters; an unofficial Toy Story archival upload is explicitly identified. Raw descriptions and lyrics are not bundled.
- Browser attempted playback of all 24: 13 reached Playing with visible video; 11 returned embedding-denied errors. Denied selections are external-only anchors and excluded from the in-app queue. Per-video outcomes are in youtube-browser-checks.json and youtube-catalog.json. Every era has at least two in-app choices.
- Changing 2002–2004 to 2005–2007 while a Flash video was playing destroyed the iframe (zero remaining frames) and immediately replaced the queue/status. Final queues sort in-app choices ahead of external-only links. Minimize paused a video, taskbar restored it, keyboard resizing worked, and close removed the iframe and task button. No browser console errors were observed.
- Unit checks cover same-era Next/Previous wrap, filtering on original year, excluding external-only items, refusing outside IDs, and switching eras. A mocked official API target verified the guard stops an out-of-list video and aligns metadata when a permitted video changes. Automatic end-of-video progression and recommendation-click guarding were not independently exercised with a real video ending/recommendation click. Native YouTube ads, branding and external navigation remain outside WebThen’s control. Native fullscreen and direct file:// playback were not newly tested.

## Connection and AIM

- With Play modem recording unchecked, a real Connect click entered the desktop/welcome immediately. Unit checks confirm the silent branch calls finish without audio or timers; checked sound still schedules the existing 18.5-second finish and plays the recording.
- The real AIM window displayed AIM / Ambient Instant Messenger. Enlarging its height from 360px to 600px increased the white list from approximately 165px to 405px. With Offline collapsed, list scrollHeight equaled clientHeight (401px), so online contacts fit without scrolling. Buddies/Family/Offline collapsed independently and minimize/restore continued to work.
- Using preview sign-ins, the final Family list showed cousin_on_dialup, mom_says_hi, uncle_jpeg, T0mewalker, HammzT10, Thebebegirl22 and ekillians. With Buddies collapsed and the window enlarged, all seven Family contacts fit without scrolling.
- Automated tests confirm 28 total contacts, requested group assignments, all ten exact personal messages from matching contacts, unchanged seven archive excerpts from original screen names, and all 40 reviewed messages per era including Family contacts. Catalog/radio/image hash, conversation, syntax, local links and inline/supporting-source checks passed.

## Documentation and limits

README, CHANGELOG, VERIFICATION, video audit/catalog/playback inventories and the personal-message inventory are current. The experience backlog distinguishes discussed candidates from additional suggestions and implemented features. Screenshots are included. This release does not add interactive AIM replies or the proposed extra games/apps. Earlier retained verification follows.

# WebThen v0.27 verification

Checked November 18, 2026.

## Reviewed AIM messages

- Automated tests compared all 40 delivered message texts with the reviewed draft inventory: exactly eight per era and 40 unique IDs. Messages delivered from regular buddies even when the rare-session gate was disabled. All eight in an era appeared without repeats, then rotation restarted. Changing eras switched the next reviewed message to the new pool.
- Original era Easter eggs, contact-specific personal messages and six archive-contact definitions were compared with v0.26 and remained unchanged. Existing sender-specific archive delivery and personal-message tests also passed, including rare gates, no-repeat limits, era eligibility, conversation history and unread behavior.
- Seven adaptations retain HTTPS inspiration links and are explicitly identified as fictional adaptations, rather than quotes attributed to source participants.
- A real browser Preview message delivered the reviewed next-door dinner-plans line from xXstarryskiesXx. Open conversation displayed it in that buddy’s history. Expanding Message inspiration showed the fictional-adaptation note and the correct Campus Times source link. The preview and conversation both rendered correctly. No console errors were observed; a screenshot is included. The other 39 lines were engine-tested rather than each independently shown in the browser.
- Retained catalog, local image/audio/skin hashes, screen-name storage, 1.5× default/current-size label, embedded-source and script checks passed. External archived pages and native fullscreen were not newly retested.

## Documentation and scope

README, CHANGELOG and the aim-reviewed-messages.json inventory were updated. README records local scripted conversation replies as a proposal only; no composer or interactive reply engine is included in this release. Earlier verification follows.

# WebThen v0.26 verification

Checked November 18, 2026.

Fresh browser launch showed 1.5× on the button and a 412.5 × 174 skin face. While audio played, three consecutive clicks displayed 2× (550px), 1× (275px), and 1.5× (412.5px). Source URL stayed unchanged and playback time advanced from 0.78 to 2.63 seconds. Reload restored 1.5× with audio paused and no source. No console errors were recorded; screenshots are included.

Automated checks passed for fresh 1.5× default, current-size accessible/visible labels, legacy 2× migration to 1.5×, preserving saved 1×, saving new three-size preferences, and fitted label/restoration across simulated widths. Retained catalog, audio/image/skin hashes, AIM identity, archival contacts and conversation checks passed. Narrow viewport fitting was unit-tested rather than newly checked in a browser.

Earlier release verification follows.

# WebThen v0.25 verification

Checked November 18, 2026.

## Current release

- Fresh browser launch showed ThenAmp at 2× (550 × 232 skin face, 552px outer width), paused. All six skins retained double-size geometry. Toggling 1×/2× during streaming preserved playback and source; playback advanced past 9.5 seconds. Volume input synchronized, disclosure toggled, and a saved 1× preference survived reload. Reload with 2× selected restored 2× with no audio source until Play. Fold showed its restore header. Screen-width fallback is implemented but narrow-screen browser behavior was not independently verified in this pass.
- AIM generated a starter screen name in the header and own-name button. Clicking that button opened and focused name settings. Invalid names showed an error. Saving MixtapeKid99 updated the UI and survived a reload. Pick another changed only the draft; Random each session cleared the saved name and subsequent reload generated a fresh starter. Automated tests cover exactly 100 unique valid starter names, avoiding the previous random starter, persistent custom names, invalid values, listener updates and blocked-storage behavior.
- The floating WebThen fullscreen shortcut was hidden. Replay connection and Return to portal appeared within the bottom toolbar. Both were clicked: Replay opened the connection dialog; Return exited desktop mode, and Desktop view restored it. Onboarding now points to the toolbar fullscreen control. Browser-supplied fullscreen overlays are controlled by the browser, not this application; native fullscreen was not newly tested.
- All retained source/catalog, archive-buddy, personal-message, conversation, audio/skin/image hash and embedded source consistency checks passed. No browser console errors were observed. Preview screenshots are included.

Earlier retained verification follows.

# WebThen v0.24 verification

Checked November 18, 2026.

Browser checks confirmed: 277 × 171 compact player including a 275 × 116 skin face, one-pixel outer frame, no duplicate OS title bar, collapsed-by-default options, expanded options exposing Follow era/status/source/Reconnect/Off/provider notes, Info-button toggling, saved disclosure and XP skin across reload, and paused startup with no audio source. Classic and XP skins were visually checked. Native pointer dragging moved the window from (160,386) to (230,336) without resizing; arrow-key movement and fold/restore also worked. Play streamed audio, advancing to 13.6 seconds; toggling options kept audio playing. Pause worked. Original WebThen appearance restored its controls and resizable 350px window. No console errors were observed. Preview images are included. Other four skin layouts were not individually rechecked in this pass.

Automated retained catalog, archive/source-contact, personal-message, conversation, radio, cached-image, original MP3, skin archive hash and script checks passed. Compact script/CSS and resize source match embedded copies. Native fullscreen and all external historical destinations were not newly tested.

Earlier retained verification follows.

# WebThen v0.23 verification

Checked November 18, 2026.

Automated checks passed for six new archive contacts and seven short source-specific excerpts, sender attribution, source metadata, rare-message gating, no repeated archive excerpts, era eligibility and switching, personal contact messages, conversation history, all script syntax, catalog/radio regressions, embedded icon bytes, original modem recording, and six skin archive hashes. Archive contacts do not receive unrelated generic or era-pop-culture messages. The new collapsed provenance pane is included in both inline and supporting chat source. A fresh browser interaction pass was not performed for this change. Source transcripts were previously reviewed; BZPower was rechecked today. QDB individual-page fetches failed on this recheck, so no new availability claim is made. Archive transcripts and identities are user-submitted, not independently authenticated.

Earlier retained verification follows.

# WebThen v0.22 verification

Checked November 18, 2026.

## Current release checks

- All inline scripts compile. Retained checks pass for the 341-row source import, 351 visible destinations, five eras, archival evidence/status labels, specific Newgrounds submissions, loading themes, local assets, radio controls, conversation histories, and window-size bounds.
- ThenAmp appears in desktop shortcuts, Dock, Start menu, tutorial, player title/accessibility label, taskbar, and skin picker. Historical Winamp skin names and source credits are preserved. Inline theme, onboarding, skin, and AIM engine code match the supporting source copies.
- Deterministic engine checks delivered each of the seven exact personal messages from its matching online contact. Personal messages have no invented year. Existing 50% eligible-session gate, 18% message chance, maximum two Easter eggs per page session, no-repeat behavior, and bounded conversation history are preserved.
- All selected icon bytes are embedded in index.html; source image hashes match local cache files. Coverage: 263/351 catalog destinations and 36/36 default picks. The remaining 88 destinations use labeled category artwork. Source/publisher icons are not necessarily era-accurate logos or exact game covers.
- Six original skin archives match recorded SHA-256 and museum MD5 identifiers. The original user-provided modem MP3 matches its embedded bytes. The radio still starts paused.

## Browser checks from the preceding image/skin implementation

- All 351 gallery images loaded. An index-only HTTP preview, with supporting paths returning 404, loaded the six previously blank default destination logos and the labeled category-art fallback. No console errors were observed.
- Each of the six skin choices applied while music remained paused. Real Play streamed audio; changing skins while playing preserved the source and advancing playback time. Pause disconnected the stream, station changes while paused stayed paused, volume controls synchronized, window shade worked, and the selected skin persisted after reload. The original WebThen appearance option also worked.
- Selected visible skin artwork was reviewed for suitability. Original artwork, readmes and source credits are retained; preservation availability is not a blanket redistribution license or trademark clearance.
- The v0.22 naming and personal-message changes received automated checks; a fresh browser visual pass was not performed for these text/engine changes. Historical destinations and games were not all retested. Native fullscreen permission was previously denied by the automated browser; manual native fullscreen and narrow-screen interaction remain outside the verified scope.

## Earlier retained verification

# WebThen v0.19 verification

Checked November 18, 2026.

## Main-window movement

- Native pointer dragging moved the Directory horizontally and vertically without changing its dimensions. A scrolled Directory retained scrollTop 720 while moving. Resizing continued to work.
- Native pointer dragging moved the Start page from approximately (318.6, 71.3) to (228.6, 121.3), preserving its 730 × 524.9 dimensions. Its minimize button still worked.
- Final v0.19 Directory pointer check moved the resized 1033.2 × 555 window from (75.9, 30) to (175.9, 110). Title-bar keyboard movement also worked in the tour. Mac bounds keep the title bar below the menu bar.
- After moving, Exit desktop view restored a normal static full-width portal; reentering the desktop restored the Directory. Saved movable-directory-preview.jpg shows the moved window.

## Settings and first-use tour

- The Directory OS selector was moved into a hidden shared-state host, and its visible wrapper removed. Sound & atmosphere retains the existing AIM option. Appearance/System Preferences still changes the OS; the connection-screen initial appearance choice remains available.
- First launch showed the six-step tour after the connection screen. Show era controls opened the real Start page picker; changing to 1999–2001 changed the selected era. Show Appearance exposed/highlighted the real desktop icon.
- Opening Display Properties hid the guide while the modal settings were open, and closing settings resumed the same step. Selecting Windows 2000 retained the era. Completed Back/Next/show-control flow through movement, fullscreen, and sound.
- Completing the tour hid it, and a reload plus connection skip did not show it again. Start Help, Replay quick tour in Preferences, and Mac Help each reopened it. Skip and close dismissed replay. The full catalog still showed 351 destinations.
- Saved quick-tour-preview.jpg shows the Appearance guidance with its real control highlighted. No console errors were recorded in the final UI checks. Testing used local HTTP and desktop viewport; narrow-screen interaction was not independently verified.

## Retained checks and limits

- Automated checks passed for every script, source/catalog/archive evidence, six OS themes, cached icon hashes, exact embedded original modem MP3 bytes, fullscreen state/denial handling, and drag bounds at desktop/narrow viewport sizes.
- Startup audio and fullscreen controls remain embedded in index.html. Actual native fullscreen still carries the earlier automation-denial/manual-verification limit described below. Music remains paused at startup. Every external archive/game was not rechecked.
- ZIP extracted file count, all file hashes, and root layout verified: index.html alone beside contents/.

## Previous release verification

# WebThen v0.18 verification

Checked November 18, 2026.

## Desktop shells

- Actual desktop UI reviewed for Windows 98 (teal and optional clouds), Windows 2000, XP, and Mac OS X Aqua. Saved previews: windows98-desktop-preview.jpg, windows2000-desktop-preview.jpg, xp-desktop-preview.jpg, aqua-desktop-preview.jpg.
- Added a sixth OS option, Windows 2000; all five internet eras remain unchanged. Selecting OS themes through Display Properties preserved the selected Flash era and kept radio paused. All six options remain available in the connection screen and Appearance panel.
- Start menu Settings opened Display Properties. Selecting Windows 98 clouds changed the wallpaper; Internet from the Start menu opened the full 351-destination catalog. Aqua Dock Start Page opened welcome suggestions, and View opened System Preferences. Native theme controls retained accessible close/minimize actions; Aqua close controls were ordered at the left.
- XP has cached Bliss imagery, Luna-style title bars/buttons, a green Start button and two-column functional Start menu. Windows 2000 uses original geometric wallpaper and flat chrome. Windows 98 uses original small illustrated shortcuts and gray beveled controls. Aqua has original blue waves, pinstripes, round controls, a global menu bar, and a translucent functional Dock. These are inspired recreations, not pixel-perfect operating-system replicas.
- No console errors in the final desktop preview. Desktop browser viewport visually checked; narrow-screen visual behavior and every possible window arrangement were not comprehensively checked. Existing size bounds are retained; Mac window top fitting now reserves space for its menu bar.

## Startup audio and fullscreen follow-up

- The prior silent sound and missing fullscreen control could not be conclusively diagnosed from the screenshot. Both depended on external files in v0.17. The supplied MP3 and fullscreen code are now embedded directly into index.html, along with the shell icons and wallpaper, removing those launch dependencies. The original MP3 is still included unchanged as a supporting file.
- During preparation, an index-only server intentionally returned 404 for every supporting-file route. The embedded original recording decoded (28.723084-second duration) and played with advancing time; Skip stopped it. Both top-right and taskbar fullscreen controls rendered without supporting scripts. The same embedded MP3 bytes are SHA-256 checked in v0.18.
- Fullscreen controls are available at the desktop top right, taskbar, and connection screen; the Mac menu bar forwards its Fullscreen action to the same control. Native fullscreen itself remains unverified for a manual browser session: the automated preview/Chrome requests in the previous check were denied. Entry, exit, label sync, and denial handling pass unit checks. No browser security settings were changed.
- Sound remains subject to browser/tab/device volume. Press Connect with the recording checkbox checked. No synthetic modem fallback remains; only the first 18 seconds of the supplied MP3 play. Music startup remains paused.

## Regression and package

- Passed: all inline scripts, exact 341-row source import, 351 destinations, existing capture evidence and untested labels, archived submission paths, five-era radio mapping and earlier stream evidence, local linked files, cached icon hashes, six theme options, original embedded MP3 byte identity, embedded shell assets, and fullscreen state handling.
- Previous automated test output mentions the original five themes when checking their retention; an additional release check explicitly verifies all six OS options.
- ZIP extracted file count, every file hash, and index.html plus contents/ root layout verified. Internet Archive/game destinations were not all rechecked. Supporting cached icons/evidence still require the contents folder.

## Previous release verification

# WebThen v0.17 verification

Checked November 18, 2026.

- Added Fullscreen WebThen to the connection screen and right side of the bottom taskbar. Native target is document.documentElement, retaining the entire app DOM and its windows. The taskbar control becomes Exit fullscreen while active.
- Automated checks passed for both entry points, root request with navigationUI hide, exit, shared label/pressed-state synchronization, unsupported and denied feedback, and the existing page-fullscreen guard. Scripts compile; retained modem MP3 and paused radio startup checks passed.
- Actual browser UI confirmed both new controls, successful navigation to desktop, retained AIM/radio/welcome layout, and graceful fullscreen-denied feedback. The in-app preview and automated Chrome both rejected native requests with TypeError not granted. Actual full-screen display, native browser chrome hiding, and Escape exit in a manual browser session remain unverified for this release. No browser security settings were changed. Earlier individual-page fullscreen verification remains below.
- Escape handling now records all fullscreen exits to avoid closing a simulated browser as a side effect of the same keypress. Existing page-specific fullscreen remains available separately.
- Screenshot desktop-fullscreen-control-preview.jpg shows the new taskbar button in ordinary windowed mode, not a confirmed native fullscreen session.
- ZIP extracted file counts, every file hash, and index.html plus contents/ root layout verified.

## Previous release verification

# WebThen v0.16.4 verification

Checked November 18, 2026.

- User-provided MP3 copied unchanged: SHA-256 comparison passed. Synthesis script removed; no synthesis dependency or fallback remains.
- Browser playback decoded the MP3 (28.723084-second duration). Pressing Connect started it at the beginning; currentTime advanced beyond 11 seconds with paused=false and no media error.
- Skip immediately paused playback and removed its source. Sound-off Connect left playback paused with no source. Replay restarted from the beginning.
- Full completion stopped and released the recording, closed the intro, and opened the welcome browser. Music remained paused with no stream source. The scheduled cutoff is 18 seconds; intro finish is 18.5 seconds.
- Automated checks passed for supplied file identity, audio teardown, mute guard, cutoff timers, MIME support, and inline script syntax. No console errors in final preview. recorded-modem-preview.jpg shows the connection screen using the recording.
- HTTP browser preview verified. Direct file playback was not independently tested. ZIP extracted with matching hashes and root layout.

## Previous release verification

# WebThen v0.16.3 verification

Checked November 18, 2026.

- Audio scheduling test passed: more than 90 scheduled tones, filtered data noise, final audio stop at 18 seconds, intro finish at 18.5 seconds. All inline and external modem scripts compile.
- Actual browser: Connect entered dialing and negotiation stages and then opened the welcome browser. Music remained paused without a stream source after completion.
- Replay and immediate Skip closed the intro and cleared its animation state. Existing teardown closes the AudioContext and cancels all stage timers.
- No console errors were recorded. modem-preview.jpg shows the negotiation stage.
- This is an original synthesized approximation of a dial-up handshake, not an extracted recording from the linked YouTube video. The browser page identified the reference as “The Sound of dial-up Internet”; its audio was not available for waveform or subjective listening comparison. Exact acoustic similarity remains for user review.
- ZIP extracted file hashes and root layout verified. Other feature verification is retained below.

## Prior verification

# WebThen v0.16.2 verification

Checked November 18, 2026.

- All inline scripts compiled.
- Actual browser launch: player visible, indicator PAUSED, audio paused=true, src absent. No stream is requested at startup.
- Pressing Play connected and reached PLAY with audio paused=false.
- Closing and reopening the player left audio paused with no src. Changing station while paused did not connect or play.
- Saved screenshot: paused-radio-preview.jpg. Other features retain prior verification below.
- Packaged ZIP extracted with all file hashes and root layout verified.

## Prior release verification

# WebThen v0.16.1 verification

Checked November 18, 2026.

- Confirmed the cause: v0.16 automatically bypassed startup whenever webthen-intro-seen was yes. v0.16.1 ignores that legacy marker and skips only an explicit webthen-skip-intro preference.
- Automated startup branch checks passed for fresh storage, legacy viewed-intro storage, explicit skip enabled, and explicit skip disabled. All inline scripts compile.
- Actual local HTTP browser checks: connection screen visible on launch; Skip to desktop followed by reload showed it again; enabling the future-skip checkbox bypassed it on reload; Replay connection and unchecking the option restored it on reload.
- Connect showed Dialing the past with animated connection state, then closed the dialog and opened the welcome browser. Modem sound remains enabled by default with existing mute preference respected; audible output was not independently assessed.
- No console errors were recorded. Saved connection-preview.jpg shows the restored launch screen. Changes are limited to startup preference/UI and release documentation; prior feature checks are retained below.
- Release ZIP extracted and every file hash and root layout checked.

## Prior release verification

# WebThen v0.16 verification

Checked November 17, 2026 (local date).

- Browser UI: three messages from one buddy appeared together with timestamps and two era links. Opening the conversation cleared that buddy's unread badge. Closing/reopening retained all three messages; taskbar restoration worked. Clicking Open Xanga loaded the archived 2004 Xanga landing page inside WebThen. Offline T0mewalker also opened a conversation.
- Pointer resizing stopped a chat at 340 × 300. Keyboard resizing reached safe minimums for browser (620 × 350), AIM (280 × 360), radio (340 × 320), Start page (460 × 350), directory (620 × 380), and Game Room (620 × 380). Browser toolbar controls and game close control remained reachable. Minimums clamp to smaller viewports.
- Internet opened the complete 351-entry catalog directly. The duplicate desktop Bookmarks shortcut was hidden. All 39 configured cached images loaded with nonzero natural dimensions; the contact sheet was visually reviewed. Saved screenshots: conversations-preview.jpg and cached-icons-preview.jpg.
- Automated checks passed for independent unread counts, unique message IDs, preserved link metadata, immutable snapshots, bounded 200-message histories, history across AIM off/on, and size bounds at both desktop and narrow viewport dimensions. Narrow-screen visual behavior was not verified because the preview viewport override did not take effect.
- Catalog regression passed for the exact 341-row import, 351 total destinations, five eras/themes, existing archive evidence and untested labels, specific submission links, loading art, and background scroll lock. Radio configuration/previous evidence checks passed. All inline scripts compiled, local file references resolved, and cached image hashes matched the manifest.
- No console errors appeared in the final conversation preview. Browser checks used local HTTP; direct file opening and every archive/game destination were not comprehensively retested. Prior fullscreen browser limitations remain applicable below.
- The deterministic message preview page used during QA is excluded from the release. Production retains the ordinary random message schedule and rare Easter egg gating.
- ZIP packaging checks extracted file counts, every file hash, and the root layout: only index.html plus contents/.

## Retained prior verification

# WebThen v0.15 verification

Checked November 17, 2026.

## Current checks

- Actual preview UI: clicking AIM brought its computed z-index above the browser; clicking radio put radio above both; clicking the Xanga archive's cross-origin Xanga News heading brought the browser above both (207 versus AIM 205 and radio 206 in the final check). The browser wrapper no longer creates an enclosing stacking context. AIM remains directly under BODY rather than inside a browser.
- Opened multiple browser windows. Taskbar selection raised the selected window. Minimize retained both original iframe instances/count; restore worked. Game Room opened as a modeless layered window, and a browser could be raised above it using the taskbar. Returning to the desktop and closing the game remained functional.
- Native fullscreen entry in the in-app Chromium preview matched one .session-pane:fullscreen and visually showed only the archived page plus a temporary exit control. Radio remained unpaused. Escape while the parent-page exit control held focus left fullscreen, retained the browser window, and preserved all three open iframe counts. Screenshots: layering-preview.jpg and fullscreen-preview.jpg.
- Important verification limit: the browser automation did not deliver native Escape exit while a cross-origin iframe held focus. An automated Chrome fullscreen request was denied by the browser. Standard manual Chrome/Edge fullscreen and native Escape from an external iframe therefore remain unverified; the implementation uses requestFullscreen/exitFullscreen without keyboard lock, and browser-denied requests show a non-destructive notice. The visible exit control supplies a parent-page exit path.
- Tests compile every inline script, exercise shared-layer ordering and disconnected-window cleanup, and simulate the fullscreen request, Escape capture, and focus restoration. Retained checks pass for all 341 source rows, 351 destinations, five eras/themes, checked-capture evidence, live-radio setup, and moved local links. index.html remains the only top-level file.
- No console errors were recorded in the final in-app browser session. Tests used local HTTP. Original archive destinations, every game, and every browser were not comprehensively rechecked.

## Retained earlier verification

# WebThen v0.14.1 verification

Checked November 17, 2026.

## File layout checks

The root contains only index.html and the contents directory. Local evidence links and the Xanga helper point to contents/. The legacy desktop entry redirects to ../index.html. The optional launcher serves the parent directory, and all tested index/evidence/redirect routes returned HTTP 200. Catalog and radio checks passed. Browser QA confirmed the page opens, the moved Xanga evidence link resolves to contents/xanga-research.json, and 1.FM y2k plays; no console errors were recorded. ZIP packaging verifies the extracted root layout and every file hash.



- Official station pages identify broad 1990s hits and 2000–2009 hits. Source URLs and direct-stream evidence are in radio-evidence.json. All three streams returned HTTP 200, audio/mpeg, and received audio bytes; the ICY station names matched the providers.
- All three streams played in the local HTTP browser preview: Star 90’s (readyState 3), 1.FM 90s Best (readyState 4), and 1.FM y2k (readyState 3/4). Media was unpaused and playback time advanced. No promise is made about availability in every country or browser.
- Real UI checks covered Play, Pause, Reconnect, all station selections, follow-era selection, manual override surviving an era change, window shade while playing, and volume/station/follow preferences surviving reload. Radio Off survived reload and removed the audio source. Pause also removed the source; Reconnect successfully resumed live playback.
- Final screenshot: hits-radio-preview.jpg. The music window contains no video, song seeking, or song-skip controls. Its arrows are labeled as station changes. There is no fabricated now-playing song metadata.
- Source checks compile the scripts, check all five era defaults, reject genre stations, and connect every configured stream to successful audio evidence. The existing 341-row source import, 351 destinations, five eras/themes, historical capture evidence, untested labels, and loading/scroll checks passed unchanged.
- No console errors were recorded in the final radio browser session. Browser testing used localhost. Direct file-URL operation was not browser-tested; index.html is buildless, with absolute HTTPS stream URLs, and the optional local server remains included.
- The original catalog audit and every historical game were not rerun. Earlier verification below describes the previous release and its former soundtrack, which has been replaced by live hits radio.

## Retained v0.13 verification

Checked November 17, 2026.

## File layout checks

The root contains only index.html and the contents directory. Local evidence links and the Xanga helper point to contents/. The legacy desktop entry redirects to ../index.html. The optional launcher serves the parent directory, and all tested index/evidence/redirect routes returned HTTP 200. Catalog and radio checks passed. Browser QA confirmed the page opens, the moved Xanga evidence link resolves to contents/xanga-research.json, and 1.FM y2k plays; no console errors were recorded. ZIP packaging verifies the extracted root layout and every file hash.



## New checks

- All 15 direct MP3 streams returned HTTP 206, audio/mpeg, and valid byte ranges. Source metadata, exact file URLs, permission links, and dates are recorded in music-evidence.json. Full audio is streamed remotely and not bundled.
- First tracks in all five stations played in the local HTTP browser preview: Twilight / Return, Linus / Way Home, Aleksi Eeben / 75% Sale Rea, Datassette / hidden area, and General Fuzz / eye heart knot. Each reported unpaused media, loaded audio data (readyState 4), and finite duration. Playback time visibly advanced. Remaining tracks passed stream checks but were not all individually auditioned.
- Actual UI checks covered station changes, Follow era, pause, volume, seeking, window shade with uninterrupted audio, automatic progression from hidden area to zigzag after seeking near the end, and saved Music Off/volume after reload. The final music window contains zero iframes. No YouTube API remains in index.html or music-player.js.
- AIM tests use controlled random input: all five era pools; relevant years; ordinary-only sessions; maximum two Easter eggs per page session; no repeats; cap surviving AIM restart; selected-era changes; paused delivery; and valid in-app actions. Existing catalog checks passed for the original 341 rows, 351 total destinations, five eras/themes, checked-capture evidence, and untested labels.
- A temporary browser QA fixture selected deterministic Easter eggs without accelerating production timers. Xanga's message opened the exact 2004 homepage inside WebThen. A later Social-era message opened Elf Bowling's Game Boy Advance 2005 player. The next message reverted to ordinary chatter after the two-message cap. QA fixtures are excluded from the ZIP.
- Screenshot audio-and-aim-preview.jpg shows the final audio-only player and fictional Elf Bowling invitation together. No console errors were recorded in the final browser checks. No local game executable was run.

## Limits

Browser QA used the local HTTP preview. The browser tool blocks file: URLs, so opening index.html directly was not browser-tested. The source is buildless and all audio URLs are absolute HTTPS URLs; an optional local launcher is included. Stream availability, full playback of every track, and all browsers are not guaranteed. The original catalog audit was preserved rather than rerun. Earlier verification follows for context.

## Retained v0.12.1 verification

## Experience defaults update

Checked November 17, 2026.

## File layout checks

The root contains only index.html and the contents directory. Local evidence links and the Xanga helper point to contents/. The legacy desktop entry redirects to ../index.html. The optional launcher serves the parent directory, and all tested index/evidence/redirect routes returned HTTP 200. Catalog and radio checks passed. Browser QA confirmed the page opens, the moved Xanga evidence link resolves to contents/xanga-research.json, and 1.FM y2k plays; no console errors were recorded. ZIP packaging verifies the extracted root layout and every file hash.

 A fresh browser origin displayed the modem checkbox checked. Connect opened the desktop with Ambient AIM visible and its sound status on at 35%. Turning AIM off and unchecking modem sound both survived reload. Re-enabling AIM also survived reload. No browser console errors were recorded. Existing catalog and script checks passed. Sound synthesis was exercised; audible fidelity was not independently evaluated. The earlier off-by-default notes below describe the prior release only.

## Entrance and welcome checks — November 17, 2026

- First visit displayed the modal connection screen with all five eras and five independent OS appearances. Sound was unchecked by default. Connect showed the staged connection messages and opened the desktop welcome browser automatically.
- Connect with sound enabled exercised the synthesized Web Audio path without browser errors. Skip during the sequence dismissed it immediately. Audible fidelity and perceived loudness were not independently evaluated.
- Reload bypassed the intro and restored the chosen era and Windows 98 appearance. Replay reopened the intro with the saved sound preference. Sound was turned off again after this check.
- All five welcome eras displayed three suggestions. Flash-era Xanga opened the exact checked 2004 homepage; Social-era MySpace opened the retained 2007 capture with the tab strip visible.
- Browse all destinations exposed all 351 entries, with search successfully finding Xanga. Existing catalog regression checks passed, including the original 341-row import, archive evidence, five eras/themes, and untested labels. Existing archives were not comprehensively rechecked.
- Internet, My Bookmarks, Game Room, Ambient AIM, Desktop, and Welcome taskbar actions were checked. Closing archive windows retained a working desktop. No browser console errors were recorded in the final session.
- At 390 × 844, the welcome suggestions stacked vertically and all primary actions remained visible. The normal viewport was restored after testing.
- Screenshots: connection-preview.jpg and welcome-preview.jpg. The source remains buildless and opens from index.html after extraction. Browser QA used the local HTTP preview; a separate file-URL browser run was not performed.

## Retained earlier verification


## Xanga update checks

- HTTP 200 and Xanga titles confirmed for two homepages and four directory/featured-content landing pages. Exact returned archive dates are recorded in xanga-research.json.
- Actual UI checks confirmed the Flash-era thumbnail opens the January 24, 2004 homepage. Its More info offers the 2004 Blogrings directory. The Social-era More info offers the 2007 Blogrings and 2006 Metros directories.
- Both 2004 and 2007 Blogrings directories rendered inside WebThen with visible category links. The separate-open fallback matched the exact 2007 archive URL. Closing all windows removed all iframes and restored page scrolling. See xanga-directory-preview.jpg.
- Existing catalog regression checks passed: original 341 imported rows, 351 total destinations, five eras/themes, and retained archive/loading/scroll behavior. Member blogs, deeper category links, logins and interactive features remain untested.

## Retained v0.11 checks

Checked November 17, 2026.

## File layout checks

The root contains only index.html and the contents directory. Local evidence links and the Xanga helper point to contents/. The legacy desktop entry redirects to ../index.html. The optional launcher serves the parent directory, and all tested index/evidence/redirect routes returned HTTP 200. Catalog and radio checks passed. Browser QA confirmed the page opens, the moved Xanga evidence link resolves to contents/xanga-research.json, and 1.FM y2k plays; no console errors were recorded. ZIP packaging verifies the extracted root layout and every file hash.

 The first-party catalog and loading interface were tested in the desktop in-app Chromium browser. No new native software or game executables were run.

## Current-release checks

- The scrolling fix was checked against a short cross-origin page and a real Yahoo archive at its bottom boundary. Background positions remained unchanged (634 and 643 pixels respectively). Archived content was independently scrolled with Page Down while the directory stayed at 643. Multiple-window close/minimize and taskbar-restore rules were checked. In Desktop view the directory panel remained at 717 with overflow hidden; Directory changed it to auto and restore changed it back to hidden. See scroll-verification.json. The browser tool had limited input support for a local long-page fixture, so the real archive and its keyboard scrolling supplied the additional in-frame check.
- A controlled delayed iframe was used to keep the loading screen visible. Each of the five selected OS themes displayed only its matching animation. Windows moving-file art was visually inspected and captured in loading-windows-preview.jpg. Reduced motion is covered by the CSS rule and static check, not an OS-preference interaction test.
- All ten new names were found in their intended era through the actual search UI. All destinations displayed 351. EBAUMS WORLD and ebaumsworld both found eBaum’s World. The Flash-era thumbnail opened the exact new 20040701090530 archive URL.
- All ten supplemental archive-page records passed HTTP 200, HTML delivery, title matching and final historical timestamp checks. A maintenance/placeholder response was downgraded rather than treated as site content. The retained original 341-row audit was not rerun; its 268 prior checks are unchanged.
- Automated checks compile all four inline scripts, preserve the original 341 source rows and five eras/themes, validate the ten supplemental records, eBaum’s era picks and normalized search, and the newer within-era capture preference. CSS checks cover all five animation variants and reduced motion.

## Limits

Additional page checks do not establish complete assets, iframe embedding, Flash/Java playback, logins, uploads, chat or multiplayer functionality. New sites retain untested interactive status. OS animations are original inspired drawings, not captured operating-system assets. Frame load events can occur even for an error or incomplete archive page. Other browsers, touch input and a full accessibility audit were not tested. Original Windows game downloads remain download-required; existing Elf Bowling GBA basic-play evidence is carried forward from v0.9.

## Earlier retained validation

### v0.10 validation record

Checked November 17, 2026 in the desktop in-app Chromium browser at a temporary localhost preview. No native game or operating-system software was run.

## Observed browser checks

- Verification is hidden until More info is expanded; the former Explore historical capture button count is zero.
- Thumbnail clicks and keyboard Enter open a historical frame. Salad Fingers still opens its specific Newgrounds submission 178546.
- For 1995–1998 and 1999–2001, two thumbnail selections created two windows, two taskbar entries and no visible tab strip. Taskbar switching restored the chosen window. A Yahoo Directory archive actually rendered inside its frame; its capture is outside the early era in checked-capture mode and remains identified in More info.
- For 2002–2004, both choices were exercised: tab mode created one window with two tabs; window mode created two separate windows.
- For 2005–2007 and 2008–2009, two thumbnail selections created one window with two tabs. Switching tabs retained both frames. Open new window created another independent window. Closing a tab reduced the frame count; Close all reduced historical frame count to zero.
- Desktop entry/exit, directory and Game Room shortcuts, taskbar restoring, AIM shortcut state, minimize/restore and maximize/restore were checked. Dragging the title bar moved a window from (145,35) to (160,50). Archive help was visually verified above the AIM buddy list.
- Game Room still opens Elf Bowling's hosted player and closing removes its game iframe. No complete gameplay retest was performed for v0.10; the v0.9 basic-play evidence is unchanged. Untested and download-required labels remain.
- Final cleanup left no game/historical iframes and AIM off. No captured first-party JavaScript errors were reported during the final pass.

## Contrast and regression checks

contrast-checks.json records 35 computed text/background samples: seven reading-text locations across Windows 98, Windows XP, Classic Mac OS, Aqua-inspired and modern themes. Lowest measured contrast is 7.54:1. The Windows 98 view and final desktop/directory were visually inspected. This is a targeted check, not a full accessibility audit.

The automated check compiles all four inline scripts, checks unique static IDs, removed capture buttons, collapsed More info, unchanged catalog/game evidence, all 21 AIM buddies, all five eras/themes, the exact 341 source rows, capture routing and the 268 prior evidence-backed HTTP/title results. The release ZIP is extracted and every packaged file hash is compared with the release folder.

## Limits

Archive content, cookies, scripts, media and embedding availability remain controlled by external hosts. A frame load event is not proof of successful playback. Internal archive links cannot be fully tracked or era-locked across origins. Page state persists while switching/minimizing, not across refreshes. Other browsers, mobile touch behavior and every keyboard/screen-reader path were not tested. Audio from minimized external pages may continue until the page is closed. No new full catalog audit or rights review was performed.

Final visual confirmation: the 2004 eBaum’s World splash page rendered inside WebThen; see ebaumsworld-2004-preview.jpg. ui-checks.json records five loader variants and all ten era-specific search checks. Final cleanup removed all historical frames and restored background scrolling; no captured first-party JavaScript errors were reported.

