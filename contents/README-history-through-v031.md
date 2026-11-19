# WebThen v0.31

Extract the ZIP and open index.html, beside the contents folder, in a modern browser. Keep the contents folder beside it. All supporting files, including this README, are inside contents. Internet access is required for archives, games, live radio and YouTube. No account or build is required. For Video Lounge, use the local launcher or an HTTP host; direct file:// embedding can be blocked by YouTube. If your browser restricts local files, the optional contents/Start WebThen.cmd launcher serves this folder locally and requires Node.js.

## ThenAmp

ThenAmp is WebThen’s retro radio player. The desktop, Dock, Start menu, tutorial, player title, and taskbar use its new name. Original historical skin names and credits remain unchanged.

Ten personal AIM Easter eggs are assigned exclusively to T0mewalker, HammzT10 and ekillians. They join the rare message pool when that buddy is online, with the existing session probability and two-message cap. Personal messages have no invented historical date.

## Classic skins

Click Skins in the radio title bar, then choose a preview: Classic Winamp, Winamp5 Classified, Sony CDX-MP3, AMPBOY, Windows XP, or OS8 Aquamarine. This small selection comes from the museum’s download-sorted list and was visually reviewed for suitable artwork. Skins are independent of the desktop theme and saved between visits. Use WebThen original restores the previous radio appearance.

The original skin bitmaps are adapted to the existing live-radio player. Play, Pause/Stop, previous/next station, volume, Follow era, source, minimize, and close remain functional. EQ and song seeking/playlists are not supplied. Selecting a skin keeps the current station and playback state. Music still starts paused. The skin artwork and previews are embedded for index-only use; the original archives, extracted images, and source manifest are in radio-skins/.

## Destination images

Cached logos/source-site icons cover 263 of 351 catalog entries, including all 36 curated default picks. Each selected image is embedded in index.html, so the cards do not need the contents folder or a remote favicon service to display. Remaining entries use original illustrations labeled Category art rather than initials. Exact era branding is not exhaustively verified; image provenance is under More info and in icon-cache-manifest.json.

## Quick tour and settings

New visitors get a six-step, skippable tour after the connection screen. It explains eras, OS appearance, moving/resizing/switching windows, fullscreen, modem sound, and paused music. Show-me buttons point out the real controls. Completion or skipping is remembered when browser storage is available. Replay from Help · Quick tour in Start, Help in the Mac menu bar, or Replay quick tour in Appearance/System Preferences.

The Directory no longer displays an OS theme selector. Change themes through desktop Appearance or Mac System Preferences/View. Its existing sound drawer remains as Sound & atmosphere.

## Moving the main windows

Drag an empty part of the WebThen Directory or Start page title bar to reposition it. Their sizes and content scroll positions are preserved. Windows stay within the viewport and below the Mac menu bar. You can also focus a title bar and use Alt + arrow keys (10 pixels), or Alt + Shift + arrows (40 pixels). Existing minimize, close, and resize controls remain available.

## Desktop themes

Open Appearance on the desktop, Settings in the Windows Start menu, or View in the Aqua menu bar. Six OS themes remain independent of the five internet eras. Windows 2000 is newly added. Windows 98 includes teal and cloudy wallpaper choices. XP uses locally cached Bliss wallpaper and Luna-style blue windows; Mac OS X uses original Aqua-inspired blue waves, pinstriped chrome, a menu bar, and functional Dock. Original vector shortcut icons replace emoji tiles. These are browser recreations rather than original OS software.

## Fullscreen WebThen

Choose Fullscreen WebThen at the top right of the desktop, on the connection screen, or at the right of the bottom taskbar. This uses native browser fullscreen for the entire WebThen experience, including desktop, windows, AIM, music, and taskbar. Press Escape or click Exit fullscreen in the taskbar to return to your native browser. Browser support and a user click are required. It does not start audio or reload pages. The separate historical-page Fullscreen action remains available after leaving whole-experience fullscreen.

The fullscreen controls and original modem MP3 are embedded directly in index.html, so these two features still work if supporting files are missing. Extract the full ZIP for cached logos and evidence files. The desktop shows the version number to distinguish releases.

## Connection screen

The connection screen appears at launch by default, including if an older release marked the intro as already viewed. Press Connect for the first 18 seconds of your supplied MP3 with matching connection animation or Skip to desktop for this visit only. Select “Skip connection screen on future visits” to remember that choice. Use Replay connection on the desktop and uncheck the option to restore it. Saved sound opt-outs are retained; sound starts from the Connect click.

