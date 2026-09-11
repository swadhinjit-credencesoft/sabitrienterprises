'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeStats } from '@/data/home';
import styles from '@/components/sections/home.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function HomeStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    numberRefs.current.forEach((el, index) => {
      if (!el) return;
      const stat = homeStats[index];
      const targetValue = parseFloat(stat.value);

      const obj = { val: 0 };

      gsap.to(obj, {
        val: targetValue,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        onUpdate: () => {
          el.innerText = obj.val.toFixed(
            stat.value.includes('.') ? 1 : 0,
          );
        },
      });
    });
  }, []);

  return (
    <section className={styles.stats} ref={sectionRef}>
      <div className={styles.statsBg} />
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          {homeStats.map((stat, idx) => (
            <div key={idx} className={styles.stat}>
              <div className={styles.statValue}>
                <span
                  ref={(el) => {
                    numberRefs.current[idx] = el;
                  }}
                >
                  0
                </span>
                {stat.suffix}
              </div>
              <h4 className={styles.statLabel}>{stat.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
