import Image from "next/image";
import { Button } from "@/components/ui/button";
import MessageScreen from "./MessageScreen";

interface FailMessageProps {
  onRestart: () => void;
}

const FailMessage: React.FC<FailMessageProps> = ({ onRestart }) => {
  return (
    <MessageScreen>
      <div className="w-[400px] pt-40 pb-60 flex flex-col items-center gap-10">
        <Image src="/fail.svg" alt="Logo" width={200} height={40} />
        <h1 className="mb-4 text-2xl text-center">
          You have failed, but good news is that you can try again.
        </h1>
      </div>
      <Button onClick={onRestart} className="w-full rounded-full">
        Restart
      </Button>
    </MessageScreen>
  );
};

export default FailMessage;
