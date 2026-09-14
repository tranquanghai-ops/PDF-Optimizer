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
- **Target Portal URL:** `https://tdtu-tknt.web.app/pdf-optimizer/`
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

- When a new version tag (e.g., `v1.0.0`) is pushed to this repository:
  1. The GitHub Actions release workflow packages `index.html`, `app-v53.html`, and `pdf-tools.js` into `pdf-optimizer.zip`.
  2. A GitHub Release is created containing `pdf-optimizer.zip`.
  3. The portal registry (`apps-registry.json` in `TDTU-TKNT-Portal`) can then be updated to point to the new tag and enabled.
