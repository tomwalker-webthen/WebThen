# WebThen v0.33

Extract the ZIP with index.html beside contents/. Open index.html, or use contents/Start WebThen.cmd to run the local HTTP server (Node.js required). Internet access is needed for archived pages, hosted games, radio and videos. Video Lounge requires HTTP playback; direct-file launches offer Open on YouTube instead. No account or build is required.

## Connect and travel

Choose the era on the connection screen. During a session, click the clock to open Date/Time Properties (Date & Time on Mac), choose an era and press Apply. The Start menu also has Travel to another year…, opening the same dialog. The Start page and Directory no longer have era selectors.

Hover the clock for a full date inside the selected era. Dates use October 15 of a representative year in each bucket: 1996, 2000, 2003, 2006 or 2008. The time display follows your current local time. This is era-level travel, not a year/month calendar editor.

Apply shows Disconnecting…, closes browsing/video/game players, and stops media and ambient sound activity using existing app controls. A short, approximately five-second reconnect follows; Skip animation or Escape enters immediately. WebThen reloads into the selected era without repeating the long connection intro. The Start page suggestions, buddy availability, hits station and Video Lounge queue initialize in the new era.

Travel begins a new page session: open pages and in-memory transcripts/drafts reset. Saved screen name, player skins and other stored preferences remain. Manual OS choices reset on era change. No chat logic, replies, source quotes or contact data changed in this release. An enabled ambient buddy list is temporarily stopped during travel and restored on entry; an off preference stays off.

## Appearance

The default is Windows 95 through June 1999, Windows 98 from July 1999 through 2002, and XP from January 2003 onward. Win2000, ME and Aqua are manual-only. The five era buckets retain their clock dates (1996, 2000, 2003, 2006, 2008), so their defaults are Win95, Win98, XP, XP and XP. No new year selector is added.

A manual Appearance choice survives reloads within its era. Changing era, in either direction, clears that choice permanently; returning to an earlier era uses its default again. Old cross-era overrides from earlier releases are ignored. Use era default clears the current override.

Appearance and Connect disable later OSes with “Not yet released”, based on the exact clock date and release date. Older OSes remain available. The contemporary WebThen theme is outside every historical era and is therefore disabled. Windows 95 uses the Win98 classic shell, with a Windows 95 Start banner, solid navy title bars, and no Quick Launch or Channel Bar. ME is an optional classic-shell variant. These are browser skins, not operating systems.

Desktop shortcuts occupy a reserved left rail in every theme. The startup layout keeps the Start page, buddy list, paused ThenAmp and quick tour away from these shortcuts at 1280×720 and 1440×900. Window title bars and lower-right grips move/resize windows; their controls minimize, maximize/restore and close them.

## Tray and menu actions

- Two-monitor icon: Connection Status, including Replay connection and Disconnect. Both return to the Connect dialog after stopping current media. Connect retains the original supplied modem MP3; unchecking sound enters instantly.
- Fullscreen icon: whole-experience fullscreen. The same action is in the Start menu and on Connect. Escape returns to the native browser. Browser support and a user gesture are required.
- AIM icon: show/sign on through the existing buddy-list control. Right-click for Show buddy list or Sign Off.
- ThenAmp lightning icon: show the player; opening an exited player leaves it paused. Right-click for Show player or Exit. Press Play inside ThenAmp to hear music.
- Clock: period-date tooltip and Date/Time Properties.
- Start menu Log Off… (Log Out on Mac): stop the experience and return to the full portal.

On Mac themes, tray and window actions appear as icons in the menu bar; tooltips and accessible names identify them. The Dock remains on Aqua. If many windows are open, the top window strip can scroll. Windows themes retain labeled task buttons outside the icon-only system tray.

## Discoverability

The quick tour has a Travel with the clock step and a Show Date/Time Properties action. First-time visitors also see Click the clock to travel to another year. Replay the tour from Help/Start or Appearance. These notices are remembered when browser storage is available.

## Content and limits

The full 351-destination catalog, cached icons, three Game Room editions, ThenAmp skins, original archive source links and 24-video library are retained. Verification/provenance remains under More info. Missing destinations say Not available. Radio starts paused and uses the era’s hits station after travel; live stations choose their own songs and can include ads.

Browser security limits reliable detection of every later cross-origin archive failure; the v0.31 failure-screen boundary remains documented in VERIFICATION.md. Native fullscreen and broad external playback were not re-audited in this release. See VERIFICATION.md, layout-checks-v032.json and session-checks-v032.json for the actual checks. Earlier README material is retained separately in README-history-through-v031.md as historical documentation.
