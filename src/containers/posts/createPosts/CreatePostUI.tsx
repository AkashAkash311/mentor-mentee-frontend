import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostApis from "@/services/api/postApi";

interface CreatePostModalProps {}

export default function CreatePostModal({}: CreatePostModalProps) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const handlePost = async () => {
    try {
      let response;
      const payload = {
        title: title,
        content: content,
        authorId: "65a7a78c25e3b6a906a201c1",
      };
      response = await PostApis.createPost(payload);
      toast.success(response.data.message);
      setContent("");
      setTitle("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  return (
    <div className="p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-3">
        Create a post
      </h2>
      <div className="space-y-4 mt-2">
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-lg font-semibold !ring-0 !ring-offset-0 !border-0 !shadow-none p-3 focus-visible:!ring-0 focus-visible:!ring-offset-0"
        />
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg" />
            <AvatarFallback className="bg-slate-200 dark:bg-slate-700">
              U
            </AvatarFallback>
          </Avatar>
          <textarea
            ref={textareaRef}
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-sm overflow-y-hidden"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3"></div>
          <Button
            onClick={handlePost}
            disabled={!content.trim() || !title.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg disabled:bg-white-300"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
