import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { Send } from "lucide-react";

function FormButton() {
  return (
    <div className="items-center flex justify-between border-t pt-4 px-6 border-gray-200">
      <Button
        type="reset"
        className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-white hover:bg-gray-50 hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-1 border-gray-300"
      >
        <RefreshCw /> รีเซ็ต
      </Button>
      <Button
        type="submit"
        className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 bg-linear-to-r from-purple-700 to-indigo-600 text-white flex items-center gap-1"
      >
        <Send />
        ส่งแบบสำรวจ
      </Button>
    </div>
  );
}

export default FormButton;
