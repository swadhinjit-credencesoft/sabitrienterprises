'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setActiveSlide } from '../../store/slices/uiSlice';
import { gsap } from 'gsap';
import { homeHeroSlides } from '../../data/home';
import Badge from '../ui/Badge/Badge';
import Button from '../ui/Button/Button';
import styles from './home.module.scss';

export default function HomeHero() {
  const activeSlide = useSelector((state: RootState) => state.ui.activeSlide);
  const dispatch = useDispatch();

  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slide = homeHeroSlides[activeSlide];

  useEffect(() => {
    videoRefs.current.forEach((el, idx) => {
      if (!el) return;
      el.muted = true;
      if (idx === activeSlide) {
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [activeSlide]);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        },
      );
    });

    return () => ctx.revert();
  }, [activeSlide]);

  useEffect(() => {
    if (!progressRef.current) return;
    gsap.to(progressRef.current, {
      left: `${(activeSlide / homeHeroSlides.length) * 100}%`,
      width: `${100 / homeHeroSlides.length}%`,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [activeSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setActiveSlide((activeSlide + 1) % homeHeroSlides.length));
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide, dispatch]);

  return (
    <section className={styles.hero}>
      {homeHeroSlides.map((item, idx) => (
        <video
          key={item.index}
          ref={(el) => {
            videoRefs.current[idx] = el;
          }}
          src={item.video}
          poster={item.image}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`${styles.heroBg} ${
            idx === activeSlide ? styles.visible : ''
          }`}
        />
      ))}
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
          <div className={styles.heroContent} ref={contentRef}>
            <Badge color="emerald" dot className={styles.heroBadge}>
              {slide.badge}
            </Badge>
            <h1 className={styles.heroTitle}>{slide.title}</h1>
            <p className={styles.heroSubtitle}>{slide.subtitle}</p>
            <div className={styles.heroActions}>
              <Link href={slide.primary.href}>
                <Button variant="primary" className={styles.heroBtnPrimary}>
                  {slide.primary.label}
                </Button>
              </Link>
              <Link href={slide.secondary.href}>
                <Button variant="outline">{slide.secondary.label}</Button>
              </Link>
          </div>
        </div>
      </div>

      <div className={styles.sliderControls}>
        <div className={styles.sliderTrack}>
          <div className={styles.sliderProgress} ref={progressRef} />
        </div>
        <div className={styles.indicators}>
          {homeHeroSlides.map((slide, idx) => (
            <button
              key={slide.index}
              className={`${styles.indicator} ${
                idx === activeSlide ? styles.active : ''
              }`}
              onClick={() => dispatch(setActiveSlide(idx))}
            >
              <span className={styles.index}>{slide.index}</span>
              <span className={styles.label}>{slide.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
