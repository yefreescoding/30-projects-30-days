/**
 * The `useIntersectionObserver` function is a custom React hook that uses the Intersection Observer
 * API to add a CSS class to elements when they become visible in the viewport.
 * @returns The `useIntersectionObserver` function returns `null`.
 */
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
  }, [targetSelector, inViewClass, options]);

  return null;
}

export default useIntersectionObserver;
