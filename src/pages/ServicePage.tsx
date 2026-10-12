import { Link } from "react-router-dom";
import { Quote, Star, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeddingTimeline from "@/components/WeddingTimeline";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { reviews } from "@/components/ReviewsSection";
import { videos, photos } from "@/components/WatchSection";
import { servicePages, PACKAGES, type ServicePage as SP } from "@/data/servicePages";
import { usePageMeta, breadcrumb, SITE_URL } from "@/lib/seo";
import heroImg from "@/assets/hero-wedding.jpg";
import djImg from "@/assets/acoustic-ceremony.jpg";
import singerImg from "@/assets/performance-dj.jpg";

const images = { hero: heroImg, dj: djImg, singer: singerImg };
const EW = "https://www.easyweddings.com.au/WeddingMusic/Sydney/MaxMac/";

const ServicePage = ({ page }: { page: SP }) => {
  const url = `${SITE_URL}${page.path}`;
  usePageMeta({
    title: page.title,
    description: page.description,
    path: page.path,
    jsonLd: [
      breadcrumb([{ name: "Home", path: "/" }, { name: page.name, path: page.path }]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.h1,
        description: page.description,
        url,
        serviceType: page.name,
        areaServed: { "@type": "City", name: "Sydney" },
        provider: { "@id": `${SITE_URL}/#person` },
      },
    ],
  });

  const pageReviews = reviews.filter((r) => page.reviewNames.includes(r.name));
  const related = servicePages.filter((p) => p.path !== page.path);
  const pageVideos = page.image === "dj" ? [videos[0], videos[4]] : [videos[0], videos[3]];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-28 pb-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-body text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent">Home</Link> <span aria-hidden="true">/</span> <span>{page.name}</span>
            </nav>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">{page.h1}</h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold font-body tracking-wider uppercase text-sm px-8 py-6">
                <Link to="/booking">Check Your Wedding Date</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-body tracking-wider uppercase text-sm px-8 py-6">
                <a href="#videos">Watch Live Performance Videos</a>
              </Button>
            </div>
          </div>
          <img src={images[page.image]} alt={page.imageAlt} width={800} height={600} className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]" />
        </div>
      </header>

      <main>
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">{page.benefitsHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {page.benefits.map((b) => (
                <div key={b.title} className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-xl text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {page.showSignatureTimeline ? (
          <WeddingTimeline heading={page.timelineHeading} />
        ) : (
          <section className="section-padding bg-secondary">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">{page.timelineHeading}</h2>
              <ol className="space-y-4">
                {page.timeline.map((t, i) => (
                  <li key={t.when} className="flex gap-4 bg-card rounded-lg p-5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-body text-sm">{i + 1}</span>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t.when}</h3>
                      <p className="text-muted-foreground font-body">{t.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-center mt-8 font-body">
                Want music for the whole day?{" "}
                <Link to="/sydney-wedding-singer-dj/" className="text-accent underline underline-offset-4">Explore Acoustic + DJ Packages</Link>
              </p>
            </div>
          </section>
        )}

        <section id="videos" className="section-padding">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">Watch Max Perform</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {pageVideos.map((v) => (
                <div key={v.id} className={`relative w-full overflow-hidden rounded-lg shadow-lg ${v.short ? "aspect-[9/16] max-w-[300px] mx-auto" : "aspect-video"}`}>
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} loading="lazy" allowFullScreen allow="encrypted-media; picture-in-picture" className="absolute inset-0 w-full h-full" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {photos.slice(0, 3).map((p, i) => (
                <img key={i} src={p.url} alt={`Max Mac performing as ${page.name.toLowerCase()} at a wedding — photo ${i + 1}`} loading="lazy" className="rounded-lg object-cover aspect-[4/3] w-full" />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-3">What Couples Say</h2>
            <p className="text-center text-muted-foreground font-body mb-10">
              Verified reviews from{" "}
              <a href={EW} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">Max Mac's Easy Weddings profile</a>
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {pageReviews.map((r) => (
                <figure key={r.name} className="bg-card rounded-xl p-6 shadow-sm">
                  <Quote className="w-6 h-6 text-accent mb-3" aria-hidden="true" />
                  <div className="flex mb-3" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 text-gold fill-current" aria-hidden="true" />)}
                  </div>
                  <blockquote className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{r.text}</blockquote>
                  <figcaption className="font-display text-foreground">{r.name} <span className="text-muted-foreground font-body text-xs">· {r.date}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">Packages</h2>
            <ul className="space-y-4">
              {page.packages.map((k) => (
                <li key={k} className="flex gap-4 bg-card rounded-lg p-5 shadow-sm">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg text-foreground">{PACKAGES[k].name}</h3>
                    <p className="text-muted-foreground font-body">{PACKAGES[k].text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold font-body tracking-wider uppercase text-sm px-10 py-6">
                <Link to="/booking">Request a Personalised Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">{page.name} FAQs</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {page.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`} className="bg-card rounded-lg px-6 border-none">
                  <AccordionTrigger className="font-display text-lg text-foreground text-left hover:no-underline py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-3xl text-foreground mb-8">Related Wedding Services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <Link key={r.path} to={r.path} className="px-5 py-3 rounded-full border border-border font-body text-sm hover:border-accent hover:text-accent transition-colors">
                  {r.h1}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-charcoal text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">Is Your Wedding Date Still Available?</h2>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold font-body tracking-wider uppercase text-sm px-12 py-6">
            <Link to="/booking">Check Your Wedding Date</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
