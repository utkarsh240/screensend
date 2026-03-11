# ScreenSend

A modern video sharing platform built with Next.js 15, featuring video upload, authentication, and a clean user interface.

## Features

- **Video Upload**: Upload videos with custom titles, descriptions, and thumbnails
- **Public/Private Visibility**: Choose who can view your videos
- **User Authentication**: Secure authentication system powered by better-auth
- **Video Library**: Browse and discover videos from all users
- **Responsive Design**: Beautiful, modern UI built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: better-auth
- **Database**: PostgreSQL with Drizzle ORM
- **Database Service**: Xata.io
- **Video Storage**: Bunny CDN
- **Deployment**: Ready for Vercel or similar platforms

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (local or hosted)
- Xata.io account (for database)
- Bunny CDN account (for video storage)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd screensend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local`:
- `DATABASE_URL` - PostgreSQL connection string
- `XATA_API_KEY` - Your Xata.io API key
- `BETTER_AUTH_SECRET` - Secret for authentication
- `BUNNY_STORAGE_ZONE` - Bunny storage zone name
- `BUNNY_STORAGE_API_KEY` - Bunny storage API key

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   │   └── sign-in/       # Sign in page
│   ├── (root)/            # Main application pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home/video library
│   │   ├── profile/       # User profile pages
│   │   ├── upload/        # Video upload page
│   │   └── video/         # Video detail pages
│   ├── api/               # API routes
│   └── layout.tsx         # Global layout
├── components/            # React components
├── constants/             # App constants and config
├── drizzle/               # Database schema and config
├── lib/                   # Utility functions
│   ├── auth.ts           # Server-side auth
│   └── auth-client.ts    # Client-side auth
├── public/               # Static assets
└── fonts/                # Custom fonts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Schema

The project uses Drizzle ORM with PostgreSQL. The schema includes:
- Users table for authentication
- Videos table for video metadata

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `XATA_API_KEY` | Xata.io API key |
| `BETTER_AUTH_SECRET` | Authentication secret |
| `BUNNY_STORAGE_ZONE` | Bunny storage zone name |
| `BUNNY_STORAGE_API_KEY` | Bunny storage API key |
| `BUNNY_CDN_URL` | Bunny CDN URL |

## License

MIT
