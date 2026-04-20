# KYCify

FICA/KYC client onboarding automation for small South African law firms.
Monthly subscription SaaS · R399/firm/month · unlimited FICA checks · up to 5 users per firm.

---

## Problem

South African law firms are legally required under FICA (Financial Intelligence Centre Act)
to verify every client's identity, address, and source of funds before rendering services.
For small firms (1–10 attorneys), this process is entirely manual:

- Chasing clients for certified ID copies over WhatsApp and email
- No centralised document store or expiry tracking
- No audit trail to present during Law Society inspections
- Foreign tools (Xero, Clio) don't understand SA document types or FICA rules

KYCify solves this with a secure client self-onboarding link, a compliance dashboard,
and a full audit log — all built for SA law firms, priced in ZAR, and POPIA-compliant.

---

## Features (v1)

- Firm registration and multi-user setup (Better Auth organisations)
- Secure client intake link generation — no client account required
- SA-specific document collection: smart ID, green ID book, proof of address, source of funds
- SA ID number validation (Luhn algorithm + DOB/gender extraction)
- Compliance dashboard: pending / complete / expiring / flagged per client
- Document expiry tracking with automated re-request emails
- PDF audit report per client (Law Society inspection ready)
- Stripe subscription billing — 14-day free trial, R399/mo thereafter
- POPIA-compliant file storage on Cloudflare R2 with presigned URLs

---

## Tech stack

| Layer        | Technology                            |
| ------------ | ------------------------------------- |
| Framework    | TanStack Start + TanStack Router      |
| Language     | TypeScript                            |
| Database     | Neon (Postgres) + Drizzle ORM         |
| Auth         | Better Auth (organisation plugin)     |
| File storage | Cloudflare R2 (presigned upload URLs) |
| Email        | Resend API + React Email              |
| Billing      | Stripe Subscriptions + webhooks       |
| Deployment   | Fly.io or Netlify · Docker            |

---

## Getting started

Prerequisites: Node 20+, pnpm, a Neon database URL, Cloudflare R2 bucket,
Resend API key, Stripe account.

```bash
git clone https://github.com/yourname/kycify
cd kycify
pnpm install
cp .env.example .env        # fill in all required vars
pnpm db:push                # push schema to Neon
pnpm dev
```

## Environment variables

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=

RESEND_API_KEY=
RESEND_FROM_EMAIL=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID=            # R399/mo price ID from Stripe dashboard
```

---

## Project structure

```
src/
  routes/
    _auth/          # login, register, verify
    dashboard/      # attorney dashboard, client list
    intake/         # public client intake flow (no auth)
    api/            # server functions: stripe webhooks, presigned URLs
  components/
    ui/             # shared components
    intake/         # client-facing upload steps
    dashboard/      # attorney-facing compliance views
  lib/
    db/             # drizzle schema + client
    auth/           # better-auth config
    r2/             # cloudflare R2 helpers
    fica/           # SA ID validation, doc expiry rules
    pdf/            # audit report generation
  emails/           # react email templates
```

---

## Roadmap

- [x] MVP: intake link, document upload, compliance dashboard
- [ ] PDF audit report export
- [ ] Document expiry auto re-request
- [ ] WhatsApp intake (WhatsApp Business API)
- [ ] Risk rating engine (PEP screening, entity type)
- [ ] Accounting firm tier
- [ ] API + webhooks for practice management integrations

---

## License

MIT · Built by Chinxeleer · chinxeleer.co.za
