# Next.js + Auth0 Demo

This project demonstrates how to integrate Auth0 authentication with a Next.js application deployed on Vercel. It showcases secure user authentication and authorization features while maintaining the modern development experience that Next.js provides.

https://github.com/user-attachments/assets/b90e06fb-b272-46e5-98b4-97b0a2c577fc

## Features

- 🔐 Secure authentication with Auth0
- 👤 Comprehensive user profile management
- 🔑 Role-based access control using Auth0 metadata
- ⚡ Built with Next.js
- 🚀 Deploy-ready for Vercel
- 🎨 Modern UI with [Geist](https://vercel.com/font) font optimization
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling

## User Profile & Metadata Features

This demo showcases how to work with Auth0's metadata features:

### User Metadata (`user_metadata`)
- Editable user profile information including:
  - Personal details (name, phone, date of birth)
  - Address information
  - Bio
  - User preferences (newsletter, notifications)
- Persisted securely in Auth0
- User-editable through the profile interface

### App Metadata (`app_metadata`)
- Role-based access control (regular/admin roles)
- Managed by administrators only
- Not editable through the user interface
- Controls access to admin-only features

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
3. Set up Management API permissions:
   - In your Auth0 Dashboard, go to "Applications" > "APIs"
   - Find and click on "Auth0 Management API"
   - Go to the "Machine to Machine Applications" tab
   - Find your application in the list and authorize it
   - When authorizing, grant these specific permissions:
     - `read:users`
     - `update:users`
     - `update:users_app_metadata`
   - These permissions are required for the profile management features to work

   > **Why Machine to Machine Permissions?**  
   > While Auth0's regular authentication flow handles user login/logout, it doesn't grant access to modify user data.
   > The Management API is a separate service that requires explicit M2M (Machine to Machine) permissions to:
   > - Read user metadata (profile data stored in Auth0)
   > - Update user metadata (saving profile changes)
   > - Manage user roles and permissions
   > 
   > This separation of concerns is a security feature - it ensures that applications can only perform the specific
   > user management actions they've been explicitly granted permission to do.

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
4. After successful authentication, you'll be redirected to your profile page
5. Edit your profile information and save changes
6. Try the logout button to end your session

## Setting Up Admin Access

To grant admin access to a user:

1. Log into your Auth0 Dashboard
2. Go to User Management > Users
3. Select the user you want to make an admin
4. Go to the "Metadata" tab
5. Add the following to their `app_metadata`:
   ```json
   {
     "role": "admin"
   }
   ```
6. Save the changes
7. The user will now see admin-specific messages in their profile

## Learn More

To learn more about the technologies used in this project:

- [Auth0 Next.js SDK](https://auth0.com/docs/quickstart/webapp/nextjs) - Learn about Auth0 integration with Next.js
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Auth0 Documentation](https://auth0.com/docs) - Explore Auth0's authentication features
- [Auth0 User Metadata](https://auth0.com/docs/users/metadata) - Learn about user and app metadata

