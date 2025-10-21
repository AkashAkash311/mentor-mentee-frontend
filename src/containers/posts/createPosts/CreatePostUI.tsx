import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Smile, Hash, Link } from "lucide-react";
interface CreatePostModalProps {
  onPost?: (content: string) => void;
}
export default function CreatePostModal({
  onPost,
}: CreatePostModalProps) {
  const [content, setContent] = useState("");
  const handlePost = () => {
    if (content.trim()) {
      onPost?.(content);
      setContent("");
    }
  };
  return (
    <div className="p-2 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-3">
        Create a post
      </h2>
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
          className="min-h-[120px] rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
          </div>
          <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
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
    </div>
  );
}
