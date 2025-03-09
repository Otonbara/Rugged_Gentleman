# Rugged Gentleman - E-commerce Frontend

## Project Overview
Rugged Gentleman is a modern e-commerce platform built using **Next.js** and **TypeScript**, designed to provide an intuitive and seamless shopping experience for users. The website offers a variety of clothing and accessories with a sleek and responsive UI.

## Features
- **Category-Based Product Pages**: Browse products in categories like Tops, Bottoms, Footwears, Accessories, and more.
- **Interactive UI Components**: Custom-designed components including Hero banners, Carousels, and Product Cards.
- **Shopping Cart & Checkout**: Add items to cart and proceed to checkout with ease.
- **Brand Showcases**: Display top fashion brands with high-quality SVG logos.
- **User Authentication**: Secure login page for users.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack
- **Next.js** (with TypeScript) - Framework for server-side rendering and static site generation.
- **Tailwind CSS** - Utility-first styling for responsive design.
- **Context API** - State management for cart functionality.
- **Swiper.js** - Smooth carousels for featured products.
- **PostCSS** - CSS processing and optimization.

## File Structure
```
c:/Rugged_Gentleman/frontend/
├── .gitignore                 # Git ignore file
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies
├── postcss.config.mjs          # PostCSS configuration
├── public/                     # Static assets
│   ├── Accessories/            # Accessories product images
│   ├── Bottoms/                # Bottoms product images
│   ├── Brands/                 # Brand logos (SVG)
│   ├── Footwears/              # Footwear product images
│   ├── Hoodies_Sweatshirts/     # Hoodies & Sweatshirts product images
│   ├── Tops/                   # Tops product images
│   ├── newarrivals_banner.jpg  # Banner images
│   ├── rugged_gentleman_logo.jpg # Logo
├── src/                        # Application source code
│   ├── app/                    # Main application pages
│   │   ├── Accessories/
│   │   ├── Bottoms/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Contact/
│   │   ├── Footwears/
│   │   ├── Hoodies_Sweatshirt/
│   │   ├── Login/
│   │   ├── Tops/
│   ├── components/             # Reusable UI components
│   │   ├── AccessoriesProductCard.tsx
│   │   ├── Brands.tsx
│   │   ├── Buttons.tsx
│   │   ├── Footer.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Testimonial.tsx
│   ├── context/                # Global state management
│   │   ├── CartContext.tsx
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Layout file for pages
│   ├── page.tsx                # Homepage
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
```

## Getting Started
### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rugged-gentleman.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rugged-gentleman/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
To start the development server, run:
```bash
npm run dev
```
Then open **http://localhost:3000/** in your browser.

### Building for Production
To create an optimized production build, run:
```bash
npm run build
```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes and push them.
4. Open a pull request for review.

## License
This project is licensed under the **MIT License**.

---
Made by **Otonbara Alfred Okolai**
