
# Adhkar Muslim App

A beautiful and responsive Islamic Adhkar (remembrance) application built with React, TypeScript, and Tailwind CSS.

## Features

- **Morning Adhkar** (أذكار الصباح)
- **Evening Adhkar** (أذكار المساء)
- **After Prayer Adhkar** (أذكار بعد الصلاة)
- **Before Sleep Adhkar** (أذكار النوم)
- **Entering Home Adhkar** (دخول المنزل)
- **Exiting Home Adhkar** (الخروج من المنزل)

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Shadcn/UI Components
- Lucide React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/oooopppe4/adhkar-app.git
cd adhkar-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shadcn UI components
│   ├── AdhkarViewer.tsx
│   ├── AdhkarCategory.tsx
│   ├── Header.tsx
│   └── NavigationBar.tsx
├── data/
│   └── adhkarData.ts # All adhkar content
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── main.tsx
```

## Features

- Responsive design that works on all devices
- Arabic text with transliteration and English translation
- Interactive counter for repeated adhkar
- Beautiful gradients and Islamic-themed design
- Navigation between different categories
- Progress tracking for each dhikr

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues.

## License

This project is open source and available under the MIT License.
