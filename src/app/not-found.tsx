import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-sumi">
      <div className="text-center max-w-md">
        <p className="text-beni text-sm font-medium tracking-[0.2em] uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-shiro mb-4 font-heading">
          Page Not Found
        </h1>
        <p className="text-hai mb-8 leading-relaxed">
          Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-beni text-shiro font-medium text-sm rounded-sm hover:bg-beni-light transition-colors duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 border border-susu/30 text-hai hover:text-shiro hover:border-beni/30 font-medium text-sm rounded-sm transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
