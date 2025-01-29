import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = async (
  request: Request,
  { params }: { params: { auth0: string } }
) => {
  const auth = handleAuth();
  return auth(request, { params });
}; 