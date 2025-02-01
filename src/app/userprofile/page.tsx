'use client';

import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
