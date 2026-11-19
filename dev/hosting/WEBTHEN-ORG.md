# WebThen.org private preview

Configured and checked November 19, 2026. Tester URL: **https://webthen.org/**. The existing https://hosting-cloudflare-pages.webthen-family-test.pages.dev/ address also remains available.

## Routing

- Cloudflare Pages project: `webthen-family-test`.
- Custom domain: `webthen.org` (apex only), observed **Active / SSL enabled**.
- DNS: `CNAME @` → `hosting-cloudflare-pages.webthen-family-test.pages.dev`, **Proxied**, TTL Auto. Cloudflare first created the production target during domain activation; it was then changed to the documented preview-branch target.
- Preview branch: `hosting/cloudflare-pages`; serving deployment `1efc8b40-f6f3-4a1a-a2f4-3613117d2ba9`, commit `1999acd904338a2b0ef762df16019a0ad9cc3ef8`.
- Production automatic deployment remains paused, with no production app deployed. The newer Favorites/tour, artwork/ThenChat/Line Rider and connection-choice branches were listed as skipped with no deployment. This task did not publish those changes or change the app.
- No `www` hostname, email routing, nameserver replacement, billing setting or registrar-contact change was made. Tom completed registration himself.

## Access protection

Before creating the Pages DNS record, `webthen.org` was added as a second exact public hostname to the existing **WebThen production** Access application (`4403f861-fc11-48a9-acb4-046e54e0913c`). Its original `webthen-family-test.pages.dev` hostname remains.

The application retains **WebThen invited testers** (`8ca3984b-f1a4-44b3-80a3-1a0cf25b512b`): one Allow rule using **Include → Emails**, session duration **1 week**. The current approved list contained five addresses at the check; no addresses or membership were changed or copied into this repository. The same policy is also attached to **WebThen previews**, which continues to protect `*.webthen-family-test.pages.dev`.

No Everyone, Bypass or email-domain wildcard was added. Login remains through the existing email/one-time-PIN setup. Domain ownership alone does not make the application public.

### Add or remove a tester

1. Cloudflare → Zero Trust → Access controls → Policies.
2. Edit **WebThen invited testers**.
3. Add/remove exact addresses under Include → Emails and save.
4. The shared policy updates the custom domain and existing Pages addresses together; no deployment is needed.
5. For immediate removal, revoke the person's active Access session too. An existing session can otherwise remain valid until its expiry.

Adding an email does not send an invitation. Share https://webthen.org/ yourself; the tester requests their login code on the Access page. People with a still-valid approved session may enter without another email prompt.

## Verification

| Check | Observed result |
| --- | --- |
| Saved configuration | Reopened the Access app: both exact hostnames present, same shared email policy, one-week session. Reopened DNS: preview-branch CNAME saved, Proxied, Auto. Pages showed Active / SSL enabled. |
| Anonymous HTTP | Fresh request with no cookies: **301** to `https://webthen.org/`; no WebThen desktop content returned. |
| Anonymous HTTPS | Fresh request with no cookies: **302** to the Cloudflare Access login for `webthen.org`; no WebThen desktop content returned. Normal certificate validation succeeded. |
| Existing signed-in browser | Opened `https://webthen.org/`, reached Connect To, then entered the desktop. No new PIN was entered in this check. The existing browser Access session was reused. |
| Excluded files after authentication | `/dev/`, `/VERIFICATION.md` and `/contents/server.cjs` each displayed the custom **Not found** page. Raw authenticated status codes were not captured. |
| Deployment isolation | Pages showed the feature branches skipped, the hosting preview still at `1999acd`, and production paused. No deploy, merge, main push, app edit or paid commitment was made. |

A new non-listed identity rejection and a fresh-private-window OTP sign-in were not exercised in this pass. Exact-email policy enforcement was reviewed; the anonymous HTTPS redirect and the existing authorized session were tested separately. Media/game playback was not repeated for this hostname. The previous hosting report remains the record for those checks and known limitations.

DNS and certificate setup initially took time to propagate; an early anonymous TLS request failed. Final HTTPS checks passed without disabling certificate validation or bypassing a browser warning.

## References

- [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Custom domain for a preview branch](https://developers.cloudflare.com/pages/how-to/custom-branch-aliases/)
- [Shared Access policies](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/policy-management/)

The documentation branch `hosting/webthen-org` is based on the latest local feature branch so the ongoing source work is preserved. It is not the serving Pages branch.