## Conversations, resizing, and cached logos

Click any online or offline buddy name to open their conversation. Each buddy has an independent unread count and timestamped history, including working WebThen links. Close or minimize a chat and reopen it from the buddy list or its taskbar button. Turning AIM off retains conversations until this page is reloaded. History keeps the latest 200 messages per buddy in memory; these are simulated incoming messages, not a real messaging service.

Drag the lower-right corner of browser, chat, AIM, radio, Start page, Game Room, and directory windows to resize them. Focus the corner handle and use arrow keys for 10-pixel adjustments, or Shift + arrows for 40 pixels. Minimum sizes and viewport bounds keep controls reachable. Folded AIM/radio windows retain their compact form.

Internet opens the full catalog directly. The duplicate My Bookmarks desktop shortcut is removed; Start page remains available in the taskbar for welcome suggestions.

Logos/icons are cached and embedded for 263/351 catalog entries and all 36/36 default picks. Remaining entries use labeled category artwork. Five selected classic logos replace misleading modern branding. Other site icons can reflect newer branding; these are not historical screenshots. See IMAGE-CREDITS.md, icon-cache-manifest.json, and icon-cache-preview.html.

## Window layering and immersive fullscreen

Click an exposed part of a browser, AIM, music, welcome, directory, or game window to bring it forward. Clicking inside an archived page also brings its browser forward. Window stacking is shared across applications; AIM is no longer attached inside the active browser. Existing browser taskbar buttons restore and raise their windows. Minimizing retains their pages; closing unloads them.

Each historical browser toolbar now has Fullscreen. It requests the browser's native fullscreen mode for the active page pane, hiding the desktop, taskbar, browser toolbar, tabs, AIM, and music window visually. Audio continues. Press Escape to exit. An Exit fullscreen button appears briefly at the top right and reappears on hover/focus; it stays visible on touch devices and with reduced motion. Leaving fullscreen restores the existing page and window. The original maximize button remains available for an ordinary large window.

Fullscreen requires browser support and an allowed user-initiated request. If it is denied, WebThen reports that the window is unchanged. Escape handling inside a cross-origin iframe also relies on the browser's native fullscreen behavior. See VERIFICATION.md for browser-test limits.

## Broad decade hits radio

The Winamp-inspired player now streams established hits stations directly from the broadcasters:

- 1990s Hits — 181.FM Star 90’s.
- 2000s Hits — 1.FM y2k, described by its broadcaster as hits from 2000–2009.
- 1990s Hits · alternate — 1.FM 90s Best.

No genre-specific stations are included. Follow era selects 1990s Hits for 1995–1998 and 1999–2001, and 2000s Hits for 2002–2004, 2005–2007, and 2008–2009. Stations play their full decade, so songs may fall outside the selected narrower era. These are live broadcasts, not historical recordings or exact-year playlists.

Select a station manually to turn Follow era off; re-enable Follow era to restore automatic choices. Play reconnects to the live broadcast. Pause disconnects without building a delayed buffer; playback resumes at the station's current live point. Reconnect retries a failed connection. The arrows change stations, not songs. There is no song seeking, song skipping, or claimed now-playing song title. The display identifies the station and provider. Ads and announcements may play.

Volume, ThenAmp Off, station, and Follow era preferences are remembered when browser storage is available. The player opens paused by default and does not connect to a stream until Play or Reconnect is pressed. Reopening the player after turning it off also leaves playback paused. Minimize folds the player while audio continues. Closing it or choosing Radio Off stops and releases the stream. The animated meter is decorative and respects reduced motion.

Audio is played directly from the broadcaster's published HTTPS stream. WebThen does not record, proxy, rebroadcast, or remove ads. Open station provides the broadcaster fallback. radio-stations.json and radio-evidence.json contain the exact sources and stream checks. MUSIC-CREDITS.md links the providers. No music files are bundled.

## Rest of WebThen

The desktop-first entrance, returning-visitor skip, independent OS themes, full 351-entry catalog, historical browser windows/tabs, archive fallback, loading art, and game room are retained. Internet opens the full catalog. Start page opens the welcome browser. Archive checks and untested playback remain under More info.

