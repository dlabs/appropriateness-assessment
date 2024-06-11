import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import MessageScreen from "./MessageScreen";

interface InitialMessageProps {
  onStart: () => void;
}

const InitialMessage: React.FC<InitialMessageProps> = ({ onStart }) => {
  return (
    <MessageScreen>
      <div className="mt-32 mb-12">
        <Logo width={200} height={40} />
      </div>
      <p className="mb-6">
        Before you invest, we need to ensure you understand the risks involved
        in trading cryptoassets. This short assessment will evaluate your
        knowledge on this subject.
      </p>
      <p className="mb-6">
        Please answer each question carefully. If you do not demonstrate
        sufficient understanding, you may need to retake the assessment and
        could be temporarily restricted from investing.
      </p>
      <p className="mb-6">
        Our goal is to ensure you can make informed and responsible investment
        decisions.
      </p>
      <Button onClick={onStart} className="w-full mt-20 rounded-full">
        Start
      </Button>
    </MessageScreen>
  );
};

export default InitialMessage;
