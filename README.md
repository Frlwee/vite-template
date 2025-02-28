# 🚀 Custom Vite React Template

A lightweight and optimized Vite template for React projects, designed to enhance development speed and maintainability. This template includes essential configurations, an improved file structure, and useful dependencies to streamline your workflow.

## 📦 Features

- ⚡ **Powered by Vite** - Super fast development and build process.
- 🎨 **Optimized Project Structure** - Clean and scalable architecture.
- 🛠️ **Preconfigured Dependencies** - Includes essential tools like ESLint, Prettier, and React Router.
- 💨 **TailwindCSS Support** *(optional)* - Easily customizable utility-first styling.
- 🏗 **Ready for Deployment** - Optimized build settings for production.

## 🚀 Getting Started

### 1️⃣ Create a New Project

Using Bun:
```sh
bun create Frlwee/vite-template my-app
```

Using Git:
```sh
git clone https://github.com/Frlwee/vite-template.git my-app
cd vite-template
rm -rf .git  # Remove existing Git history
```

### 2️⃣ Install Dependencies

```sh
cd my-app
bun i  # or npm i / yarn
```

### 3️⃣ Start Development Server

```sh
bun dev  # or npm run dev / yarn dev
```

Your app will be available at `http://localhost:5173/`.

## 🏗 Building for Production

To generate an optimized production build:
```sh
bun run build  # or npm run build / yarn build
```

## 📂 Project Structure
```
vite-template/
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # Reusable UI components
│   ├── config/        # Configuration files
│   ├── pages/         # Page components
│   ├── sass/          # SCSS styles
│   ├── types/         # Global TypeScript types
│   ├── main.tsx       # Entry point
│   └── vite-env.d.ts  # Vite environment types
│
├── public/            # Static files
├── .eslintrc          # ESLint config
├── .prettierrc        # Prettier config
├── package.json       # Project metadata
├── tsconfig.app.json  # TypeScript app-specific configuration
└── vite.config.ts     # Vite configuration
```

## 🤝 Contributing

Feel free to submit issues or pull requests if you have improvements or suggestions

---

Made with ❤️ by [Frlwee](https://github.com/Frlwee)
