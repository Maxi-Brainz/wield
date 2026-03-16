import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-women.jpg";
import heroImage2 from "@/assets/hero-civic-engagement.jpg";
import heroImage3 from "@/assets/hero-leadership.jpg";

const heroSlides = [
  { image: heroImage1, alt: "Nigerian women leaders discussing community empowerment strategies" },
  { image: heroImage2, alt: "Women civic engagement and voter education workshop in Nigeria" },
  { image: heroImage3, alt: "Women leadership training and capacity building session in Abuja" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep to-navy-deep"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Content with scroll parallax */}
      <motion.div className="relative z-10 container-narrow mx-auto px-6 py-32" style={{ y: contentY }}>
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-soft/20 border border-gold-soft/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-soft" />
            <span className="text-gold-soft text-sm font-medium">Women-led · Nigeria</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Empowering Women to Participate,
            <span className="text-gold-soft"> Lead</span>, and Thrive
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Women's Inclusion, Empowerment & Leadership Development Initiative builds
            pathways for women's political participation, economic independence, and
            leadership across Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/partner">Partner With Us</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/programs">Explore Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary-foreground/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
