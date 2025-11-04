interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "w-5 h-5" }: IconProps) {
  const icons: { [key: string]: string } = {
    email: "✉️",
    phone: "📞", 
    location: "📍",
    car: "🚗",
    lightning: "⚡",
    palette: "🎨",
    database: "🗄️",
    cloud: "☁️",
    star: "✦",
    code: "💻",
    rocket: "🚀",
    heart: "❤️",
    check: "✓",
    arrow: "→",
    external: "↗",
    download: "⬇",
    github: "⚡",
    linkedin: "💼",
    globe: "🌐"
  };

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      {icons[name] || "❓"}
    </span>
  );
}