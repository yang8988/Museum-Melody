# Museum Melody

## Overview

Museum Melody is a web application that connects art with music, allowing users to explore artworks paired with corresponding musical pieces. The application features a filterable gallery of artworks with metadata including mood, artist, era, and style, each linked to YouTube music videos. The project uses a modern full-stack architecture with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Static data in `client/src/data/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **HTTP Server**: Node.js native HTTP server
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

The backend follows a modular structure:
- `server/index.ts` - Main server entry point with middleware setup
- `server/routes.ts` - API route registration
- `server/storage.ts` - Data access layer with interface pattern
- `server/vite.ts` - Vite dev server integration
- `server/static.ts` - Static file serving for production

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Validation**: Zod with drizzle-zod integration
- **Current Storage**: In-memory storage (MemStorage class) with interface for database migration

The storage layer uses an interface pattern (`IStorage`) allowing easy swapping between in-memory storage and database implementations.

### Shared Code
- Schema definitions and types in `shared/` directory
- Path aliases configured for imports (`@shared/*`)

### Build Pipeline
- Development: Vite dev server with HMR proxied through Express
- Production: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations in `./migrations` directory
- Push command: `npm run db:push`

### Third-Party Services
- **YouTube**: Embedded videos for artwork music pairings (iframe embeds)
- **Google Fonts**: DM Sans, Architects Daughter, Fira Code, Geist Mono

### Key NPM Dependencies
- **UI**: Full shadcn/ui component suite (Radix primitives)
- **Data Fetching**: @tanstack/react-query
- **Forms**: react-hook-form with @hookform/resolvers
- **Date Handling**: date-fns
- **Styling**: tailwindcss, class-variance-authority, clsx

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development banner

Note: A `main.py` file with Streamlit code exists but appears to be a separate/legacy component not integrated with the main application.