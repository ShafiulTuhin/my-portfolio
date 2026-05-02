export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 w-full py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* <div className="text-sm font-bold text-slate-200 uppercase font-headline-md tracking-widest">DEV_ARCHITECT</div> */}
        <div className="text-xl font-black tracking-widest text-white font-headline-md">
          Shaf<span className="text-cyan-400 font-bold">iul Tu</span>
          hin
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="text-slate-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-500 ease-in-out font-headline-md text-xs uppercase tracking-widest"
            href="#hero"
          >
            Home
          </a>
          <a
            className="text-slate-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-500 ease-in-out font-headline-md text-xs uppercase tracking-widest"
            href="https://www.linkedin.com/in/shafiul-tuhin/"
          >
            Linkedin
          </a>
          <a
            className="text-slate-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-500 ease-in-out font-headline-md text-xs uppercase tracking-widest"
            href="https://wa.me/8801711270867"
          >
            WhatsApp
          </a>
        </div>
        <div className="text-slate-500 font-headline-md text-xs uppercase tracking-widest text-center md:text-right">
          © 2026 Shafiul Azam Tuhin. Engineering thoughtful web experiences.
        </div>
      </div>
    </footer>
  );
}
