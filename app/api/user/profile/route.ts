import { getSession } from '@auth0/nextjs-auth0';
import { ManagementClient } from 'auth0';
import { NextResponse } from 'next/server';
import { UserProfile, Auth0Metadata } from '@/types/auth';
import { NextRequest } from 'next/server';

type RawUserMetadata = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  bio?: string;
  preferences?: {
    newsletter?: boolean;
    notifications?: boolean;
  };
};

const auth0 = new ManagementClient({
  domain: process.env.AUTH0_ISSUER_BASE_URL!.replace('https://', ''),
  clientId: process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
});

export async function GET(request: NextRequest) {
  const response = new NextResponse();
  
  try {
    const session = await getSession(request, response);
    if (!session?.user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Fetch user data directly from Auth0 Management API
    const user = await auth0.users.get({ id: session.user.sub! });
    const rawUserData = user.data as unknown as { 
      user_metadata?: RawUserMetadata; 
      app_metadata?: { role?: string } 
    };

    // Convert the raw metadata to our expected types
    const userMetadata: UserProfile = {
      firstName: rawUserData.user_metadata?.firstName || '',
      lastName: rawUserData.user_metadata?.lastName || '',
      phoneNumber: rawUserData.user_metadata?.phoneNumber || '',
      dateOfBirth: rawUserData.user_metadata?.dateOfBirth || '',
      address: {
        street: rawUserData.user_metadata?.address?.street || '',
        city: rawUserData.user_metadata?.address?.city || '',
        state: rawUserData.user_metadata?.address?.state || '',
        zipCode: rawUserData.user_metadata?.address?.zipCode || '',
        country: rawUserData.user_metadata?.address?.country || '',
      },
      bio: rawUserData.user_metadata?.bio || '',
      preferences: {
        newsletter: rawUserData.user_metadata?.preferences?.newsletter || false,
        notifications: rawUserData.user_metadata?.preferences?.notifications || true,
      },
    };

    return NextResponse.json({
      user_metadata: userMetadata,
      app_metadata: { role: rawUserData.app_metadata?.role || 'regular' }
    } as Auth0Metadata);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const response = new NextResponse();
  
  try {
    const session = await getSession(request, response);
    if (!session?.user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const data: UserProfile = await request.json();
    
    // Update user metadata in Auth0
    await auth0.users.update({ id: session.user.sub! }, {
      user_metadata: data
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
} 
