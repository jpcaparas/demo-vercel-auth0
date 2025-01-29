export enum UserRole {
  REGULAR = 'regular',
  ADMIN = 'admin'
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  bio: string;
  preferences: {
    newsletter: boolean;
    notifications: boolean;
  };
}

export interface Auth0Metadata {
  user_metadata: UserProfile;
  app_metadata: {
    role: UserRole;
  };
} 