Ambient AIM keeps its 20 fictional era-specific Easter eggs and in-app links. Half of page sessions have no Easter eggs; eligible sessions use an 18% chance per message, with no repeats and at most two per page session. The ordinary message schedule remains 2.5–5.5 minutes. Elf Bowling invitations identify the playable 2005 GBA edition. Saved AIM and intro-sound opt-outs remain respected.

VERIFICATION.md describes the checks and limits. Previous ZIP releases are separate.

## Archive buddies

Six new public-screen-name recreations join the random buddy roster. Click their names to open a conversation and expand Archive buddy info for sources. They send only their own short archived excerpts, occasionally, within the existing rare-message limit. Archive handles are simulated; these are not real connections to the original people or bot. The 2006 transcript is enabled in 2005–2007 and 2008–2009. Undated IRC examples use conservative simulation-era placement documented in their info; no exact original date is claimed. All 40 reviewed fictional messages are now available to regular Buddies in the matching era; archive buddies still send only their own excerpts.

## Compact ThenAmp

The skin uses its native 275 × 116 dimensions with a one-pixel frame. Drag its title strip to move it, or focus the strip and use arrow keys. Station selection remains visible. Expand Options & station info (or use the skin’s Info button) for Follow era, connection status, station link, Reconnect, Off and broadcast details. The disclosure starts closed and remembers your choice. Skin artwork is fixed-size; select Use WebThen original for the resizable original layout. Music stays paused until Play.

## ThenAmp double size

Click 2× beside the station selector to double the skin and all its text/controls; click again for normal size. Your choice is remembered across reloads and skin changes. Options remain collapsible. Narrow screens temporarily show the native size with a 2× (fit) label, preserving the double-size preference. Changing size does not reconnect or restart audio.

ThenAmp starts at 1.5× by default when no size preference has been saved. A saved 1× preference is respected.

## Your AIM screen name

Visitors without a saved name get a starter from 100 preseeded retro names on each page visit. Click your own name or open Sounds & settings to edit it. Save name remembers your choice in this browser; Pick another fills a suggestion for review; Random each session clears the saved preference and gives you a fresh starter. Names use 3–16 letters, numbers or underscores and start with a letter. Everything remains local. Replay connection and Return to portal now live in the bottom toolbar.

## ThenAmp size control (v0.26)

The default is now 1.5×. The button beside Station always shows the current size; click to cycle 1×, 1.5× and 2×. Choices are saved. Old 2× preferences move to the new default, while old 1× choices are retained. A fitted size is labeled when the viewport cannot accommodate the preferred size.

## AIM message pools (v0.27)

The inventory aim-reviewed-messages.json contains the 40 approved fictional lines (eight per era), stable IDs and inspiration sources. Regular Buddies mix these with the existing ten generic lines; Family contacts also use the era-appropriate pool, alongside their own personal messages. Reviewed messages are ordinary ambient conversation, not limited to the two rare Easter eggs. Within each era they do not repeat until all eight have been used. Message timing remains 2.5–5.5 minutes while active, with Preview message in settings available for testing.

Existing rare content remains separate: 20 era Easter eggs, ten personal messages restricted to their matching contact, and seven original archive excerpts restricted to six archive screen names. Rare content keeps its 50% session eligibility, 18% selection gate, maximum two per page session, and no repeats. Archive contacts never borrow regular reviewed messages. Seven reviewed adaptations have a collapsed Message inspiration source link and are explicitly identified as fictional adaptations. Historical transcript dates remain subject to the existing source notes.

### Conversation support — implemented in v0.29

This release adds a local message composer, typing delays, topic/era matching, fictional buddy personalities and in-app suggestions. Source excerpts remain restricted to their original archive contacts. Open-ended AI replies are not included.

Documentation upkeep: each release updates README behavior, CHANGELOG changes, VERIFICATION checks/limits, and any affected message/source inventories. Planned features stay explicitly separate from implemented behavior.

## Video Lounge

Open Video Lounge from the desktop or Start menu. Its 24-selection catalog contains 13 browser-confirmed in-app videos and 11 clearly labeled external-only links. It includes early music-video/pop-culture clips, 2002–2004 web animation, and 2005–2009 viral favorites. Click a playlist item to load the visible official YouTube embed. Previous/Next and automatic end-of-video advancement stay inside the selected era. Changing eras destroys the old player and waits for a fresh selection. Closing destroys playback; minimizing pauses it. Starting a video pauses ThenAmp.

