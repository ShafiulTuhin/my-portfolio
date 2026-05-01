export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 w-full py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-bold text-slate-200 uppercase font-headline-md tracking-widest">DEV_ARCHITECT</div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Source", "LinkedIn", "Terminal", "Email"].map((link, i) => (
            <a key={i} className="text-slate-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-500 ease-in-out font-headline-md text-xs uppercase tracking-widest" href="#">
              {link}
            </a>
          ))}
        </div>
        <div className="text-slate-500 font-headline-md text-xs uppercase tracking-widest text-center md:text-right">
          © 2024 PROTOCOL_ZERO. ENGINEERED FOR PERFORMANCE.
        </div>
      </div>
    </footer>
  );
}
