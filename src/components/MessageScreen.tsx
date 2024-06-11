interface MessageScreenProps {
  children: React.ReactNode;
}

const MessageScreen: React.FC<MessageScreenProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {children}
    </div>
  );
};

export default MessageScreen;
