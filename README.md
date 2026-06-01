# 🏛️ IRTH (إرث) — Preserving Knowledge & Legacy


> *Phase 1: Minimum Viable Product (MVP) Pre-Development Technical Documentation & Repository Specification*

---

## 📋 Overview

**IRTH (إرث)** — *Arabic for heritage or legacy* — is a premium, high-security digital archiving and document management portal tailored for organizations, families, and institutions within Saudi Arabia. The platform provides a secure, structured digital environment designed to safeguard institutional memory, historical documents, multimedia, and legacy narratives.

This repository serves as the unified codebase for the Phase 1 MVP, engineered with a fully custom-coded architecture utilizing a unified JavaScript/TypeScript stack deployed on **Oracle Cloud Infrastructure (OCI) - Riyadh Region** for absolute regulatory compliance.

### 🌐 Core Characteristics
*   **Primary Market:** Saudi Arabia (Fully compliant with KSA PDPL & NCA regulations).
*   **Language Support:** Native bilingual architecture supporting Arabic (Right-to-Left, RTL) and English (Left-to-Right, LTR).
*   **Visual Philosophy:** Premium, minimal, museum/archive aesthetic with an optimized native **Dark Mode** core experience.

---

## 🛠️ Architecture & Tech Stack

The architecture is multi-tenant from the ground up, avoiding conventional monolithic CMS platforms to guarantee granular data isolation, custom multi-tenant authentication, and future-proof modular API integrations.

```
+-----------------------------------------------------------------------------------+
|                                  Client Tier                                      |
|                  Next.js Web Application (React SSR / SSG)                        |
|                     [Bilingual UI: AR (RTL) / EN (LTR)]                           |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼ (HTTPS / REST API)
+-----------------------------------------------------------------------------------+
|                                 Application Tier                                  |
|                            Node.js / Express Server                               |
|                         (Unified TypeScript/JavaScript)                           |
+-----------------------------------------------------------------------------------+
                     │                                           │
                     ▼ (SQL / RLS Enforcement)                   ▼ (S3-Compatible API)
+------------------------------------------+   +------------------------------------+
|               Data Tier                  |   |            Storage Tier            |
|       Managed PostgreSQL on OCI          |   |        OCI Object Storage          |
|    (Tenant Row-Level Security - RLS)     |   |   (Scoped Buckets per Tenant)      |
+------------------------------------------+   +------------------------------------+
                     │                                           │
                     +─────────────────────┬─────────────────────+
                                           │
                                           ▼ (API Connectivity)
+-----------------------------------------------------------------------------------+
|                             External & Cloud Services                             |
|  [SMS Gateway] Unifonic API (OTP)  │  [Future AI] OCI Vision / Doc Understanding  |
+-----------------------------------------------------------------------------------+
```

