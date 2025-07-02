
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="rounded-full h-16 w-16 bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg"
          >
            <Play className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>About Jaydatta</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Video will be added here</p>
            {/* You can replace this with an actual video component when ready */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoPopup;
