# Ideal Store

## Overview
Ideal Store is a fully responsive e-commerce website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. The platform allows users to browse products, add items to the cart, leave reviews, and securely checkout. Authentication is handled using **Clerk Auth** for seamless user login and signup.

## Features
### Pages:
- **Home** – Showcases featured products and latest offers.
- **About** – Provides information about the store.
- **Shop** – Displays all available products.
- **Pricing** – Shows pricing details for products.
- **Product Page** – Includes product details, reviews, and add-to-cart functionality.
- **Blog** – Features articles related to shopping and product usage.
- **Dynamic Pages** – Handles product details dynamically.

### Functionality:
- **Add to Cart** – Users can add/remove products to/from the cart.
- **Product Reviews** – Users can submit and view reviews for products.
- **Wishlist** – Users can save favorite products to their wishlist.
- **Checkout Page** – Secure checkout process for completing purchases.
- **Search Bar** – Allows users to search for products efficiently.
- **Filter System** – Users can filter products based on categories, price, and rating.
- **Swiper Integration** – Provides a smooth product carousel for better UI/UX.
- **Fully Responsive** – Works seamlessly across all screen sizes.

### Authentication & User Management:
- **Login & Signup** – User authentication using **Clerk Auth**.
- **User Profile** – Users can manage their account information.

## Tech Stack
- **Next.js 15** – Framework for server-side rendering and static site generation.
- **TypeScript** – Enhances code quality and maintainability.
- **Tailwind CSS** – Provides a highly customizable styling system.
- **Clerk Auth** – Handles user authentication.
- **Sanity.io** – Backend for managing dynamic content.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Tabinaajaz/hackathon3/tree/main
   cd ideal-store
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add required environment variables:
   ```sh
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment
To deploy on **Vercel**, run:
```sh
vercel
```
Or push changes to GitHub, and Vercel will automatically deploy the latest version.

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit changes and push to your branch.
4. Open a pull request for review.

## License
This project is licensed under the MIT License.

