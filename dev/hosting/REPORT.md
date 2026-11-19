# Cloudflare Pages hosting preparation — v0.35

Status: local preparation complete; Cloudflare login, tester list, deployment and Access verification pending Tom. No app behavior, wording, runtime source or assets changed. No push to main.

## Publish folder

Run `npm run build` (Node 20+, no dependencies). Output is **3 files, 6,121,147 bytes** (about 5.84 MiB):

| File | Purpose |
| --- | --- |
| `index.html` | Unchanged v0.35 app; 6,120,932 bytes, including inline images, sounds, skins, data and styles. |
| `_headers` | nosniff, strict-origin-when-cross-origin, DENY for all routes; no CSP. |
| `404.html` | Real missing-file responses instead of Pages' implicit SPA fallback. |

`dev/build-dist.mjs` scans all literal/escaped `contents/...` references, including JS directory prefixes, and unions them with browser-observed same-origin paths in `dev/runtime-requests.json`. The source browser click-through requested only `index.html`. In particular the standalone icons, skin images, MP3, JSON, CSS and JS mirrors are not fetched by this build: their actual runtime copies are inline.

The user-requested exclusion list takes precedence over links to research evidence. Three unchanged links intentionally have no published file: `contents/destination-audit.json`, `contents/historical-additions.json`, `contents/xanga-research.json`. Opening these links returns 404. Their in-app inline catalog data remains present. Fixing these links would change the app and needs Tom's decision; no such change is made here.

`dist/`, local request logs and generated reports are ignored. The build fails on missing selected assets, unsafe paths or linked output directories. No dev tools, documentation, evidence images, source mirrors or credentials are published.

## Local verification

Both source and **dist alone** were served on separate loopback origins. Browser interactions used the background Chromium browser surface with UI actions, without app injection. The Node server records every same-origin request. This is not a separately installed Playwright/browser dependency.

| Check | Local result |
| --- | --- |
| Source and dist click-through: Connect, ThenAmp Play, Skins, Video Lounge, Game Room, Appearance | Pass; no missing same-origin runtime assets. |
| Clock travel through all five eras | Pass on both origins; expected visiting dates and refreshed desktop. |
| 1996 connection | Dialing sequence observed. Dist audio element playing, readyState 4, advancing time, data URI source; no decoder error. No human listening confirmation. |
| Broadband connection | Dist 2006 connecting dialog visible about 1.27 seconds; no dialing. |
| ThenAmp | Dist HTTPS 181.FM stream readyState 4, advancing time, not paused, no media error; paused again after check. No human listening confirmation. |
| Video Lounge | Dist Toy Story trailer reported Playing with real youtube-nocookie iframe. Hosted HTTPS playback still must be retested. |
| Game Room | Real Arcade Spot Elf Bowling provider page loaded in frame; game execution was not repeated in this hosting test. |
| Real Wayback | **Failed externally:** Yahoo! Directory iframe displayed HTTP 429 Too Many Requests (nginx). Real HTTPS timestamp + if_/ URL was requested. No stub or app fix. |
| Favorites | 2000 Yahoo/Neopets/eBaum's; 2003 Xanga/eBaum's/Salad Fingers; 2006 MySpace/YouTube/Xanga; 2008 YouTube/Twitter/Newgrounds. Matched Start page picks. |
| Quick tour at 1280×720 | Pass; clientHeight = scrollHeight = 199; bottom at 610px, Next at 595px. |
| Browser diagnostics | No error/warning entries reported in browser log checks during the local runs. External request-level tracing is not exposed by this browser tool; the visible Wayback 429 is recorded separately. No claim that all third-party requests succeeded. |
| Source verification | `node dev/verify.cjs` passes. |
| Package verification | `node dev/check-dist.mjs http://127.0.0.1:8872` checks bytes, header values, output inventory and HTTP exclusions. |

Normal click-throughs have zero same-origin 404s. Deliberate negative-path probes are separate expected 404s. Zero console errors is a local observation, not a deployed-site certification.

## HTTPS findings

No configured direct HTTP media/frame/script/image load was identified in the unchanged runtime. All three `contents/radio-stations.json` stream URLs are HTTPS, and the inline station list is the same. Game frame URLs are HTTPS:

- `https://arcadespot.com/game/elf-bowling-1-2/`
- `https://archive.org/embed/1100_alien_hominid`
- `https://foon.uk/farcade/hapland/`
- `https://foon.uk/farcade/hapland2/`

