import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogPortal, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Smile, Hash, Link } from 'lucide-react';

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPost?: (content: string) => void;
}

export default function CreatePostModal({ open, onOpenChange, onPost }: CreatePostModalProps) {
  const [content, setContent] = useState('');
  console.log(open, "etdgfgrthrgfegrthr");

  const handlePost = () => {
    if (content.trim()) {
      onPost?.(content);
      setContent('');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <DialogContent className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-700">
          <DialogHeader className="border-b border-slate-200 dark:border-slate-700 pb-3">
            <DialogTitle className="text-lg font-semibold text-slate-900 dark:text-white">
              Create a post
            </DialogTitle>
          </DialogHeader>

          {/* Your textarea + buttons */}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
