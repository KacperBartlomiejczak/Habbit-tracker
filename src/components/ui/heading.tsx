import Heart from "@/assets/heart";

interface HeadingProps {
  title: string;
  size: number;
  color?: string;
}

export default function Heading({ title, size, color }: HeadingProps) {
  return (
    <div className="flex justify-center items-center gap-2 z-6">
      <Heart size={size} color={color} />
      <h1 className="text-black font-bold">{title}</h1>
    </div>
  );
}
