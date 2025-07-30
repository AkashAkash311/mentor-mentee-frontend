import { FloatingButton } from '@/components/FloatingButton';
import React from 'react'

const index = () => {
  const handleCreatePost = () => {
    // Logic to handle post creatio
    console.log("Create Post button clicked");
  }
   return (
      <div className="min-h-screen relative">
        test
        <FloatingButton onClick={handleCreatePost} />
      </div>
  );

}

export default index