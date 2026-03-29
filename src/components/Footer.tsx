const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-cream/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl text-cream">Max Mac</p>
        <p className="text-cream/50 font-body text-sm">
          Sydney & Surrounding Areas · Available Australia-wide & Internationally
        </p>
        <a href="mailto:maxmacbookings@gmail.com" className="text-gold font-body text-sm hover:text-gold-light transition-colors">
          maxmacbookings@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
