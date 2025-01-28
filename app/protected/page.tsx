'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProtectedPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    redirect('/api/auth/login');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center space-x-4 mb-6">
          {user.picture && (
            <Image
              src={user.picture}
              alt={user.name || 'User'}
              width={60}
              height={60}
              className="rounded-full"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600 dark:text-gray-300">{user.email?.replace(/(.{2})(.*)(?=@)/, (_, start, rest) => start + '*'.repeat(rest.length))}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-200">
            This is a protected page. You can only see this content because you&apos;re authenticated!
          </p>
          <Link
            href="/api/auth/logout"
            className="block w-full text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
} 
