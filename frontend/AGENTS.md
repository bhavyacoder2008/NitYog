# NitYog — AI Development Context

## 1. Project Overview

NitYog is a simple toy catalogue web application for parents who want to browse toys for their children.

This is **not a full e-commerce application**.

There is no cart, checkout, online payment, user authentication, or order management in v1.

The main purpose of the website is:

1. Let users browse toys.
2. Let users search for products.
3. Let users browse products by category.
4. Let users view detailed information about a product.
5. Let interested users contact NitYog directly through WhatsApp.

The website should feel simple, warm, trustworthy, playful, and modern.

---

## 2. Target Audience

Primary audience:

- Parents looking for toys for their children.

The visual design should therefore balance:

- trust and clarity for parents
- warmth and playfulness associated with children and toys

Avoid making the website look excessively childish.

A useful mental model is:

**70% clean and trustworthy + 30% playful and cute.**

---

## 3. Brand Personality

NitYog should feel:

- Warm
- Playful
- Friendly
- Trustworthy
- Modern
- Simple

Avoid:

- corporate-looking interfaces
- excessive animations
- neon colors
- cluttered layouts
- overly childish UI
- excessive emojis
- dark or aggressive visual styles

---

## 4. Brand Colors

### Main Background

```text
#E8DBAE
```

This is the primary warm creamy background color.

### Primary Text

```text
#000000
```

Use black as the main text color unless a specific component requires another approved brand color.

### Supporting Colors

The brand also uses:

- Brown
- Dark Orange

Use the exact approved shades from the project brand-kit files.

Do not introduce random colors without a clear reason.

Prefer using shared design tokens or CSS variables instead of hardcoding color values repeatedly.

Example:

```css
:root {
  --color-background: #e8dbae;
  --color-text: #000000;
  --color-brown: <approved-brown>;
  --color-orange: <approved-dark-orange>;
}
```

---

## 5. Typography

The heading and body fonts have already been selected.

Read the typography documentation inside:

```text
/docs/brand-kit/
```

before implementing visual components.

Do not introduce additional fonts unless explicitly requested.

Maintain a clear hierarchy between:

- page headings
- section headings
- product titles
- body text
- labels
- buttons

---

## 6. Brand Assets

NitYog currently has two main visual assets:

### Primary Logo

Use the approved NitYog logo from the project assets.

### Mascot

NitYog uses a friendly full-body teddy bear mascot derived from the bear used in the logo.

For v1, these are enough.

Do not invent additional mascots, decorative illustration systems, background characters, or unnecessary graphics unless explicitly requested.

---

# 7. Sitemap

The v1 website contains the following routes.

## Main Products Page

```text
/
```

This is the primary page of the website.

There is intentionally **no separate home page**.

The page contains:

- Navbar
- Search bar
- Popular/top products
- Product cards/grid
- Footer
- Floating WhatsApp button

Categories are accessed from the navbar.

---

## Category Page

```text
/categories/:categorySlug
```

Example:

```text
/categories/cars
/categories/dolls
/categories/educational-toys
```

The category page contains products belonging only to the selected category.

Initially, the page should show popular/top products within that category.

When the user searches, the displayed content changes to matching products from that category.

The custom no-results behavior has not yet been finalized.

Do not invent a no-results UX unless explicitly asked.

---

## Product Detail Page

```text
/product/:productId
```

The page contains:

- product image or image gallery
- product name
- price
- category/type
- relevant product information
- product description
- prominent WhatsApp enquiry CTA
- shared navbar
- shared footer
- floating WhatsApp button

The WhatsApp CTA on this page should preferably be specific to the current product.

---

## About Us

```text
/about
```

Content and final layout are pending client input.

Do not invent business history, claims, numbers, awards, values, or other company information.

---

## Contact Us

```text
/contact
```

This should provide simple contact information and an obvious way to reach NitYog through WhatsApp.

---

## 404

```text
*
```

A custom 404 page will exist.

Its detailed design may be finalized later.

---

# 8. Navbar Behaviour

