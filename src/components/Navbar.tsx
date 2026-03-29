import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Services", href: isHome ? "#services" : "/#services" },
    { label: "Reviews", href: isHome ? "#reviews" : "/#reviews" },
    { label: "FAQ", href: isHome ? "#faq" : "/#faq" },
    { label: "Book", href: "/booking" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-cream/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl text-cream tracking-wide">
          Max Mac
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href} className="text-cream/70 hover:text-gold font-body text-sm tracking-wider uppercase transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-cream/70 hover:text-gold font-body text-sm tracking-wider uppercase transition-colors">
                {link.label}
              </a>
            )
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-cream">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-charcoal/95 overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-5">
              {links.map(link =>
                link.href.startsWith("/") ? (
                  <Link key={link.label} to={link.href} onClick={() => setOpen(false)} className="text-cream/70 hover:text-gold font-body text-sm tracking-wider uppercase transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-cream/70 hover:text-gold font-body text-sm tracking-wider uppercase transition-colors">
                    {link.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
