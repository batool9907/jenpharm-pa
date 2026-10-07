# Jenpharm Dermive — Shopify Online Store 2.0 Theme

This repository contains the complete **Shopify Online Store 2.0 Theme** for **Jenpharm Dermive (Clinical Precision)**, built with custom Liquid sections, interactive molecular tech showcases, 24-hour hydration clinical data meters, slide-over clinical shopping bag, and an interactive skin diagnostic quiz.

---

## 🚀 How to Connect This Repository to Shopify

### Step 1: Initialize Git and Push to GitHub

Open your terminal / command prompt inside this folder:
```bash
cd "C:\Users\batoo\.antigravity-ide\jenpharm-shopify-theme"
```

Run the following commands:
```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Jenpharm Dermive Shopify 2.0 Theme"

# 4. Set default branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# 6. Push to GitHub
git push -u origin main
```

---

### Step 2: Connect GitHub Repository to Shopify Admin

1. Log in to your **Shopify Admin** (`https://admin.shopify.com/store/YOUR-STORE-NAME`).
2. In the left navigation menu, go to **Online Store > Themes**.
3. In the **Theme Library** section, click **Add theme** and select **Connect from GitHub**.
4. A popup window will appear:
   - If prompted, click **Log in to GitHub** and authorize Shopify.
   - Select your GitHub account / organization.
   - Select the repository: `YOUR_REPOSITORY_NAME`.
   - Select branch: `main`.
5. Click **Connect**.
6. Shopify will automatically pull all theme files, validate them, and add **Jenpharm Dermive** to your Theme Library!
7. Click **Actions > Publish** whenever you want to make it live.

---

## 📁 Theme Directory Structure

```
jenpharm-shopify-theme/
├── .gitignore
├── README.md
├── assets/
│   ├── jenpharm-styles.css          # Clinical Precision styling & layout
│   └── jenpharm-app.js              # Cart drawer, quiz, search, and micro-interactions
├── config/
│   ├── settings_data.json           # Default theme configuration values
│   └── settings_schema.json         # Theme settings customization schema
├── layout/
│   └── theme.liquid                 # Master Shopify layout file
├── locales/
│   └── en.default.json              # English localization strings
├── sections/
│   ├── announcement-bar.liquid      # Top delivery & consultation bar
│   ├── header.liquid                # Logo, navigation, live search & cart triggers
│   ├── hero-section.liquid          # Hero banner with clinical product spotlight
│   ├── molecular-tech.liquid        # 3-column molecular technology with hotspots
│   ├── clinical-stats.liquid        # 24-hour hydration & TEWL barrier meters
│   ├── featured-products.liquid     # Dynamic product collection grid
│   ├── skin-quiz.liquid             # 3-step interactive skin diagnostic
│   ├── reviews-section.liquid       # Verified clinical trial reviews
│   ├── faq-accordion.liquid         # Clinical FAQ expandable accordion
│   ├── newsletter.liquid            # VIP Clinical Care Circle with promo discount
│   ├── footer.liquid                # Certification tags, links & contact
│   ├── main-product.liquid          # Single product page template
│   ├── main-collection.liquid       # Collection listing page template
│   ├── main-page.liquid             # Standard page template
│   └── main-404.liquid              # 404 error page template
├── snippets/
│   ├── product-card.liquid          # Reusable product card
│   ├── cart-drawer.liquid           # Slide-over cart with free shipping meter
│   └── clinical-modal.liquid        # Clinical data trial popup modal
└── templates/
    ├── index.json                   # Homepage JSON structure
    ├── product.json                 # Product page JSON template
    ├── collection.json              # Collection page JSON template
    ├── page.json                    # Page JSON template
    ├── 404.json                     # 404 JSON template
    └── cart.json                    # Cart JSON template
```
