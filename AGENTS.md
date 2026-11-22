# Working on WebThen

- This folder is the active project. Historical release folders and ZIPs in its parent are snapshots, not the development source.
- Keep `index.html` at the root and assets/source mirrors in `contents/`. There is no build step or dependency installation.
- The runtime is inline in `index.html`. When changing a mirrored JavaScript file in `contents/`, update its inline copy too. Run `node dev/verify.cjs` before committing.
- Use `node dev/server.cjs` or `dev/Start WebThen.cmd` for local HTTP testing. Keep local development tools in `dev/`.
- Update root `README.md`, `CHANGELOG.md` and `VERIFICATION.md` for releases, plus their linked copies in `contents/`.
- Record what was actually tested. Keep unverified playback, embedding and capture dates explicitly marked under More info. Do not invent historical timestamps.
- Preserve the era rules, quiet startup, period controls, window accessibility and no-overlap startup layout. Do not change AIM/chat behavior incidentally.
- Payments remain on hold unless the user resumes that work. Moving source to GitHub does not authorize hosting, a public release, payment setup or account provisioning.
- Public-launch requirement (Tom, 2026-11-19): custom screen names are a paid registration feature. Keep them free during the private-access testing period; gate custom screen-name editing to registered users before publishing publicly. This records the launch decision only; do not enable the gate during private testing.
- The simulated messenger's approved name is ThenChat. Use the project-authored artwork in `contents/original-art/`; do not restore retired brand-image caches or the Bliss photo to the active app. Exception (Tom, 2026-11-22): ThenAmp uses the classic Winamp skins during private testing. Before any public release, run `node dev/use-thenamp-skins.mjs original` to switch back to the six original ThenAmp skins saved in `dev/artwork/thenamp-skins/`. Read `dev/artwork/REVIEW.md` before public-release work for unresolved game-host/radio permissions and the recording provenance note.
- Never commit secrets, local credentials, `.env` files, generated ZIPs or old release/check folders. No blanket license is granted for third-party assets.
- Work on focused branches for future changes; preserve existing commits and user work. Do not force-push or publish a release without a request.
- The primary private test URL is https://webthen.org/. Keep access limited to the existing approved-email policy unless Tom explicitly changes that scope. Record hosting/domain changes in `dev/hosting/WEBTHEN-ORG.md`; a custom domain does not authorize deploying feature branches or changing main.
