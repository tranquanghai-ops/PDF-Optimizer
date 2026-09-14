# PDF Optimizer Studio

> **Note:** This repository is the active development version derived from [`PDF-Optimizer-Resizer-Studio`](https://github.com/tranquanghai-ops/PDF-Optimizer-Resizer-Studio). The original repository is preserved as the published research reference.

---

## Overview

PDF Optimizer Studio is a client-side, browser-based web application for compressing, resizing, splitting, merging, and optimizing PDF documents without server upload requirements.

This repository is maintained for ongoing development, maintenance, and integration into the central portal:
- **Production URL:** [https://tdtu-tknt.web.app/pdf-optimizer/](https://tdtu-tknt.web.app/pdf-optimizer/)
- **Portal Repository:** [tranquanghai-ops/TDTU-TKNT-Portal](https://github.com/tranquanghai-ops/TDTU-TKNT-Portal)

---

## Repository Structure

```
PDF-Optimizer/
├── index.html          # Lightweight bootstrap loader & iframe wrapper
├── app-v53.html        # Core application interface and inlined logic
├── pdf-tools.js        # Extended processing tools and helpers
├── docs/
│   └── AI-HANDOVER.md  # Handover documentation & integration notes
└── .github/workflows/
    └── release.yml     # Automated zip artifact release workflow
```

---

## Portal Integration

This application is mounted under `/pdf-optimizer/` in the TDTU TKNT Portal.
All internal asset references are relative (`app-v53.html`, `pdf-tools.js`), allowing the application to function seamlessly both at the root domain and under any subfolder mount path.

---

## Releases & Artifact Packaging

Releases published with tags matching `v*` will trigger GitHub Actions to generate `pdf-optimizer.zip` containing the distributable web assets ready for portal consumption.
