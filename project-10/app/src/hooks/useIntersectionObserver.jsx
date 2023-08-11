import { useEffect } from 'react';

function useIntersectionObserver(targetSelector, inViewClass, options = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(options.inViewClass || inViewClass);
        }
        //  else {
        //   entry.target.classList.remove(
        //     options.inViewClass || 'animate__fadeInUp'
        //   );
        // }
      });
    }, options);

    const targets = document.querySelectorAll(targetSelector);
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [targetSelector, options]);

  return null;
}

export default useIntersectionObserver;
