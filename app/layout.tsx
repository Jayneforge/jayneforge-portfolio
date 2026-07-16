import './globals.css';
import Link from 'next/link'; // <--- This line must be here!

export const metadata = {
  title: 'JAYNEFORGE — Building things that work',
  description: 'AI-powered automation, working products, and robust systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-[#F9F6F0] text-[#2B231F] min-h-screen flex flex-col justify-between selection:bg-[#D4C5B9] selection:text-[#2B231F]">
        
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-[#F9F6F0]/90 backdrop-blur-md border-b border-[#D4C5B9]/20">
          <div className="max-w-[980px] mx-auto px-7 py-5 flex items-center justify-between">
            <Link href="/" className="text-sm font-bold tracking-[0.2em] text-[#2B231F] uppercase hover:text-[#C29F72] transition-colors">
              JAYNEFORGE
            </Link>
            <div className="flex gap-8 mono-text text-[0.8rem] tracking-wider uppercase font-medium">
              <Link href="/" className="text-[#C29F72] hover:text-[#2B231F] transition-colors">Home</Link>
              <Link href="/work" className="text-[#C29F72] hover:text-[#2B231F] transition-colors">Projects</Link>
              <Link href="/about" className="text-[#C29F72] hover:text-[#2B231F] transition-colors">About</Link>
              <Link href="/contact" className="text-[#C29F72] hover:text-[#2B231F] transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Dynamic Pages */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-[#D4C5B9]/30 mt-16 bg-[#F9F6F0]">
          <div className="max-w-[980px] mx-auto px-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            {/* Left Side: Availability & Copyright */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#2B231F]/60 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C29F72] animate-pulse"></span>
                <span>Remote</span>
              </div>
              <p className="text-[0.75rem] text-[#2B231F]/40 font-medium tracking-wide">
                &copy; {currentYear} JAYNEFORGE. All rights reserved.
              </p>
            </div>

            {/* Right Side: Direct Connection Channels */}
            <div className="flex flex-wrap gap-6 mono-text text-[0.8rem] tracking-wider lowercase font-medium">
              <a href="mailto:thejayneforge@outlook.com" className="text-[#C29F72] hover:text-[#2B231F] transition-colors underline decoration-[#C29F72]/30 underline-offset-4">
                thejayneforge@outlook.com
              </a>
              <a href="https://github.com/jayneforge" target="_blank" rel="noopener noreferrer" className="text-[#C29F72] hover:text-[#2B231F] transition-colors">
                GitHub
              </a>
              <Link href="/contact" className="text-[#C29F72] hover:text-[#2B231F] transition-colors">
                WebForm
              </Link>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}