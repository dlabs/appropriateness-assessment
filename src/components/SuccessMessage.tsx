import Image from "next/image";
import { Button } from "@/components/ui/button";
import MessageScreen from "./MessageScreen";

interface SuccessMessageProps {
  onRestart: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onRestart }) => {
  return (
    <MessageScreen>
      <div className="pt-40 pb-60 flex flex-col items-center gap-10">
        <Image src="/success.svg" alt="Logo" width={200} height={40} />
        <h1 className="text-2xl mb-4">You passed the investor assessment</h1>
      </div>
      <Button onClick={onRestart} className="w-full rounded-full">
        Restart
      </Button>
    </MessageScreen>
  );
};

export default SuccessMessage;