### 🧰 Component Specification
*   **Frontend Framework:** `Next.js (React)` leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) to maximize performance and SEO crawlability.
*   **Backend Framework:** `Node.js` with `Express` ensuring a lightweight, asynchronous, single-language runtime environment.
*   **Database Engine:** `PostgreSQL` hosted on the **OCI Database Service (Riyadh)**. Multi-tenancy is enforced natively via **Row-Level Security (RLS)** policies at the schema layer.
*   **Object Storage:** **OCI Object Storage (Riyadh)**, utilizing an S3-compatible API with dynamically generated, cryptographically isolated, tenant-scoped storage buckets.
*   **Infrastructure Hosting:** **Oracle Cloud Infrastructure (OCI) — Riyadh Region**, guaranteeing that all data physical residencies comply with the Saudi Personal Data Protection Law (PDPL).
*   **Authentication & SMS OTP:** Custom security layer integrated with **Unifonic API** (Primary) or *OurSMS*/*Taqnyat* (Failover) for zero-trust transactional SMS OTP handling.

---

## 🎯 MVP (Phase 1) Feature Scope

### 1. Landing & Marketing Interface
*   Fully responsive presentation layer built for Desktop, Tablet, and Mobile devices.
*   Global language toggle switch (AR/EN) with immediate dynamic layout shifting.
*   Downloadable interactive platform profile/brochure (Secure PDF Delivery).
*   Top-level Navigation: `Login`, `Museum` (Flagged *Coming Soon*), `Case Studies Center`, `About Us`, and `Contact`.

### 2. Secure Authentication Engine
*   Secure multi-tenant user login and client registration workflows.
*   **Unifonic SMS OTP integration** mapping to domestic telecommunication carriers (STC, Mobily, Zain) utilizing an official registered corporate Sender ID.
*   Visitor Access placeholder endpoints (Flagged *Coming Soon*).

### 3. Client Dashboard
A secure workspace organizing user files across predefined data archetypes:
*   `Index / Archive`
*   `Images` & `Videos`
*   `Reports`
*   `Documents & Records`
*   `Case Studies Center`
*   `Museum` (Placeholder)

### 4. Dynamic Content & Lifecycle Management
*   **CRUD Operations:** Dynamic backend handlers allowing clients to upload, edit, rename, restructure, and delete items.
*   **Dynamic Taxonomy:** Client ability to create, remove, and rename custom archive categories.
*   **Interactive Structuring:** Client-side interface hooks configured for dynamic drag-and-drop structural manipulation.

### 5. Smart Search & Taxonomy Engine
High-efficiency queries optimized using indexing strategies on metadata properties:
*   Unique Code Identifier Number
*   File Name / Asset Title
*   System Category / Tenant Tag
*   Custom Meta-Keywords

### 6. Platform Administration Panel
A localized internal dashboard allowing platform operators to oversee ecosystem health:
*   **User Management:** Provisioning, freezing, and clearing security access controls.
*   **Storage Metrics:** Dynamic tracking of per-tenant byte allocation.
*   **Content Moderation & Taxonomy Controls:** Global classification handling.

---

## 🚫 Out of Scope (Phase 2+)

The following structural patterns are **explicitly barred** from development during Phase 1. Do not build, provision, or structure dependencies for these components:
*   Subscription Payment Rails or Billing Integrations.
*   Public-facing Museum views or external unauthenticated routing.
*   Social interaction primitives (User commenting, community walls, sharing loops).
*   Artificial Intelligence Integration (OCR processing, automated vector indexing, OCI Document Understanding modules). *Note: The database and API routes must remain modularly open to support future OCI AI API hooks, but processing pipelines are excluded.*

---

## 🚀 Development Setup & Environment Provisioning

### 📋 Technical Prerequisites
Ensure your local workstation has the following environments running:
*   **Node.js:** `v18.x.x` or higher (LTS recommended)
*   **Package Manager:** `npm` or `yarn`
*   **Database:** Local instance of `PostgreSQL v15+` for development environment simulation.

### 🔨 Local Quickstart
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/organization/irth-platform.git
   cd irth-platform
   ```

2. **Install Workspace Dependencies:**
   ```bash
   # Install root, frontend, and backend packages
   npm run install:all
   ```

3. **Configure Environment Variables:**
   Create a `.env` file within both the `/apps/frontend` and `/apps/backend` subdirectories based on the configurations outlined below.

4. **Initialize Local Database Schema:**
   ```bash
   cd apps/backend
   npm run db:migrate
   npm run db:seed
   ```

5. **Execute Local Development Server:**
   ```bash
   # Executed from root directory to boot both server instances concurrently
   npm run dev
   ```

---

## ⚙️ Configuration Variables Configuration

Create a localized `.env` configuration template file. Do not commit sensitive credential files back to upstream branches.

### Backend Infrastructure Context (`/apps/backend/.env`)
```env
PORT=5000
NODE_ENV=development

# Database Interactivity
DATABASE_URL=postgresql://db_user:db_password@localhost:5412/irth_dev?sslmode=disable
DB_RLS_ENABLED=true

# Oracle Cloud Storage (OCI Riyadh Region)
OCI_STORAGE_ENDPOINT=https://<tenant-namespace>.compat.objectstorage.me-riyadh-1.oraclecloud.com
OCI_ACCESS_KEY_ID=your_oci_s3_compat_access_key
OCI_SECRET_ACCESS_KEY=your_oci_s3_compat_secret_key
OCI_GLOBAL_BUCKET_PREFIX=irth-tenant-archive

# SMS Gateway Gateway Access Controls (Unifonic API)
UNIFONIC_API_ENDPOINT=https://api.unifonic.com/rest/
UNIFONIC_APP_SID=your_unifonic_app_sid
UNIFONIC_SENDER_ID=IRTH_OTP
```

### Frontend Presentation Layer Context (`/apps/frontend/.env`)
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_PROTOTYPE_REF_URL=https://text-enhance-3.preview.emergentagent.com/
```

---

## 🔒 Pre-Development Client Handshake Requirements

Infrastructure components must not be provisioned until access configurations for the following customer accounts are formally delivered:

| Requirement Account Type | Purpose | Verification Source |
| :--- | :--- | :--- |
| **Oracle Cloud Account (OCI)** | Provision compute architectures, managed PostgreSQL services, and Object storage buckets in the **Riyadh region**. | [Oracle Cloud Sign Up](https://signup.oraclecloud.com/) |
| **Corporate Domain Name** | Configuration of DNS record architectures, SSL layers, and deployment edge points. | Registrars (SaudiNIC, Cloudflare) |
| **Unifonic API Account** | Extraction of Web API configurations and verification of standard registered **Sender ID**. | [Unifonic Portal](https://www.unifonic.com/en) |

---

## 🎨 Visual System Integration Rules

Developers must implement UX components conforming strictly to the guidelines defined by the design team. The product supports three architectural style directions to be verified during user acceptance testing:

### 🎭 Visual Framework Paradigms
*   **Direction A: Deep Archive (Dark Vault)**
    *   *Tone:* Authoritative, institutional, timeless. National Archive aesthetic.
    *   *Palette:* Deep Forest Greens, Aged Parchment tones, Gold accents.
    *   *Default Setting:* Strict Dark Mode Core Experience.
*   **Direction B: Clean Heritage (Museum Catalogue)**
    *   *Tone:* Minimalist, airy, structured, spacious.
    *   *Palette:* Off-whites, Soft Sage tones, Charcoal accents. High whitespace emphasis.
    *   *Default Setting:* Light Mode native, structural dark mode toggle switch.
*   **Direction C: Modern Legacy (Tech Heritage)**
    *   *Tone:* Contemporary, highly technical, clean, structured line weights.
    *   *Palette:* Obsidian Blacks, Warm Beiges, Muted Amber highlights.

### 🔤 Localization and Typographic Requirements
*   **Directionality Check:** Interfaces must shift layout structure natively according to selected context locale (`dir="rtl"` for Arabic, `dir="ltr"` for English). Layout blocks must not use rigid absolute float variables.
*   **Arabic Type Engine:** Give parity of design and visual weight to Arabic calligraphy structures. Implement high-dignity Arabic fonts: `Tajawal`, `Noto Naskh Arabic`, or custom-approved display letterforms.

---

## 📈 Delivery & Financial Governance Tracker

### 💰 Milestone Framework
*   **Milestone 1:** `30% Upfront Retainer` — Initializing development environments and repository structures.
*   **Milestone 2:** `40% Staging Delivery` — Code submission to UAT and functional deployment checks.
*   **Milestone 3:** `30% Production Transfer` — Final delivery, codebase ownership release, and environment handover.
*   **Post-Launch Coverage:** `60–90 Days SLA-supported coverage` for defect remediation.

### 📉 Infrastructure Operational Unit Projections
All operational running expenses map natively to the client's commercial payment gateways:
*   **Storage Compute:** Pro-rata monthly volumetric usage on OCI Object Storage.
*   **Database Compute:** Scaled according to OCPU utilization matrices and active data store volumes.
*   **Network Ingress/Egress:** Volumetric calculations for downstream asset traffic pipelines.
*   **SMS Communications:** Volume transactional costs (~SAR 0.055 per OTP transaction across domestic networks).

---

## 👨‍💻 Team Post-Kickoff Verification Matrix

### ⚡ Tech Team Actions
1. Confirm local engine parity for `Node.js`, `Next.js`, and `PostgreSQL`.
2. Inspect the OCI Management Console setup rules for localized regional deployments within the **Saudi Riyadh Zone**.
3. Verify the `Unifonic REST API` structural document requirements to design authentication pipelines.
4. Walk through the core structural navigation behaviors provided within the [MVP Presentation Prototype](https://text-enhance-3.preview.emergentagent.com/).

### 🎨 Design Team Actions
1. Extract interface layouts from the prototype reference.
2. Build 3 comprehensive conceptual files containing accurate type choices, full color systems, and moodboards mapping to Directions A, B, and C.
3. Validate typography behaviors against dynamic RTL and LTR view layouts.
4. Enforce dark mode variables as an explicit design priority.

---

> **Disclaimer:** Unauthorized copying, dissemination, or distribution of this code repository or associated software design criteria is strictly prohibited under the regulatory compliance systems of the platform stakeholders. All rights reserved.