import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function FloatingButton({ 
  onClick, 
  className, 
  children = "Create Post" 
}: FloatingButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-auto right-auto h-14 px-6 rounded-full shadow-lg hover:shadow-xl",
        "transition-all duration-300 ease-in-out",
        "hover:scale-105 active:scale-95",
        "bg-green-600 hover:bg-green-700",
        "text-white font-medium",
        "border-0 z-50",
        "flex items-center gap-2",
        className
      )}
    >
      <Plus className="h-5 w-5" />
      {children}
    </Button>
  );
}