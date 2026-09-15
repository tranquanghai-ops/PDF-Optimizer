# AI Handover & Integration Guide

## 1. Repository Governance

- **Original Archive Repository:** [`tranquanghai-ops/PDF-Optimizer-Resizer-Studio`](https://github.com/tranquanghai-ops/PDF-Optimizer-Resizer-Studio)
  - **Status:** READ-ONLY ARCHIVE / RESEARCH REFERENCE.
  - **Notice:** This repository was published and cited in a scientific research paper. No commits, pushes, branches, workflows, or tag modifications are permitted on it under any circumstances.
- **Active Development Repository:** [`tranquanghai-ops/PDF-Optimizer`](https://github.com/tranquanghai-ops/PDF-Optimizer)
  - **Status:** ACTIVE DEVELOPMENT.
  - **Notice:** All new features, bug fixes, refactoring, and releases must take place exclusively within this repository.

## 2. Central Portal Integration

- **Central Portal Repository:** [`tranquanghai-ops/TDTU-TKNT-Portal`](https://github.com/tranquanghai-ops/TDTU-TKNT-Portal)
- **Target Portal URL:** `https://tknt-tdtu.web.app/pdf-optimizer/`
- **Intended Mount Path:** `/pdf-optimizer/`
- **Artifact Name:** `pdf-optimizer.zip`
- **Required Index File:** `index.html`

## 3. Subfolder Path Compatibility

- Assets referenced in `index.html` (`app-v53.html?v=...`, `pdf-tools.js?v=...`) use strictly relative URLs.
- The app has been verified compatible with subfolder execution under `/pdf-optimizer/` without path rewrites.
- Caching rules configured in the portal:
  - `index.html`: `no-store, max-age=0`
  - Fixed assets (`*.js`, `*.css`, `*.html`): `no-cache, max-age=0, must-revalidate`

## 4. Release & Packaging Workflow

- When a new version tag (e.g., `v1.0.0`, `v1.0.1`) is pushed to this repository:
  1. The GitHub Actions release workflow packages `index.html`, `app-v53.html`, and `pdf-tools.js` into `pdf-optimizer.zip`.
  2. A GitHub Release is created containing `pdf-optimizer.zip`.
  3. The portal registry (`apps-registry.json` in `TDTU-TKNT-Portal`) can then be updated to point to the new tag and enabled.

## 5. Firebase Hosting cleanUrls & trailingSlash Runtime Quirk (Resolved in v1.0.1)

- **Issue:** Firebase Hosting default settings (`cleanUrls: true`, `trailingSlash: true`) cause any request to `app-v53.html` to receive a `301 Moved Permanently` redirect to `app-v53/`.
- **Symptom:** The iframe's base URI becomes `/pdf-optimizer/app-v53/`. Any relative script tag injected into the iframe document (e.g., `<script src="pdf-tools.js">`) resolves to `/pdf-optimizer/app-v53/pdf-tools.js` which returns HTTP 404, triggering:
  `"Không thể khởi động ứng dụng. Không tải được bộ công cụ V5.8. Vui lòng thử tải lại."`
- **Resolution (v1.0.1):** In `index.html`, dynamically compute the absolute URL for `pdf-tools.js` using the parent window's `document.baseURI` (`new URL('.', document.baseURI).href + 'pdf-tools.js?v=5.8.0'`) prior to appending the `<script>` element to the iframe body.
- **Production Verification Status:** v1.0.1 deployed to Firebase Hosting (project: `tknt-tdtu`) and verified via Chrome Headless CDP on 2026-09-15. Application bootstrap, iframe integration, dynamic script injection, and UI controls all verified working without runtime errors.
