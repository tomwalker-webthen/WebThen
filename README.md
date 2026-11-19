# WebThen v0.35

Active private repository: https://github.com/tomwalker-webthen/WebThen

Use a focused branch for future changes and run `npm run check` (or `node dev/verify.cjs`) before committing. No dependency installation or build step is required.

This repository contains the active WebThen v0.35 source. Open index.html directly, or use dev/Start WebThen.cmd or node dev/server.cjs for the local HTTP server (Node.js required). Internet access is needed for archived sites, games, radio and videos. Video Lounge requires HTTP for in-app playback; file launches offer Open on YouTube. No account, installation or build is required.

## New destinations

Hapland and Hapland 2 are in the Game Room from 2005 onward, using creator-hosted Ruffle players at Foon. Search Hapland to find both. Basic mouse interactions were checked inside WebThen. Full completion, audio, mobile and other browsers remain unverified. Current creator pages include a modern promotion and are not verified 2005 webpage captures. No game files or emulator copies are bundled.

Longmont Potion Castle — 2003 interview is in the Directory under Music, media & culture from 2003 onward, including the 2002–2004 era picks. Its original Mark Prindle page was opened separately and read. Embedded loads did not complete, so in-app reading remains unverified. Use Open original interview under More info or in the period failure pane. No historical Wayback timestamp or original page appearance is claimed. The current original source is linked directly rather than fabricating a historical capture.

Verification remains under More info. See destination-additions-v035.json, destination-checks-v035.json and VERIFICATION.md. No AIM/chat or payment changes.

## Start page fit

The complete Start page, including Game Room, Browse all destinations and More info, fits its original startup window at 1280×720 and 1440×900. Compact destination cards keep all names and descriptions visible. Startup windows remain separate; Aqua places ThenAmp in the same lower-left startup slot as other themes to keep it clear of the tour. A deliberately shortened/resized window or expanded More info can still scroll.

## Connect and travel

First launch opens a period Connect To dialog. It has a local display user name, a prefilled masked password and a fictional phone number. These fields are presentation only; nothing is submitted to an ISP. Connect and Date/Time Properties both show the era and visiting month/year. The five representative dates remain October 1996, 2000, 2003, 2006 and 2008.

1995–1998 uses Dialing → Verifying user name and password → Logging on to network → Connected at 28,800 bps. 1999–2001 uses the same sequence at 53,333 bps. With the previously supplied modem recording enabled, the sequence lasts about 18.5 seconds; without it, about five seconds. From 2002 onward there is no dialing or modem playback: Connecting → Connected takes about 1.1 seconds. Skip, Escape or the dialog Close control ends the connection immediately. Returning visitors may skip the introductory dialog entirely.

Click the clock or Start menu Travel to another year… to travel. Applying an era stops media, closes browsing/game/video windows and briefly shows Disconnecting. The same Connect To sequence then runs for the destination era, followed by a desktop reload. Manual Appearance choices reset on era change. The tray's two-monitor icon blinks during connection; click it for speed, elapsed connection time, Replay connection and Disconnect. System dialogs have Close only, without minimize/maximize.

## Browser controls

The Directory, Start page and historical browser windows share an icon toolbar: Back and Forward with separate history dropdowns, Stop, Refresh, Home and Favorites. The address row has Go. Type a catalog name or an HTTP(S) website address; new addresses request a historical capture. Home opens the selected era's Start page. Favorites lists that era's suggested destinations. New-window, page-fullscreen, capture details and Open archive live behind the ? status icon in historical browser windows.

The logo animates only during loading. The status bar shows progress, Done, Stopped or the page failure state, and an Internet zone label. Stop aborts pending archive probes and cancels the frame/reveal. The external Open archive URL stays plain; embedded Wayback URLs retain timestamp + if_/.

History menus belong to each browser window's active tab. They cover WebThen address-bar, Favorites and Back/Forward navigation. Third-party links followed inside a cross-origin archive have their own history, which WebThen cannot inspect. Home returns to the separate era Start page and keeps existing browser windows on the taskbar. The local Start page and Directory have their own local history menus.

## 56k mode

Off by default. Enable it in Connection Status. Only in 1995–2001, a successfully loaded archive reveals from top to bottom over 3.5 seconds while the progress indicator fills. With the setting off, the existing v0.33 archive probe, timeout and frame-load timing remain unchanged; no artificial wait is inserted. Broadband eras ignore the reveal setting. This is a visual reveal, not bandwidth throttling or a claim about archive transfer speed.

## Themes and desktop

Seven period choices: Win95, Win98, Win2000, ME, XP, Classic Mac and Aqua. Later OSes are greyed out as Not yet released. The contemporary WebThen choice is removed from both OS lists. Win95 is the classic Win98-shell variant with a Windows 95 Start banner and no Quick Launch/Channel Bar; ME is another classic-shell variant. Defaults remain Win95 through June 1999, Win98 from July 1999 through 2002, XP from 2003 onward. Appearance choices persist within their era and reset when traveling.

The quick tour opens with all text and navigation visible, without scrolling, in every theme at 1280×720 and 1440×900. Replay it from Appearance, Start Help or Mac Help. Startup windows remain clear of desktop icons. Mac tray controls live in the menu bar; Windows keeps its taskbar. ThenAmp remains open and silent until Play.

## Scope and verification

No AIM/chat source changes. Payments remain on hold. New browser controls, logo, indicators and connection artwork use original code/CSS/SVG or simple glyphs; no new third-party artwork, sound files or scripts were added. The existing user-supplied modem recording remains unchanged. Existing theme assets and ThenAmp skins are inherited from earlier releases.

See VERIFICATION.md and the v034 JSON/screenshot evidence for checks and archive limitations. Prior release notes and verification sections are historical records.
