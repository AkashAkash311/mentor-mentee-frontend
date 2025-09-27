import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Smile, Hash, Link } from "lucide-react";
interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPost?: (content: string) => void;
}
export default function CreatePostModal({
  open,
  onOpenChange,
  onPost,
}: CreatePostModalProps) {
  const [content, setContent] = useState("");
  const handlePost = () => {
    if (content.trim()) {
      onPost?.(content);
      setContent("");
      onOpenChange(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="backdrop-blur-sm z-10 sm:max-w-[600px] rounded-2xl shadow-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
        <DialogHeader className="border-b border-slate-200 dark:border-slate-700 pb-3">
          <DialogTitle className="text-lg font-semibold text-slate-900 dark:text-white">
            Create a post
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg" />
              <AvatarFallback className="bg-slate-200 dark:bg-slate-700">
                U
              </AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Smile className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              > 
                <Hash className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              > 
                <Link className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              </Button>
            </div>
            <Button
              onClick={handlePost}
              disabled={!content.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
