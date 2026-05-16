const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white/80 font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-pulse">
          Thank You
        </h2>

        <p className="text-xs text-white/40 mb-2">
          &copy; {currentYear} Created by N.Morishita.
        </p>

        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
          Handcrafted with Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
