# Overview

This is a modern full-stack web application featuring a personal portfolio website for a Product Manager. The project is built with a React frontend using Vite as the build tool, an Express.js backend server, and is configured for PostgreSQL database integration using Drizzle ORM. The application showcases professional experience, skills, and personal projects through an interactive, responsive design with smooth animations and modern UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Animations**: Framer Motion for smooth page transitions and scroll-based animations
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints and middleware
- **Development Setup**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Error Handling**: Centralized error middleware with structured error responses
- **Request Logging**: Custom middleware for API request/response logging

## Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **Schema Management**: Code-first approach with migration support
- **Validation**: Drizzle-Zod integration for runtime schema validation

## Component Architecture
- **Design System**: Modular component library based on shadcn/ui with consistent theming
- **Layout**: Section-based design with hero, about, experience, skills, and contact sections
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Custom Components**: Specialized components for custom cursor, navigation, and interactive sections
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation support

## Development Tools
- **TypeScript**: Strict type checking across frontend, backend, and shared code
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Vite HMR for frontend and tsx for backend development
- **Build Process**: Separate build targets for client (Vite) and server (esbuild)

# External Dependencies

## UI and Design
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Consistent icon library with React components

## Backend Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Express Session Store**: PostgreSQL-backed session persistence

## Development and Build
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Static type checking for improved developer experience
- **ESBuild**: Fast JavaScript bundler for production server builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## Validation and Forms
- **Zod**: TypeScript-first schema validation library
- **React Hook Form**: Performant forms with easy validation
- **Drizzle-Zod**: Automatic Zod schema generation from Drizzle schemas

## Date and Utilities
- **Date-fns**: Modern JavaScript date utility library
- **clsx/cn**: Utility for constructing className strings conditionally
- **Nanoid**: URL-safe unique string ID generator