import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreatePostModal from './createPosts/CreatePostUI';
import { Plus } from 'lucide-react';

export default function CreatePostButton() {
  const [open, setOpen] = useState(false);

  const handlePost = (content: string) => {
    console.log('New post:', content);
    // TODO: integrate with API here
  };

  return (
    <div className=" relative"> 
      <Button
        onClick={() => setOpen(true)}
        className="absolute bottom-8 right-8 rounded-full p-4 shadow-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        <Plus className="h-6 w-6" />
      </Button>

      {/* Modal */}
      <CreatePostModal open={open} onOpenChange={setOpen} onPost={handlePost} />
    </div>
  );
}