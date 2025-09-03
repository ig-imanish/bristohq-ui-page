# BristoHQ UI Landing Page

> This project is the **frontend showcase and demo site** for the [BristoHQ UI component library](https://www.npmjs.com/package/@bristohq/ui). It is built with React, TypeScript, and Vite, and demonstrates how to use and style the components from the BristoHQ UI library in a real-world application.

---

## Features

- ⚡️ Built with [Vite](https://vitejs.dev/) for instant dev startup
- ⚛️ Powered by [React](https://react.dev/) + TypeScript
- 🎨 Uses [@bristohq/ui](https://www.npmjs.com/package/@bristohq/ui) for beautiful, reusable components
- 💡 Responsive design with mobile-first navigation
- 🧩 Modular, clean code structure
- 🌙 Dark mode ready

---

## Getting Started

### 1. Create a new Vite + React + TypeScript project

```bash
npx create-vite@latest my-app
cd my-app
```

### 2. Install BristoHQ UI

```bash
npm install @bristohq/ui
```

### 3. Import BristoHQ UI CSS

Add the following line to your `src/index.css` (or `src/main.css`):

```css
@import "@bristohq/ui/dist/style.css";
```

### 4. Start the development server

```bash
npm run dev
```

Your app is now ready to use BristoHQ UI components!

---

## Usage

You can now use BristoHQ UI components in your project:

```tsx
import { Button } from "@bristohq/ui";

export default function Example() {
  return <Button variant="primary">Click me</Button>;
}
```

---

## License

[MIT](LICENSE)

---

## Credits

- [BristoHQ UI](https://github.com/bristohq/ui)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
