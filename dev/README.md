# Local development

Run `node dev/server.cjs` from the repository root, or double-click `Start WebThen.cmd` in this folder. The server serves the root index and `contents/` assets at the printed local address.

Run `node dev/verify.cjs` before committing. No packages or build step are required. For browser checks, follow the current release's `VERIFICATION.md`; compilation and asset checks do not verify external playback or every layout.

The published release ZIPs stay in the parent workspace. This repository tracks the active source rather than ZIP archives and extracted historical releases.