The navbar should provide access to:

- Categories
- Contact Us
- About Us

The NitYog logo should be visible in the navbar.

## Categories

Categories should open through a dropdown or menu from the navbar.

Desktop behavior may support hover and click.

Do **not** depend only on hover because mobile devices do not have hover.

Mobile behavior must support tapping the Categories control.

Selecting a category should navigate to:

```text
/categories/:categorySlug
```

Do not filter the main products page when a category is selected.

Category selection navigates to a dedicated category page.

---

# 9. WhatsApp Behaviour

Every page should contain a floating:

**Ask Us on WhatsApp**

button.

It should open the business WhatsApp conversation directly.

Keep the WhatsApp number configurable rather than scattering it throughout components.

Prefer something such as:

```text
VITE_WHATSAPP_NUMBER
```

For product-specific enquiry buttons, generate a useful prefilled message when practical.

Example intent:

```text
Hi, I'm interested in <product-name> on NitYog.
```

Keep WhatsApp URL generation in a reusable utility instead of duplicating string-building logic.

---

# 10. Architecture Principles

The project should favor simple, maintainable React architecture.

Do not over-engineer a small catalogue application.

## Pages

Pages should primarily compose components and coordinate page-level behavior.

Example:

```text
src/pages/
├── ProductsPage.jsx
├── CategoryPage.jsx
├── ProductDetailPage.jsx
├── AboutPage.jsx
├── ContactPage.jsx
└── NotFoundPage.jsx
```

## Shared Layout Components

```text
src/components/layout/
├── Navbar.jsx
├── Footer.jsx
└── WhatsAppFloatingButton.jsx
```

## Product Components

Possible structure:

```text
src/components/product/
├── ProductCard.jsx
├── ProductGrid.jsx
├── ProductGallery.jsx
└── ProductInfo.jsx
```

## Reusable UI

```text
src/components/ui/
├── SearchBar.jsx
├── Button.jsx
├── Dropdown.jsx
└── Loader.jsx
```

Create components based on actual reuse or meaningful responsibility.

Avoid splitting every few lines of JSX into its own component.

---

# 11. Data Separation

Do not tightly couple product data with presentation components.

Avoid large hardcoded product arrays directly inside page components.

For mock/local data, use something like:

```text
src/data/products.js
```

When API integration exists, isolate it through a service layer such as:

```text
src/services/productService.js
```

Preferred conceptual flow:

```text
Page / Component
       ↓
Service / Data layer
       ↓
API or local data source
```

---

# 12. React Best Practices

Prefer simple React patterns.

### State

Use state only for values that genuinely change and affect rendering.

Do not store easily derived values in state unnecessarily.

### useEffect

Do not use `useEffect` by default.

Use it only when synchronizing React with an external system or when an actual side effect is required.

Do not use effects for values that can be computed during render.

### Props

Keep component APIs small and clear.

Avoid massive prop lists when a better component boundary exists.

### Hooks

Create custom hooks only when logic is genuinely reusable or when extracting it meaningfully improves readability.

Do not create hooks merely for abstraction.

### Memoization

Do not add:

- `useMemo`
- `useCallback`
- `React.memo`

without a justified performance or referential-stability reason.

Do not perform premature optimization.

### Lists

Use stable identifiers for React keys.

Avoid array indexes when products have proper IDs.

---

# 13. UI Development Approach

The high-fidelity UI is being created directly during development rather than fully designing every screen in Figma beforehand.

Wireframes already define the broad structure.

Therefore:

1. Follow the wireframe.
2. Apply the NitYog brand kit.
3. Implement one component or feature at a time.
4. Review it visually in the browser.
5. Refine spacing, hierarchy, responsive behavior, and interaction.
6. Then move to the next component.

Do not redesign the information architecture without reason.

---

# 14. Styling Principles

Use the existing styling approach chosen for the project.

Regardless of CSS solution:

- reuse design tokens
- avoid duplicated magic values
- maintain consistent spacing
- use consistent border radii
- keep shadows subtle
- maintain sufficient contrast
- preserve the creamy/warm NitYog visual identity

