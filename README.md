# Next.js + Auth0 Demo

This project demonstrates how to integrate Auth0 authentication with a Next.js application deployed on Vercel. It showcases secure user authentication and authorization features while maintaining the modern development experience that Next.js provides.

## Features

- 🔐 Secure authentication with Auth0
- ⚡ Built with Next.js
- 🚀 Deploy-ready for Vercel
- 🎨 Modern UI with [Geist](https://vercel.com/font) font optimization

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Setup

To run this project, you'll need to set up your Auth0 credentials. Create a `.env.local` file with the following variables:

```env
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN'
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
```

## Learn More

To learn more about the technologies used in this project:

- [Auth0 Next.js SDK](https://auth0.com/docs/quickstart/webapp/nextjs) - Learn about Auth0 integration with Next.js
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Auth0 Documentation](https://auth0.com/docs) - Explore Auth0's authentication features

## Deployment

This project is optimized for deployment on Vercel. Simply connect your repository to Vercel and deploy with a click.

Make sure to configure your environment variables in your Vercel project settings.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)
