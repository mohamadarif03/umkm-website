# PredikAI Project Context

## Project Overview

PredikAI adalah platform berbasis AI untuk membantu UMKM Food & Beverage (F&B) memprediksi penjualan dan menentukan rekomendasi produksi berdasarkan data historis penjualan, cuaca, hari libur nasional, dan event lokal.

Tujuan utama sistem:
- Mengurangi overstock dan understock
- Membantu owner membuat keputusan produksi berbasis data
- Menjadi AI business consultant untuk UMKM F&B

Target pengguna utama:
- Owner bisnis F&B
- Cashier (opsional, hanya input transaksi)

---

# Main Features

## Authentication
- Register
- Login
- Logout
- Change password

## Dashboard
Dashboard modern dan informatif dengan:
- Summary sales
- Prediction overview
- Recommendation overview
- Top selling menu
- Forecast highlights
- External factor insights

## Business Management
- List businesses
- Create business
- Edit business
- Deactivate business

Fields:
- Business name
- Address
- City

## Menu & Product Management
- List menus
- Add menu
- Edit menu
- Activate/deactivate menu
- Import menu from Excel/CSV

Menu fields:
- Name
- Selling price
- COGS
- Category
- Unit

## Sales Data Input
- Manual sales input
- Bulk sales input
- Edit sales history
- Upload historical sales
- View sales history by date range

System concept:
- Owner can manually input data
- Future support for cashier role
- Cashier transaction automatically syncs to sales records

## AI Prediction
### External Factors
- Weather forecast
- National holidays
- Local events
- Impact estimation

### Sales Prediction
- Weekly prediction
- Monthly prediction
- Prediction comparison
- Influencing factors analysis

### Production Recommendation
- Daily production recommendation
- Override recommendation with reason
- Recommendation vs realization history

---

# UI/UX Direction

Style:
- Modern SaaS dashboard
- Clean
- Minimalist
- Professional
- Data-focused
- AI-centric

Preferred colors:
- Green
- Emerald
- White
- Neutral gray

Design inspiration:
- Stripe
- Notion
- Linear
- Vercel
- Modern analytics dashboards

Use:
- Rounded corners
- Clean spacing
- Card-based layouts
- Soft shadows
- Responsive design
- Elegant typography

Avoid:
- Cluttered layouts
- Excessive colors
- Overcomplicated UI

---

# Frontend Rules

IMPORTANT:
Focus on UI/frontend only unless explicitly requested otherwise.

Do not implement:
- Backend logic
- Database queries
- API integration
- Authentication logic
- AI model logic
- Validation logic

Only create:
- Layouts
- Components
- Pages
- Dummy data
- UI interactions
- Responsive design

Use mock/dummy data when needed.

---

# Coding Rules

CRITICAL & MANDATORY:
- **ABSOLUTELY NO CODE COMMENTS**: Dilarang keras menulis komentar sedikitpun di dalam kode untuk menjelaskan logika, fungsi, atau baris kode. Kode tidak boleh memiliki komentar penjelasan sama sekali.
- **STRICT CLEAN CODE**: Kode yang dihasilkan wajib memenuhi standar *Clean Code* tertinggi. Kode harus "self-explanatory" (menjelaskan dirinya sendiri) melalui struktur yang baik dan penamaan yang sangat jelas, sehingga tidak membutuhkan komentar sama sekali.
- Use exact, semantic, and descriptive naming for variables, functions, and components.
- Use reusable components.
- Follow clean architecture principles.
- Keep components modular (Single Responsibility Principle).
- Avoid duplicated code (DRY principle).
- Keep files strictly organized.

Code must feel production-ready and be 100% free of explanatory comments.


# UI Priorities

Prioritize these pages first:
1. Dashboard
2. AI Prediction
3. Production Recommendation
4. Sales Input
5. Business Management
6. Menu Management
7. Authentication

---

# Dashboard Expectations

Dashboard should contain:
- Sales summary cards
- Forecast cards
- Prediction trend charts
- Weather insight section
- Holiday impact section
- AI recommendation cards
- Top selling menu
- Business performance

Dashboard should feel intelligent and premium.

---

# AI Feature Direction

PredikAI should feel like:
- Smart assistant
- AI business consultant
- Predictive analytics platform

Avoid making it feel like:
- Basic POS system
- Generic cashier app
- Traditional ERP

AI insight cards should contain:
- Why prediction changes
- External factor explanations
- Suggested action
- Risk level
- Opportunity insight

---

# Cashier Role

If cashier role is implemented:
- Keep UI extremely simple
- Focus only on transaction input
- Fast interaction flow
- Mobile-friendly layout
- Minimal navigation

---

# Writing Style

Use:
- Clear labels
- Professional wording
- Modern SaaS tone

Avoid:
- Overly formal wording
- Robotic language
- Complex terminology for small business owners

---

# Final Notes

PredikAI is not just a sales recording app.

PredikAI is an AI-powered business intelligence platform for UMKM F&B.
The interface should reflect intelligence, clarity, and modern business decision support.