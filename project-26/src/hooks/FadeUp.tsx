import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

export function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
