import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      toast({
        title: "Enquiry Sent!",
        description: "Max will get back to you within 24 hours. Thanks for reaching out!",
      });

      form.reset();
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again or email maxmacbookings@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-body tracking-[0.2em] uppercase text-sm mb-3">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">Book Max Mac</h1>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground font-body max-w-lg mx-auto leading-relaxed">
              Fill out the form below and Max will respond within 24 hours with availability and a personalised quote. Free consultations included!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-5 gap-12"
          >
            <form
              name="booking"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="md:col-span-3 space-y-6"
            >
              <input type="hidden" name="form-name" value="booking" />
              <input type="hidden" name="bot-field" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body text-sm text-foreground">Your Name</Label>
                  <Input id="name" name="name" required placeholder="e.g. Sarah & Tom" className="bg-secondary border-border font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body text-sm text-foreground">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@email.com" className="bg-secondary border-border font-body" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="font-body text-sm text-foreground">Wedding Date</Label>
                  <Input id="date" name="date" type="date" className="bg-secondary border-border font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venue" className="font-body text-sm text-foreground">Venue / Location</Label>
                  <Input id="venue" name="venue" placeholder="Venue name or suburb" className="bg-secondary border-border font-body" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-body text-sm text-foreground">Services Required</Label>
                <Select name="services">
                  <SelectTrigger className="bg-secondary border-border font-body">
                    <SelectValue placeholder="Select services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-duo">Full Day Duo Package (Duo Acoustic + DJ) [MOST POPULAR]</SelectItem>
                    <SelectItem value="full-solo">Full Day Solo Package (Solo Acoustic + DJ)</SelectItem>
                    <SelectItem value="ceremony">Ceremony Only (Acoustic)</SelectItem>
                    <SelectItem value="reception">Reception Only (DJ)</SelectItem>
                    <SelectItem value="full-mc">Full Day Package + MC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-body text-sm text-foreground">Tell Max About Your Day</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Share your vision — theme, guest count, any special song requests, or anything else you'd like Max to know!"
                  className="bg-secondary border-border font-body resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-gold font-body tracking-wider uppercase text-sm py-6"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>

            <div className="md:col-span-2 space-y-8">
              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-display text-xl text-foreground mb-4">What Happens Next?</h3>
                <ol className="space-y-4 font-body text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-xs">1</span>
                    <span>Max reviews your enquiry and checks availability</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-xs">2</span>
                    <span>You'll receive a personalised quote within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-xs">3</span>
                    <span>Free consultation call to discuss your music vision</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-xs">4</span>
                    <span>Lock in your date and start planning the playlist!</span>
                  </li>
                </ol>
              </div>

              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-display text-xl text-foreground mb-3">Prefer Email?</h3>
                <p className="text-muted-foreground font-body text-sm mb-3">
                  Drop Max a line directly:
                </p>
                
<a
                  href="mailto:maxmacbookings@gmail.com"
                  className="text-accent font-body text-sm hover:text-gold transition-colors"
                >
                  maxmacbookings@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
