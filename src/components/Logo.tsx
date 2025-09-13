import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Real Logo */}
      <Image
        src="/logo-clonchat.png"
        alt="Clonchat Logo"
        width={48}
        height={48}
        className="w-12 h-12"
        priority
      />
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold">
          <span className="text-green-700">CLON</span>
          <span className="text-green-500">CHAT</span>
        </span>
        <span className="text-xs text-gray-600 font-medium">AI CHATS FOR COMPANIES</span>
      </div>
    </div>
  );
};

export default Logo;
