export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sumi">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 border-2 border-susu/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-beni rounded-full animate-spin" />
        </div>
        <p className="text-xs text-hai/50 tracking-[0.2em] uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
