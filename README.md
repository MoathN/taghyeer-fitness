# TAGHYEER Fitness - Frontend

A modern fitness website built with React and JavaScript, inspired by the GymMawy design. This project provides a complete fitness platform UI with workout plans, nutrition guides, trainer profiles, and membership management.

## Features

- **Modern UI Design**: Dark purple and orange color scheme with dotted background patterns
- **Responsive Layout**: Works seamlessly on mobile and desktop devices
- **User Authentication UI**: Login and registration interface
- **Workout Plans**: Browse and filter workout routines by difficulty and duration
- **Trainer Profiles**: Showcases fitness trainers with their specializations
- **Membership Management**: Subscription options with different pricing tiers
- **Shopping Section**: Browse fitness supplements and equipment

## Tech Stack

- **Framework**: React.js (JavaScript)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (modified for JavaScript)
- **Routing**: React Router v7
- **Form Handling**: React Hook Form + Zod validation
- **Notifications**: Sonner for toast notifications
- **Icons**: React Icons
- **Build Tool**: Vite

## Development

### Prerequisites

- Node.js 18 or higher
- Bun (preferred) or npm

### Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Project Structure

```
taghyeer-fitness/
├── frontend/
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── layouts/     # Layout components
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   │   ├── about/
│   │   │   ├── auth/
│   │   │   ├── contact/
│   │   │   ├── dashboard/
│   │   │   ├── home/
│   │   │   ├── memberships/
│   │   │   ├── nutrition/
│   │   │   ├── shop/
│   │   │   ├── trainers/
│   │   │   └── workout-plans/
│   │   ├── App.jsx      # Main application component
│   │   └── main.jsx     # Application entry point
│   ├── public/          # Static assets
│   └── index.html       # HTML entry point
```

## Credits

- Design inspiration from GymMawy.fit
- Images from Unsplash
- Icons from React Icons
- UI components adapted from ShadCN UI
