interface PillProps {
  text: string;
}

const Pill: React.FC<PillProps> = ({ text }) => {
  return (
    <div className="py-1 px-2 rounded-full border border-primary bg-[#F4FFF8] text-[10px] text-[#000F08]">
      {text}
    </div>
  );
};

export default Pill;
