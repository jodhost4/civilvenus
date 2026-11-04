import { useEffect, useState, useRef } from "react";
import { useMotionValue, useTransform, animate, motion, useInView } from "framer-motion";

const AnimatedCounter = ({ target, duration = 2 }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: duration,
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [target, duration, isInView]);

  return <span ref={ref}><motion.span>{displayValue}</motion.span></span>;
};

export default AnimatedCounter;
