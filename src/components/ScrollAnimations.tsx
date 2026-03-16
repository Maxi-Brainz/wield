import { motion, useScroll, useTransform, type Variant } from "framer-motion";
import { useRef, type ReactNode } from "react";

// Reusable fade-in on scroll
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  amount?: number;
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) => {
  const offset = directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.15,
  once = true,
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) => {
  const offset = directionOffset[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const Parallax = ({ children, className = "", speed = 0.3 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// Text reveal (word by word)
interface TextRevealProps {
  text: string;
  className?: string;
  once?: boolean;
}

export const TextReveal = ({ text, className = "", once = true }: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Scale-in on scroll
export const ScaleReveal = ({
  children,
  className = "",
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once, amount: 0.2 }}
    transition={{
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    }}
  >
    {children}
  </motion.div>
);

// Counter animation for numbers
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const Counter = ({
  from = 0,
  to,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
}: CounterProps) => {
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {to}
        </motion.span>
        {suffix}
      </motion.span>
    </motion.span>
  );
};

// Horizontal line reveal
export const LineReveal = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`h-px bg-border ${className}`}
    initial={{ scaleX: 0, transformOrigin: "left" }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
  />
);
