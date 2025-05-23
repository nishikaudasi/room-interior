import React, { useContext } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/clerk-react';
import { UserDetailContext } from '../../context/UserDetailContext'; // Adjusted import path

function Header() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        <h2 className="text-xl font-bold text-gray-800">AI Room Design</h2>
      </div>
      <div className="flex gap-7 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200">
          <Image src="/star.png" width={20} height={20} alt="Star" />
          <h2>{userDetail?.credits}</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;