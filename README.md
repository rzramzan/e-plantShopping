# Paradise Nursery Shopping Application

## Project name
Paradise Nursery Shopping Application

## Course
IBM iOS and Android Mobile App Developer — Developing Front-End Apps with React

## Description
A React shopping-cart application for an online plant shop. Users can browse
houseplants by category, add products to the cart, change quantities, remove
items, view totals, continue shopping, and trigger a checkout placeholder.

## Grading-criteria coverage

### Task 1 — README.md
This README contains the project name and project details.

### Task 2 — AboutUs.jsx
`src/components/AboutUs.jsx` contains company details for Paradise Nursery.

### Task 3 — App.css
`src/App.css` contains the landing-page styling, including the background image
used by the Paradise Nursery landing page.

### Task 4 — App.jsx
`src/App.jsx` contains the landing page, company name, navigation and
"Get Started" button.

### Task 5 — CartSlice.jsx
`src/store/CartSlice.jsx` implements the Redux cart slice and the Redux store.
It contains actions for adding, increasing, decreasing, deleting and clearing
cart items.

### Task 6 — ProductList.jsx
`src/components/ProductList.jsx` provides:
- 18 unique houseplants
- 6 plants in each of 3 categories
- thumbnail/image, name and price
- Add to Cart button for every plant
- Add to Cart becomes disabled after the product is added
- cart count is updated through Redux state
- navigation bar appears through App.jsx on the Plants page
- dynamic cart item count

### Task 7 — CartItem.jsx
`src/components/CartItem.jsx` provides:
- total cart quantity
- total cost
- thumbnail, name and unit price for each item
- increase/decrease quantity
- delete item
- Checkout button showing "Coming Soon"
- Continue Shopping link to the product listing

## Categories
1. Air Purifying — 6 plants
2. Aromatic — 6 plants
3. Medicinal — 6 plants

## Tech stack
- React
- Vite
- React Router
- Redux Toolkit
- React Redux
- CSS

## Local setup

Requirements: Node.js 20.19+ is recommended for the current Vite release.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## GitHub upload

Create an empty GitHub repository named:

`paradise-nursery-shopping-application`

Then from this project folder:

```bash
git init
git add .
git commit -m "Complete Paradise Nursery shopping application"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Coursera URL mapping after upload

Task 1:
`https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application/blob/main/README.md`

Task 2:
`https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application/blob/main/src/components/AboutUs.jsx`

Task 3:
`https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application/blob/main/src/App.css`

Task 4:
`https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application/blob/main/src/App.jsx`

Task 5:
`https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application/blob/main/src/store/CartSlice.jsx`

Task 6:
`https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application/blob/main/src/components/ProductList.jsx`

Task 7:
`https://github.com/YOUR-USERNAME/paradise-nursery-shopping-application/blob/main/src/components/CartItem.jsx`

## Important
This is a reference implementation built from the grading criteria supplied by
the learner. Compare it with the exact starter repository/rubric in the enrolled
Coursera environment before submitting.
