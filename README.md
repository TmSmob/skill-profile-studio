# Soft Skill Strength Analyzer

A simple web application that helps you assess and visualize your soft skills. Rate yourself on six key skills using interactive sliders, and get instant feedback on your strengths, areas for growth, and overall profile.

## Features

- **Interactive Skill Rating**: Use sliders to rate yourself from 1-10 on six soft skills:
  - Communication
  - Empathy
  - Leadership
  - Conflict Resolution
  - Adaptability
  - Time Management

- **Real-time Analysis**: Get instant feedback including:
  - Overall average score
  - Top 2 strengths
  - Top 2 areas for growth
  - Personalized profile label (Collaborative Communicator, Decisive Leader, or Balanced Growth Profile)

- **Clean UI**: Modern, responsive design built with shadcn/ui components

## Getting Started

### Prerequisites

You'll need Node.js and npm installed. If you don't have them, install Node.js from [nodejs.org](https://nodejs.org/) or use [nvm](https://github.com/nvm-sh/nvm).

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skill-profile-studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

To create a production build:
```bash
npm run build
```

The output will be in the `dist` folder. You can preview it with:
```bash
npm run preview
```

## Project Structure

The codebase follows a clean, scalable architecture:

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx       # Main layout with header and footer
│   ├── SkillList.tsx    # Renders the list of skill sliders
│   ├── SkillSlider.tsx  # Individual skill slider component
│   └── SummaryPanel.tsx # Displays analysis results
├── hooks/
│   └── useSkillProfile.ts  # Custom hook for skill state management
├── data/
│   └── skills.tsx       # Skill definitions and data
└── pages/
    └── Index.tsx        # Main page component
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Lucide React** - Icons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## How It Works

1. Each skill has a default value that you can adjust using the slider
2. As you change values, the summary panel updates in real-time
3. The app calculates:
   - Average score across all skills
   - Top 2 highest-rated skills (strengths)
   - Bottom 2 lowest-rated skills (areas for growth)
   - Profile label based on specific skill combinations

4. Click "Reset to Default" to restore all skills to their initial values

## Customization

To add or modify skills, edit `src/data/skills.tsx`. Each skill needs:
- `id`: Unique identifier
- `label`: Display name
- `icon`: React component from lucide-react
- `defaultValue`: Initial rating (1-10)

The profile label logic can be customized in `src/hooks/useSkillProfile.ts`.

## Notes

This tool is for self-reflection only and not a formal assessment. The results are based on your own ratings and should be used as a starting point for personal development.

## License

This project is private and not licensed for public use.