YouTube began in 2005, so earlier queues are retrospective uploads of works released in the selected years. More info distinguishes original work years from actual upload dates and gives sources. Remasters are labeled in source notes. Title/channel checks are not claims of universal playback; YouTube controls embedding permissions, regions, ads and its own recommendation surface. The API stops an out-of-list video if it reports one loading inside the embed; external YouTube navigation is outside WebThen’s era lock. Use Open on YouTube if a video is unavailable. file:// launches may produce YouTube error 153 due to missing referrers: use contents/Start WebThen.cmd or an HTTP host for reliable embedding. No videos are downloaded or bundled. youtube-catalog.json and youtube-audit.json record sources and check limits.

## Connection and buddy-list updates

Uncheck Play modem recording and press Connect to enter immediately; no simulated wait is scheduled. Checked sound retains the original recording/sequence. AIM’s heading is AIM with Ambient Instant Messenger beneath it; historical source references are preserved. Enlarging the AIM window now gives the white list the remaining height. Buddies, Family and Offline can each collapse independently; scrolling remains available when contacts exceed the available space.

## Experience backlog

Discussed candidates, not implemented here: Oregon Trail, Number Munchers/Math Munchers, Space Cadet Pinball, Hollywood High, and further expansions to scripted AIM conversation replies (the basic system is implemented in v0.29). Browser editions, embedding and redistribution requirements still need individual checks. Additional ideas for consideration: a Paint-style drawing app, screensavers, and desktop pets; these were suggestions, not committed implementations. Already implemented: simulated desktops/themes, connection recording, Ambient Instant Messenger, ThenAmp with skins, and the new Video Lounge.

## Family contacts

HammzT10, T0mewalker, Thebebegirl22 and ekillians are in Family. ekillians has three original fictional messages about dinner, the shared phone line and printed directions. The ten contact-specific personal messages remain restricted to their named senders and use the existing rare-message rules. The full current inventory is aim-personal-messages.json. All regular contacts, including Family, can also send reviewed era chatter; archive contacts remain separate.

### Video availability review

The catalog now has 24 selections, including four additional period trailers. Browser-blocked embeds are labeled Open on YouTube and excluded from in-app Previous/Next/automatic queues. Their links remain era-appropriate. Playback check results and timestamps are recorded in youtube-browser-checks.json and per-item catalog fields. All four additional trailers were subsequently confirmed playing in the browser. The original uploader controls embedding and can change it later. One Toy Story trailer is from an unofficial archival channel and is identified as such; the others are from movie/trailer channels.

### Current in-app video counts

| Era | In-app playback checked | External-only links |
| --- | ---: | ---: |
| 1995–1998 | 2 | 4 |
| 1999–2001 | 2 | 4 |
| 2002–2004 | 3 | 1 |
| 2005–2007 | 3 | 1 |
| 2008–2009 | 3 | 1 |

The two earliest in-app queues use period film trailers. Music videos that blocked embedding remain available as clearly labeled links. All 24 selected uploads received actual browser playback attempts; these results apply to the test browser/location on the check date and can change.

## Scripted AIM conversations

Click any buddy, type in the message box, and press Enter or Send. Shift+Enter inserts a new line; messages are limited to 500 characters. Twenty-two regular contacts have original fictional personalities and support greetings, games, music, websites, school, computers, family, pop culture and short topic follow-ups. Replies use the selected era at delivery time. The conversation-profile inventory is aim-conversation-profiles.json. Game and video suggestions open inside WebThen.

Replies appear after a short typing delay, usually 3–10 seconds based on reply length and personality, with an 8% chance of an additional 4–7-second pause. Up to five pending messages per buddy are batched into one response. Offline contacts keep a local pending message until they sign on; no message is sent to a real account. Switching tabs, pausing or turning AIM off cancels active typing timers; eligible pending replies resume on return. Closing a chat preserves history and pending replies; unread replies remain accessible from the buddy list. All history and pending messages reset when the page reloads. Saved screen names remain persistent as before.

Archive contacts are different: user-initiated messages can request only their own existing, labeled source excerpts. Previously seen excerpts are not repeated, and a local WebThen notice explains when no further excerpt exists. User-initiated source replays do not consume the two ambient Easter-egg slots. No new quote is attributed to a historical screen name.

Everything runs locally as rules and text templates. There is no AI backend, free-form reasoning, live messaging account or conversation upload. Unsupported topics get a short, in-character request for clarification. Regular buddies are fictional simulations, including user-named contacts.