The interview uses `https://markprindle.com/longmont-i.htm`; YouTube API, iframe and thumbnail endpoints use HTTPS. Standard historical navigation constructs HTTPS Wayback replay URLs. Embedded `http://original-site/` strings in the **path of an HTTPS Wayback URL** do not make its outer request mixed content. Original target strings, past Availability API responses, original-page fallback links, SVG namespaces and address-bar input defaults are not automatically insecure frame/media requests.

`dev/hosting/http-url-inventory.json` lists all 714 unique absolute HTTP literal strings from the unchanged index, conservatively including metadata and originals. It is an inventory, not a claim of 714 insecure runtime requests. Subresources or redirects supplied by third-party pages/stations cannot be certified from static inspection. Those could still fail on HTTPS, and the deployed browser run must record them. **No app URL was changed.** No current feature is predicted to break specifically from a configured direct HTTP endpoint; Wayback throttling and provider restrictions remain separate risks.

## Cloudflare setup and tester administration (pending)

1. Tom signs into Cloudflare and authorizes GitHub access for **only** `tomwalker-webthen/WebThen`. Stop for any login, billing, DNS or permission decision. No custom domain or DNS change is needed for pages.dev.
2. Create a **Pages** Git-connected project. Production branch `main`; framework None; build `npm run build`; output `dist`; Node 20+ (e.g. NODE_VERSION=22, non-secret). Restrict previews to `hosting/cloudflare-pages` for this test. Do not merge the PR or push main. Main does not yet contain the build script, so it cannot produce this build until Tom merges it later.
3. Before exposing app output, protect both the apex `<project>.pages.dev` and wildcard `*.<project>.pages.dev` preview URLs. Pages preview Access toggle alone does not cover production. Use Pages Settings → General → Enable access policy, then Manage to edit the generated Access application. Follow Cloudflare's documented apex/wildcard procedure: remove the wildcard from that application's public hostname to protect production, save, then re-enable the Pages preview policy to create a separate wildcard application. Confirm **two** protected hostnames. If the dashboard permits adding a separate self-hosted apex application directly, verify the same two-host coverage.
4. On **both** applications: login method One-time PIN, application/policy session duration **1 week**, action Allow → Include → Emails with Tom's approved list. Remove broad default account/team allow rules; no Everyone, Bypass or wildcard-email allow. Tester addresses belong only in Cloudflare, never source, PR text, screenshots or logs.
5. Deploy the PR branch preview only after the protection configuration is in place; verify hash and branch-alias URLs as well as the production hostname in a fresh unauthenticated session. No tester URL is available yet.
6. Tom opens Cloudflare → Zero Trust → Access controls → Applications → the WebThen production application and preview application → Policies → edit the tester Allow policy → Include / Emails. Add or remove the exact email, then Save. Prefer a shared reusable tester policy if available, attached to both apps, so one edit updates both. For immediate removal also revoke that user's active Access session; otherwise an issued one-week session may remain usable until expiry.
7. Test an allowed email with Tom providing its OTP, and a non-allowed address under Tom's control (no unsolicited email to someone else). OTP intentionally conceals whether an email was denied: do not call the generic “email sent” screen proof of admission or denial. Verify protected content is never served to the denied identity and review Access logs when possible.

## Deployment acceptance still pending

- Cloudflare account/login, GitHub app grant if needed, Pages project creation, account plan/billing screen if required, and tester list.
- Fresh-session Access login, denied identity, allowed OTP session, one-week settings, production and preview protection.
- Deployed forbidden-path 404s **after authentication** (Access redirect alone is not a 404 check).
- Deployed dial-up sound, broadband timing, real successful Wayback capture, radio audio, video, Favorites and short-window tour; per-step console/request results.
- Confirm no transient public deployment and no publicly accessible aliases. Keep builds paused or failing until protection is configured; do not temporarily publish unprotected content.

## Official references checked November 19, 2026

- [Preview deployments: default public, preview-only Access toggle](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
- [Known issues: protecting apex pages.dev and re-enabling wildcard previews](https://developers.cloudflare.com/pages/platform/known-issues/#enable-access-on-your-pagesdev-domain)
- [Serving Pages: top-level 404.html disables SPA fallback](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Access session durations](https://developers.cloudflare.com/cloudflare-one/access-controls/access-settings/session-management/)
- [Access troubleshooting: OTP policy denial masks enumeration](https://developers.cloudflare.com/cloudflare-one/access-controls/troubleshooting/)
