import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setScrolled } from '@/store/slices/uiSlice';

export function useScrollPosition() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 20));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);
}
