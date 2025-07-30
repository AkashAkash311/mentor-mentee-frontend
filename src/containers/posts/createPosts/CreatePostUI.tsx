import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ImageIcon, Smile, Hash, Link } from 'lucide-react';

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPost?: (content: string) => void;
}

export function CreatePostModal({ open, onOpenChange, onPost }: CreatePostModalProps) {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (content.trim()) {
      onPost?.(content);
      setContent('');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-slate-900 dark:text-white">
            Create a post
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="text" />
              <AvatarFallback className="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white">U</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <Textarea
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px] bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 resize-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 p-2"
              >
                <Smile className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 p-2"
              >
                <Hash className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 p-2"
              >
                <Link className="h-5 w-5" />
              </Button>
            </div>
            
            <Button
              onClick={handlePost}
              disabled={!content.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}