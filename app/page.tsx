'use client';

import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      redirect('/profile');
    }
  }, [user]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <h1 className="text-4xl font-bold mb-4">
          Next.js + Auth0 Demo
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl">
          This demo shows how to integrate Auth0 authentication with Next.js.
          Log in to manage your profile and settings.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/api/auth/login"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-10"
          >
            Login to Access Your Profile →
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://auth0.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Auth0 Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js Docs
        </a>
      </footer>
    </div>
  );
}
