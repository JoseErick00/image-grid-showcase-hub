interface SectionSpacerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const spacingSizes = {
  sm: "my-6",
  md: "my-8",
  lg: "my-12",
  xl: "my-16",
};

function SectionSpacer({ size = "lg", className = "" }: SectionSpacerProps) {
  return <div className={`${spacingSizes[size]} ${className}`} />;
}

export default SectionSpacer;
