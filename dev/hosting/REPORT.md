# Cloudflare Pages private test — WebThen v0.35

The private preview is deployed. Use **https://hosting-cloudflare-pages.webthen-family-test.pages.dev** for testers. It requires Cloudflare Access email verification. The two approved addresses are stored only in Cloudflare, not here.

PR: https://github.com/tomwalker-webthen/WebThen/pull/1. Branch: `hosting/cloudflare-pages`. Main remains at `afb74ab95e03d4e817bb2fb1734cb9476ce6702f`; no merge or main push. The app, its wording and its assets are unchanged.

## Publish folder and build

`npm run build` runs `node dev/build-dist.mjs`, without added dependencies. Output: **3 files, 6,121,147 bytes** (5.84 MiB).

| File | Bytes | Purpose |
| --- | ---: | --- |
| `index.html` | 6,120,932 | Byte-for-byte v0.35 app, including inline images, skins, sounds, data, scripts and styles. |
| `_headers` | 112 | nosniff, strict-origin-when-cross-origin and DENY for `/*`; no CSP. |
| `404.html` | 103 | Prevents Pages SPA fallback from serving the app for missing source files. |

The build scans all literal/escaped `contents/...` references, including JavaScript directory prefixes, and unions them with actual same-origin requests from the source click-through in `dev/runtime-requests.json`. Only `index.html` was requested. Runtime assets are already inline; separate icons, MP3, skin images, JSON, CSS and JS mirrors are not fetched by this build.

The requested exclusions omit three files still linked under More info: `contents/destination-audit.json`, `contents/historical-additions.json`, `contents/xanga-research.json`. Those links intentionally lead to Not found. Inline catalog/provenance data is retained. No links were edited because this is hosting only.

`dist/`, local raw request logs and generated build reports are ignored. No development tools, documentation, evidence screenshots, research files, source mirrors, secrets or tester emails are published. Cloudflare uploads the two web assets; `_headers` is consumed as configuration.

## Cloudflare configuration

- Project: **webthen-family-test**, connected to only `tomwalker-webthen/WebThen` through the approved GitHub installation.
- Framework None; production branch `main`; build `npm run build`; output `dist`; root repository directory. Build environment observed Node 22.23.4 / npm 10.9.9.
- **Production automatic deployments are paused.** Only `hosting/cloudflare-pages` is enabled as a custom preview branch. Main has no hosting build script until Tom merges the PR; its initial build failed with Missing script: build, and no production app was published.
- First successful preview: commit `056e7dd030f0a25a6949669e0f326a77d865901c`, deployment `803f975c-57c6-49af-93d4-58748e628fd3`, https://803f975c.webthen-family-test.pages.dev, November 19, 2026, 12:56 PM EST. Build/deploy succeeded in 19 seconds. The branch alias is the recommended tester URL; documentation-only updates may create later equivalent builds.
- **WebThen production** Access application: `webthen-family-test.pages.dev`, ID `4403f861-fc11-48a9-acb4-046e54e0913c`.
- **WebThen previews** Access application: `*.webthen-family-test.pages.dev`, ID `f1ea648d-8fc1-4aee-ac0c-377fe95c5858`. Pages preview restriction is enabled, covering branch aliases and immutable deployment hashes.
- Both use the same **WebThen invited testers** policy, ID `8ca3984b-f1a4-44b3-80a3-1a0cf25b512b`: Allow, Include → exact Emails, two approved addresses. Default Cloudflare-member policies were removed. No Everyone, Bypass or wildcard-email rule is attached.
- Authentication: One-time PIN (the only available provider), accept-all-providers off. Application and shared-policy session duration: **1 week**. Cloudflare One Client authentication off.
- Both anonymous gates worked before app output was deployed. No transient unprotected app deployment was made. No DNS/custom-domain changes; no billing details entered or terms accepted by the agent. Tom completed the Free-plan checkout. A dashboard onboarding banner still sometimes requested an active plan; saved application settings and the actual Access gate worked.

## Add or remove testers

1. Open Cloudflare → Zero Trust → Access controls → **Policies**.
2. Open **WebThen invited testers** → Edit.
3. Under Include / Emails, add or remove the exact address; Save.
4. This shared policy updates **both** WebThen production and WebThen previews. Do not add a separate broad Allow or Bypass policy.
5. To remove access immediately, also revoke that person's active Access sessions under Team & Resources → Users. Otherwise an issued one-week session may remain valid until expiry.

No GitHub change or redeployment is required for tester-list changes. Share the preview alias, not the currently empty production address.

## Verification

