# Next.js + Auth0 Demo

This project demonstrates how to integrate Auth0 authentication with a Next.js application deployed on Vercel. It showcases secure user authentication and authorization features while maintaining the modern development experience that Next.js provides.

## Features

- 🔐 Secure authentication with Auth0
- ⚡ Built with Next.js
- 🚀 Deploy-ready for Vercel
- 🎨 Modern UI with [Geist](https://vercel.com/font) font optimization

## Prerequisites

_(This assumes that port 3000 is the one serving the application)_

1. Create a free [Auth0 account](https://auth0.com/signup)
2. Set up a new Auth0 application:
   - Go to the Auth0 Dashboard
   - Create a new Application
   - Choose "Regular Web Application"
   - In Settings, add the following URLs to "Allowed Callback URLs":
     ```
     http://localhost:3000/api/auth/callback
     ```
   - Add to "Allowed Logout URLs":
     ```
     http://localhost:3000
     ```
   - Add to "Allowed Web Origins":
     ```
     http://localhost:3000
     ```

## Environment Setup

To run this project, you'll need to set up your Auth0 credentials. Create a `.env.local` file with the following variables:

```env
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN'
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
```

Replace the placeholder values with your Auth0 application credentials:
- `AUTH0_SECRET`: A long, random string used to encrypt the session cookie. This ensures your user's session is secure and can't be tampered with. Generate it using: `openssl rand -hex 32`
- `YOUR_AUTH0_DOMAIN`: Your Auth0 domain (e.g., `dev-xyz123.us.auth0.com`)
- `YOUR_AUTH0_CLIENT_ID`: Your Auth0 application's Client ID
- `YOUR_AUTH0_CLIENT_SECRET`: Your Auth0 application's Client Secret

> **Note about AUTH0_SECRET**: This secret is crucial for security as it's used to:
> - Sign and encrypt the session cookies
> - Prevent unauthorized access to user sessions
> - Protect against cookie tampering and session hijacking
> Never share or commit this secret to version control.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. Click the "Login" button to test the Auth0 integration.

## Testing the Authentication Flow

1. Visit the homepage at `http://localhost:3000`
2. Click the "Login" button
3. You'll be redirected to Auth0's login page
4. After successful authentication, you'll be redirected back to the application
5. You can now access the protected page
6. Try the logout button to end your session

## Learn More

To learn more about the technologies used in this project:

- [Auth0 Next.js SDK](https://auth0.com/docs/quickstart/webapp/nextjs) - Learn about Auth0 integration with Next.js
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Auth0 Documentation](https://auth0.com/docs) - Explore Auth0's authentication features

## Deployment

This project is optimized for deployment on Vercel. Simply connect your repository to Vercel and deploy with a click.

Make sure to configure your environment variables in your Vercel project settings.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)