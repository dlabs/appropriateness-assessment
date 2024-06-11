import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return <Image src="/logo.svg" alt="Logo" width={width} height={height} />;
};

export default Logo;