## Attached QA report and deferred work

Reviewed the November 18 v0.28 QA Findings and Nostalgia Roadmap document. Per the user’s scope decision, this release finishes scripted AIM chats and logs the remaining findings in qa-roadmap-backlog.json. The reported archive toolbar, desktop gutter, error screen, game-search filtering, Directory alignment, Mac taskbar, window controls, favicon, startup crowding and starter-name issues need reproduction and separate fixes. The report’s broader era/date session redesign, tray presentation, period Start pages/video windows, Ruffle, desktop toys, catalog cleanup and publication/artwork review remain proposals. Independent OS theme selection is preserved. Formatting, Warn/Block and user-written away messages are future conversation enhancements, not part of the current basic chat system.

## AIM refinements in v0.30

Regular buddies now understand activity and away-message questions, brb/afk, ASL, jokes, casual reactions and a curated set of artist names. Music terms take precedence over generic play. Identity questions such as robot, AI and real person receive an explicit explanation of local scripted behavior. ASL replies avoid invented ages, genders or locations. Away-message questions quote the buddy’s currently configured away text; available contacts say they have no away message.

Goodbye and brb leave a brief idle context: a subsequent lol does not restart the old topic. Explicit new topics or greetings resume ordinary chat. Greetings avoid doubled punctuation, personality prefixes appear on roughly one in three eligible turns, and unsupported topics receive concise clarification. Replies remain finite local templates, not open-ended AI.

Typing starts immediately, but reply timing is based on the prepared response’s length. Most responses take 3–10 seconds; 8% add 4–7 seconds. Rapid messages restart the delay and combine into one reply, up to the existing five pending messages. Pause, sign-off and era changes cancel/rebuild pending timers without consuming a quote or advancing the conversation early.

Regular buddy text no longer explains Game Room editions, archive playback or the Video Lounge interface. Edition and download details live in action labels. The Windows Elf Bowling recommendation is explicitly a download link; the playable GBA collection is offered only in 2005–2009. Early game suggestions use Minesweeper conversation and GeoCities exploration instead of the later Flash portal. sk8rKid_99, bandgeek2001, moonlight_mp3 and pwned_by_a_duck become available from the 1999–2001 bucket; the app still uses five era buckets, not exact dates. Existing open chats retain history across era changes, with sending disabled if the contact is unavailable.

Routine simulation notes in AIM moved under collapsed More info. Archived excerpts retain a visible Archived chat excerpt label plus their original screen name and Archive buddy info/source. All seven original excerpts, ten personal messages and 40 reviewed ambient era messages remain unchanged. Other desktop labels and the broader UI/era redesign are outside this release.

## Current desktop behavior in v0.31

The era selects a default desktop: 1995–1998 Windows 98, 1999–2001 Windows 2000, 2002–2007 XP, and 2008–2009 Aqua. A choice made in Appearance or the connection screen is a persistent manual override. Use era default in Appearance clears it. Earlier saved manual themes are retained. Era and theme can still be chosen separately through this override.

ThenAmp opens paused alongside the Start page and buddy list. The startup layout avoids overlap at 1280×720 and 1440×900; on Aqua the player sits to the right of the Dock. Standard theme controls minimize, maximize/restore and close app windows; minimized surfaces have restore buttons in the toolbar. Both Mac themes put that toolbar in the top menu bar, with scrolling when many controls/windows are open.

Search and category filters also apply to Game Room cards. Games are grouped as Games & interactive, and the existing Browser play/Download required filter combines with the main filters. Play buttons use plain labels; checks and provenance remain under More info. Missing items say Not available. Catalog dates and audit records have not been invented or reclassified.

Archive frames request if_ replay URLs while external Open archive links retain plain capture URLs. The loader checks connectivity before assigning the iframe URL; rejected/slow initial connections show The page cannot be displayed with retry, Directory and external options. Browser security still limits diagnosis of later cross-origin navigation failures; VERIFICATION.md explains the remaining qa-03 boundary.

Video Lounge keeps its provider branding inside the standard embed, but its window title omits YouTube before 2005. Disk-file launches show a notice and Open on YouTube instead of constructing a player. Use contents/Start WebThen.cmd for HTTP playback. The inline favicon avoids the missing favicon request.

This release does not change scripted AIM conversation behavior. The 100 starter names were replaced to avoid buddy-name stems; saved custom names, original contacts and archived quotes remain intact.
