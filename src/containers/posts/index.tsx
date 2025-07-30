import { FloatingButton } from '@/components/FloatingButton';
import React, { useState } from 'react'
import { CreatePostModal } from './createPosts/CreatePostUI';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';

const Index = () => {
  const [open, setOpen] = useState<boolean>(true)
  const handleCreatePost = () => {
    // Logic to handle post creatio
    setOpen(true);
    console.log("Create Post button clicked");
  }

  const openChange = () => {
    setOpen(false);
  }

   return (
      <div className="min-h-screen relative">
        <CreatePostModal open={open} onOpenChange={openChange}/>

        <FloatingButton onClick={handleCreatePost} />
      </div>
  );

}

export default Index