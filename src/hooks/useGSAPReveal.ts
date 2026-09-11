import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPReveal(
  options: { stagger?: number; y?: number; duration?: number; delay?: number } = {}
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = ref.current?.children;
    if (!elements || elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          y: options.y || 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: options.duration || 0.6,
          stagger: options.stagger || 0.1,
          delay: options.delay || 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [options.stagger, options.y, options.duration, options.delay]);

  return ref;
}
