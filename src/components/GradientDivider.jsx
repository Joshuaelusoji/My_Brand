export default function GradientDivider({ className = "" }) {
  return (
    <div
      className={`my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent ${className}`}
    />
  );
}