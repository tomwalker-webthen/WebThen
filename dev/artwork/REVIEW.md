# Artwork and permissions review

Reviewed November 19, 2026 on `art/original-desktop-assets`. This branch is not deployed. Main and the protected preview are unchanged. This is an asset inventory and source review, not a legal clearance opinion.

## Original artwork now in the active app

| Surface | Change | Evidence |
| --- | --- | --- |
| Messenger | Renamed to **ThenChat**, approved by Tom. Original teal waving figure with a speech bubble replaces the yellow running figure in the desktop, header, Start menu, Dock and tray. | `dev/generate-original-art.mjs`, `contents/original-art/aim.svg`; compatibility IDs and stored settings retain their old internal names. |
| Internet | Original browser-window/globe/cursor illustration replaces the orbiting globe icon. | `contents/original-art/internet.svg` |
| ThenAmp | Original cassette icon replaces the lightning mark. Six original SVG finishes—Graphite, Midnight, Copper, Pocket, Skyline and Glacier—replace preserved WSZ artwork. Every title strip says THENAMP. | `contents/original-art/`, generator and `contents/radio-skins.js` |
| Start | Two interlocking diamonds replace the four-color flag. | `contents/original-art/flag.svg` |
| Dock file manager | Original labeled folder replaces the face icon. | `contents/original-art/aqua.svg` |
| XP wallpaper | Original **Evening Lake** vector landscape replaces the cached Bliss photograph. | `contents/original-art/evening-lake.svg` |
| Destination thumbnails | Active cached-logo maps are empty. Existing original category illustrations identify linked destinations. Real site names and URLs remain descriptive text. | `dev/check-original-art.cjs`; no brand-image cache remains in the publish HTML. |
| Buddy sound effects | Earlier sample set restored at Tom's request on 2026-11-19 (`contents/buddy-sounds/`); provenance unconfirmed. The composed sweeps and chime remain in `contents/original-art/`, inactive. The original modem recording is not synthesized or replaced. | Original PCM WAVs and their generator in `contents/original-art/` |

The retained blue geometric, wave and cloud wallpapers are project-authored SVG drawings. Other existing generic game, monitor, folder, network and loading art remains. Familiar theme colors, window layouts and descriptive OS names remain: replacing particular assets does not establish clearance of the overall interface or product names.

Old icon PNGs, WSZ archives, Bliss JPG, manifests and preview evidence remain as retired references in this private source checkout/Git history. They are not loaded by the active app and are excluded from `dist/`. A future public source repository or source ZIP needs a separate cleanup; the current three-file website bundle does not distribute those reference files.

## Recording and external hosts

| Item | What was established | Public-launch follow-up |
| --- | --- | --- |
| Supplied modem MP3 | Tom confirmed on November 19 that it is royalty-free. Original file and 18-second playback remain unchanged. | Save its source/license reference and any attribution requirements. The royalty-free assertion is user-provided, not independently verified. |
| Elf Bowling GBA / Arcade Spot | [Terms section 4](https://arcadespot.com/terms/) requires written permission for embedding. Prior technical success is not permission. | **Permission pending.** Tom explicitly requested retaining the embed during private testing while he obtains permission. No outreach was made. Resolve before public launch, or change to an external source link. |
| Hapland and Hapland 2 / Foon | Creator pages credit Robin Allen and Ruffle. [Creator site](https://foon.uk/) and [game page](https://foon.uk/farcade/hapland/) reviewed; no explicit third-party embedding grant was established from those pages. | Confirm embedding permission or use source links. No game files are bundled. |
| Alien Hominid / Internet Archive | Archive player remains external; interactive playback was previously unverified. [Archive terms](https://archive.org/about/terms) required JavaScript in the research tool. | Both playback and rights remain unconfirmed. Availability in an archive is not a permission record. |
| Line Rider | [Current official site](https://www.linerider.com/) loaded in WebThen and its Play action opened editor controls. This is the current edition, not the 2006 Flash file. | Public embedding permission not established. Drawing, physics, audio and other browsers unverified; host logged a cross-origin BroadcastChannel warning. External source action remains available. |
| 1.FM | [Terms sections 4–5](https://www.1.fm/terms-of-use) describe personal, non-commercial use and require consent for commercial use. | Clarify use in a publicly monetized WebThen. Keeping the radio free does not itself establish permission. No audio is recorded or rehosted. |
| 181.FM | Existing direct stream configuration remains. [Support](https://www.181.fm/support) and [embed page](https://www.181.fm/codes) returned JavaScript-only documents to the research tool. | Public/commercial integration terms were not established in this pass. Retain source attribution and confirm permitted use. |

External sites, preserved games, videos and archive frames retain their owners' branding and notices. WebThen does not replace, hide or claim ownership of that third-party content. Quotation provenance and archived screen names are preserved. This pass does not certify every catalog destination, quote, video or provider.

## Line Rider link repair

The reported buddy link opened a historical replay and displayed a **429 Too Many Requests** response. New simulated messages and previously received simulated catalog actions for Line Rider now open its current official browser player, explicitly labeled as such. Archived quotations retain their original actions. The Directory thumbnail still opens its historical destination; More info offers the current player separately. Wayback throttling itself has not been fixed or bypassed.

## Checks

Run `node dev/verify.cjs`, `node dev/check-original-art.cjs` and `node dev/test-line-rider-links.cjs`. Original assets regenerate with `node dev/generate-original-art.mjs`. The generator changes only its owned assets/constants, shell icon paths and wallpaper; rerun verification afterward.

The local clean website build is three files totaling **2,408,978 bytes**, down from the hosted build's 6,121,147 bytes. This is a file-size measurement, not a measured improvement in network load time. Source asset hashes are recorded in `contents/original-art/manifest.json`.

Public release remains pending permissions and broader review. No paid features were enabled. Custom screen names remain free for private testing.




## ThenChat logo — 2026-11-22

- Tom supplied a waving-figure logo (source kept at `dev/artwork/source/thenchat-logo-supplied-2026-11-22.png`). It was traced to SVG and recolored to a black figure with a yellow outline; `contents/original-art/aim.svg` and the desktop, tray and buddy-list icons use it.
- Before any public launch: a yellow-and-black waving figure is still close to AIM's Running Man trade dress (AIM marks are held by Yahoo). Acceptable for private testing; get a rights review or choose a less AIM-like palette before publishing.


## WebThen logo — 2026-11-22

- Tom supplied the "Timewarp Globe" sheet (kept at `dev/artwork/source/webthen-logo-sheet-supplied-2026-11-22.png`). The globe mark and the globe-plus-wordmark banner were traced to SVG (`contents/original-art/webthen-mark.svg`, `webthen-banner.svg`). Used for the favicon (SVG with a 32 px PNG fallback), the Connect To banner, the browser activity logo, the Internet desktop/Start icon, the Start menu header and the Mac menu bar.


## ThenAmp skins — 2026-11-22

- Tom reinstated the classic Winamp skins (Classic Winamp, Winamp5 Classified, Sony CDX-MP3, AMPBOY, Windows XP, OS8 Aquamarine) for private testing. These include third-party and Nullsoft artwork, the WINAMP wordmark among them, and are not cleared for public release.
- Public-release step: `node dev/use-thenamp-skins.mjs original`, then `node dev/verify.cjs` and `node dev/check-original-art.cjs` (which reports the active set). Both sets are saved in `dev/artwork/thenamp-skins/`.
