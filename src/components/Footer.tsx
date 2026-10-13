import { Link } from "react-router-dom";
import { servicePages } from "@/data/servicePages";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-cream/10 py-10 px-6">
      <nav aria-label="Wedding services" className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
        {servicePages.map((p) => (
          <Link key={p.path} to={p.path} className="text-cream/60 hover:text-gold font-body text-sm transition-colors">{p.h1}</Link>
        ))}
        <a href="https://www.easyweddings.com.au/WeddingMusic/Sydney/MaxMac/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold font-body text-sm transition-colors">Reviews on Easy Weddings</a>
      </nav>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl text-cream">Max Mac</p>
        <p className="text-cream/50 font-body text-sm text-center">
          Based in Sydney, NSW · Available Australia-wide & Internationally by arrangement
        </p>
        <a href="mailto:maxmacbookings@gmail.com" className="text-gold font-body text-sm hover:text-gold-light transition-colors">
          maxmacbookings@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
