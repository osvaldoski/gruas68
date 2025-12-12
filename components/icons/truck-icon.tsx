export function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 17h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H3v8a2 2 0 0 0 2 2Z" />
      <path d="M14 17h1a2 2 0 0 0 2-2v-2" />
      <path d="M3 9h14v4h4l3 3v1a2 2 0 0 1-2 2h-1" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M17 7V4H9v3" />
      <path d="M21 12h-4" />
    </svg>
  )
}
