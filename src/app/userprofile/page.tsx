'use client';

import { ClerkProvider, UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <ClerkProvider>
    <div className="flex justify-center items-center min-h-screen">
      <UserProfile />
    </div>
    </ClerkProvider>  );
};

export default UserProfilePage;
