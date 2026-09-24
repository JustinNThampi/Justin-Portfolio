# NEXUS ERP — Modern Enterprise Resource Planning & Admin Dashboard Template

**NEXUS ERP** is a modern, responsive, and dependency-free HTML5/CSS3/JavaScript template designed for modern business management applications. It comes pre-packaged with 11 complete operational modules, a unified dark/light theme engine, interactive CRUD modals, data filters, responsive tables, and full authentication pages.

---

## 🌟 Key Highlights

- **⚡ Zero Build Tools Required**: Pure Vanilla HTML5, modern CSS3 (Custom Properties, Flexbox, CSS Grid), and ES6+ JavaScript. No `npm install`, Webpack, or Vite required — double click and run.
- **🌓 Dynamic Dark / Light Theme Engine**: Built-in theme switcher with instant CSS variable updates and persistent `localStorage` memory across all views.
- **📱 Fully Responsive Design**: Hand-crafted breakpoints for Desktop (1200px+), Tablet (900px, 700px), and Mobile devices (520px and below) with an off-canvas navigation drawer.
- **💼 11 Ready-to-Use Business Modules**: Comprehensive dashboard, CRM, ERP, finance, inventory, HR, and reporting interfaces.
- **🔐 Complete Authentication Suite**: Sign In, Workspace Registration, Password Recovery, and Custom 404 Error page included.
- **🛠️ Interactive Client Engine**:
  - Live table search & multi-column dropdown filtering
  - Global `⌘ K` keyboard search bar
  - Context-aware CRUD modals for adding customers, products, orders, and records
  - Floating Toast notification engine
  - Contextual row action dropdowns (View, Edit, Duplicate, Delete)
  - Interactive password visibility toggles and bulk checkbox selections

---

## 📂 Project Directory Structure

```
nexus-erp/
├── index.html                   # Central Executive Dashboard
├── README.md                    # Template Documentation (this file)
├── assets/                      # Media assets, icons & custom brand logos
├── css/
│   └── style.css                # Unified Design System & Dark/Light Themes (2,600+ lines)
├── js/
│   └── app.js                   # Client-side Interactivity, Modals, Theme & Filter Engine
└── pages/
    ├── sales.html               # Sales Orders, Transactions & Revenue Tracking
    ├── customers.html           # Customer CRM Directory & Lifetime Spend
    ├── inventory.html           # Stock Levels, Warehouses & Reorder Thresholds
    ├── products.html            # Product Catalog, Pricing & Margin Analysis
    ├── purchasing.html          # Purchase Orders (PO) & Procurement
    ├── suppliers.html           # Vendor Directory & Performance Scorecards
    ├── employees.html           # Human Resources, Staff Roster & Roles
    ├── finance.html             # Accounts Receivable/Payable, Invoices & Expenses
    ├── reports.html             # Business Intelligence, Export & Scheduling Center
    ├── settings.html            # System Configuration, Security & API Integrations
    ├── login.html               # Authentication: Sign In with Demo Credentials
    ├── register.html            # Authentication: Workspace Registration
    ├── forgot-password.html     # Authentication: Password Recovery
    └── 404.html                 # Error Page: Not Found
```

---

## 🚀 Quick Start Guide

### Option 1: Direct File Opening
Double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari, Arc).

### Option 2: Local Web Server (Recommended)
Serve the directory with any local static HTTP server for optimal relative path handling:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code
Use the "Live Server" extension on index.html
```

Then visit `http://localhost:8000` in your browser.

---

## 🎨 Design System & Customization

The template is powered by CSS custom properties in [css/style.css](file:///c:/Users/Justin%20N%20Thampi/Documents/nexus-erp/css/style.css). You can re-theme the entire system by adjusting the variables at the top of the file:

```css
:root {
  /* Brand Accent Colors */
  --primary: #2563eb;          /* Main primary brand color */
  --primary-dark: #1d4ed8;     /* Button hover / active */
  --primary-light: #eff6ff;    /* Badge & card tint */

  /* Semantic Alerts */
  --success: #16a34a;          /* Paid, Completed, In Stock */
  --warning: #d97706;          /* Pending, Low Stock, Warning */
  --danger: #dc2626;           /* Overdue, Cancelled, Out of Stock */

  /* Neutral Surface Colors (Light Mode) */
  --background: #f5f7fb;       /* Workspace backdrop */
  --surface: #ffffff;          /* Cards & tables background */
  --border: #e5e7eb;           /* Element dividers */
  --text-primary: #111827;     /* Headings & bold labels */
  --text-secondary: #6b7280;   /* Paragraphs & subtitles */

  /* Layout Dimensions */
  --sidebar-width: 260px;
  --topbar-height: 72px;
}
```

### Dark Mode
Dark mode variables are encapsulated under `[data-theme="dark"]`. The template handles theme toggling dynamically and remembers user preferences via `localStorage.getItem("nexus_theme")`.

---

## 🔌 Connecting to a Backend API

The template is architected to make REST API or GraphQL integration simple:

### 1. Data Fetching Example
To populate any data table from a real backend, replace mock HTML rows in `app.js`:

```javascript
async function loadSalesOrders() {
  try {
    const response = await fetch('/api/v1/orders');
    const orders = await response.json();
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = orders.map(order => `
      <tr>
        <td><strong>#${order.id}</strong></td>
        <td><strong>${order.customerName}</strong></td>
        <td>${order.date}</td>
        <td>AED ${order.total.toFixed(2)}</td>
        <td><span class="status-badge ${order.status.toLowerCase()}">${order.status}</span></td>
        <td><button class="table-action">⋯</button></td>
      </tr>
    `).join('');
  } catch (error) {
    showToast('Failed to load', error.message, 'danger');
  }
}
```

### 2. Form Submission Handling
In `js/app.js`, the `openContextModal` function receives user inputs and emits feedback. Simply add a `fetch('/api/v1/resource', { method: 'POST', body: ... })` call inside the form submit listener.

---

## 📋 Browser Compatibility

- Google Chrome (latest)
- Microsoft Edge (latest)
- Mozilla Firefox (latest)
- Apple Safari (iOS & macOS latest)
- Arc Browser

---

## 📄 License & Attribution

Designed and engineered for enterprise web applications. Clean, scalable, and built without external third-party dependencies for maximum security and deployment speed.
