export default function FalkeLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#logoGrad)" />
      {/* Stylized falcon / F letter mark */}
      <path
        d="M14 12h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H20v4h12c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H20v8c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2z"
        fill="white"
        opacity="0.95"
      />
      {/* Accent wing swoosh */}
      <path
        d="M30 18c4-1 8 0 10 3-3-1-6-1-8 1l-2-4z"
        fill="#0ea5e9"
        opacity="0.9"
      />
    </svg>
  );
}