| Check | Result and evidence |
| --- | --- |
| Source and dist-only local click-through | Passed: Connect, ThenAmp Play, skin picker/XP skin, Video Lounge, Game Room/Elf Bowling provider page, Appearance and clock travel through all five eras. Node preview server logged all same-origin requests; zero runtime 404s. |
| Local package checks | `node dev/verify.cjs` and `node dev/check-dist.mjs http://127.0.0.1:8872` passed, including byte equality, header values, folder inventory and numeric HTTP 200/404 checks. Local npm was unavailable, so scripts ran directly through Node. Cloudflare subsequently ran `npm run build` successfully. |
| Deployed headers/build | Passed: Cloudflare build log reports exactly 3 files / 6,121,147 bytes, one valid header rule, successful assets publication. Its Headers view shows all three requested headers and no CSP. Raw authenticated HTTP response headers were not captured. |
| Anonymous production and preview gates | Passed: both show the appropriate Cloudflare Access login. A fresh native Chrome Incognito window showed the preview gate without exposing WebThen. |
| Allowed identity | Passed: the first approved tester completed OTP sign-in in the in-app browser; WebThen's Connect To screen loaded. Second tester is configured but has not personally signed in during this test. |
| Non-listed identity | **Unverified:** another address controlled by Tom was requested but has not been supplied. Do not treat the OTP form's generic “code sent” text as proof of admission or denial. The configured exact-email default-deny rule was reviewed; this is not an end-to-end denied-identity test. |
| Hosted 1996 connection | Passed for playback state: Dialing shown; modem audio not paused, readyState 4, currentTime advancing, no media error. The full connection finished. No human listening confirmation. |
| Hosted broadband | Passed: 2006 travel showed Connecting, with no dialing; visible connection stage about **1.35 seconds**. |
| Hosted radio | Passed for playback state: HTTPS 181.FM stream, readyState 4, currentTime **7.13s**, not paused, no media error. Paused again after test. No human listening confirmation. |
| Hosted Video Lounge | Passed: Toy Story trailer reported Playing in a real HTTPS youtube-nocookie iframe. No reported browser console error/warning at that check. |
| Hosted Game Room | HTTPS creator-hosted Hapland page loaded in the app iframe. Full gameplay/audio/completion was not repeated. |
| Real Wayback | **Failed externally:** Yahoo! Directory iframe returned **429 Too Many Requests — nginx**. The requested URL was `https://web.archive.org/web/20030623120032if_/http://dir.yahoo.com:80/`. No stub, URL replacement or app fix was introduced. Successful historical reading is not certified. |
| Favorites | **Existing app defect observed:** first launch selected 1996, and clock/Start picks showed 1996, but Favorites listed Xanga/eBaum's World/Salad Fingers from the original 2003 default. After clock travel/reload to 2006, Favorites correctly listed MySpace/YouTube/Xanga. App code was left untouched. |
| Hosted quick tour at 1280×720 | Passed: clientHeight = scrollHeight = **193px**; bottom **644px**, Next bottom **631px**. All controls visible without scrolling. |
| Deployed forbidden paths after authentication | `/dev/`, `/VERIFICATION.md`, `/contents/server.cjs` each displayed the custom **Not found** document, not the app or an Access redirect. Numeric status codes were not exposed by this browser tool; raw authenticated 404 status remains unmeasured. Local numeric 404 checks and the deployed top-level 404 asset confirm the intended configuration. |

Browser error/warning log checks returned no entries during the hosted playback/travel/game checks. Full external network tracing is not exposed by this browser tool; **do not interpret empty console logs as proof of zero failed requests**. The visible Wayback 429 is recorded explicitly. Deliberate missing-file probes are separate from normal load checks. Raw authentication URLs, cookies, OTP codes and tester addresses are not recorded in these results.

## HTTPS findings

No configured direct HTTP media/frame/script/image load was identified. All three radio stream URLs in `contents/radio-stations.json` and the identical inline station list use HTTPS. Game frames use:

- `https://arcadespot.com/game/elf-bowling-1-2/`
- `https://archive.org/embed/1100_alien_hominid`
- `https://foon.uk/farcade/hapland/`
- `https://foon.uk/farcade/hapland2/`

The interview uses `https://markprindle.com/longmont-i.htm`. YouTube API, iframe and thumbnails use HTTPS. Historical navigation uses HTTPS Wayback replay URLs. An original HTTP URL inside the **path** of an HTTPS replay URL is not itself an insecure outer request.

`http-url-inventory.json` lists all **714 unique absolute HTTP literals** from the unchanged index, conservatively including originals, past API-response metadata and SVG namespaces. It is not a list of 714 insecure runtime requests. Address-bar input defaults and original-source fallback links do not automatically load as HTTP frames/media. No app URLs changed. Third-party subresources/redirects remain provider-controlled and may still fail on HTTPS. No feature is predicted to break specifically because of a configured direct HTTP endpoint; observed Wayback throttling and the first-launch Favorites defect are separate issues.

## Remaining checks / decisions

- End-to-end denied-identity check needs a non-listed address controlled by Tom. Private-window allowed-identity login was not repeated; the allowed check passed in the in-app browser.
- Raw authenticated HTTP status/header capture and complete external failed-request tracing remain unavailable in the current browser tools. No credentials were extracted to work around this.
- Retry a real Wayback page from the tester's network after throttling clears. Do not change archive URLs or behavior without Tom's approval.
- Fixing the existing initial-Connect Favorites mismatch, or the excluded research links, requires a separate app-change scope.
- Main stays unmerged and production auto-deploy stays off. This delivery is the protected **preview** test.

## Official references checked November 19, 2026

- [Pages preview deployments and preview-only Access toggle](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
- [Protecting production pages.dev plus wildcard previews](https://developers.cloudflare.com/pages/platform/known-issues/#enable-access-on-your-pagesdev-domain)
- [Top-level 404.html disables Pages SPA fallback](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Access session durations](https://developers.cloudflare.com/cloudflare-one/access-controls/access-settings/session-management/)
- [OTP policy denial conceals account enumeration](https://developers.cloudflare.com/cloudflare-one/access-controls/troubleshooting/)
