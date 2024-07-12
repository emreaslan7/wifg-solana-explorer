interface TextProps {
  title: string;
  size: string;
  bold?: boolean;
}

export const Text = ({ title, size, bold }: TextProps) => {
  return (
    <div
      className={`text-${size} ${bold ? "font-semibold" : ""} tracking-tight`}
    >
      {title}
    </div>
  );
};