The interface should feel soft and friendly without turning every element into a bubble.

Whitespace is encouraged.

---

# 15. Responsive Design

All components should be responsive by default.

At minimum consider:

- desktop
- tablet
- mobile

Desktop layouts may use multiple columns.

Mobile layouts should stack content cleanly.

Important interactions must remain usable without hover.

Do not treat mobile responsiveness as a final cleanup step.

Build it alongside the component.

---

# 16. Accessibility

Use semantic HTML whenever practical.

Examples:

- actual `<button>` for actions
- actual links for navigation
- proper labels for search/input fields
- meaningful `alt` text for product images
- keyboard-accessible dropdowns
- visible focus states

Do not make clickable `<div>` elements when a semantic element fits.

Interactive elements should remain understandable without relying entirely on color.

---

# 17. Product Cards

Product cards should remain simple and easy to scan.

They may display information such as:

- product image
- product name
- price
- relevant short metadata

Clicking a card should open the corresponding product detail page.

Avoid overloading cards with full descriptions or unnecessary actions.

---

# 18. Search

The main products page contains product search.

Category pages also contain search scoped to the current category.

Keep search behavior predictable.

Do not introduce complex fuzzy-search libraries unless the product volume or requirements justify them.

The custom no-results behavior will be provided later.

---

# 19. Routing

Use React Router or the routing solution already configured in the project.

Expected routes:

```text
/
 /categories/:categorySlug
 /product/:productId
 /about
 /contact
 *
```

Avoid unnecessarily hardcoded navigation paths scattered throughout the application.

Prefer centralized route helpers/constants if repetition becomes meaningful.

---

# 20. Environment Configuration

Do not commit secrets or environment-specific values.

Use:

```text
.env
```

for local values and keep:

```text
.env.example
```

in version control.

Possible values include:

```text
VITE_API_URL=
VITE_WHATSAPP_NUMBER=
```

Never commit actual private credentials.

---

# 21. Code Quality

When generating code:

- favor readability over cleverness
- use meaningful variable names
- keep functions focused
- avoid unnecessary abstraction
- avoid giant components
- avoid unnecessary dependencies
- remove dead code
- avoid unexplained magic constants
- handle realistic missing-data cases
- keep imports organized

Before introducing a library, first consider whether the requirement can reasonably be implemented with the existing stack.

---

# 22. AI Coding Behaviour

When making a meaningful architectural choice, briefly explain why it was chosen.

If there are multiple reasonable approaches, prefer the simplest one suitable for NitYog.

Do not silently introduce advanced patterns just because they are considered fashionable.

If a piece of code uses a React concept that may not be obvious, explain its role.

The developer using this repository knows React and wants to improve through the implementation, so code quality and conceptual clarity matter alongside speed.

Do not treat this as blind vibe coding.

---

# 23. Do Not Invent Requirements

When information is missing, do not fabricate important product/business requirements.

Examples:

- About Us content
- product policies
- delivery promises
- discounts
- warranties
- business history
- return policies
- product safety claims
- customer reviews
- no-result behavior

Use placeholder content only when clearly marked as placeholder.

---

# 24. Current Development Order

Prefer implementing the application approximately in this sequence:

```text
1. Project setup
2. Routing
3. Global brand tokens/styles
4. Shared layout
5. Navbar
6. Categories dropdown
7. Floating WhatsApp button
8. Products page
9. Search
10. Product card/grid
11. Category page
12. Product detail page
13. Contact page
14. About page once content is available
15. 404 page
16. Responsive/accessibility refinement
17. Final testing
```

This order may change if implementation dependencies justify it.

---

# 25. Core Principle

NitYog is intentionally simple.

The goal is not to demonstrate every possible React pattern.

The goal is to build a polished, maintainable, fast toy catalogue that helps parents:

**find a toy → understand the product → contact NitYog on WhatsApp.**

Whenever deciding between a complex solution and a simple solution that satisfies this goal, prefer the simple solution.