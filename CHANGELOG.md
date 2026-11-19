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

