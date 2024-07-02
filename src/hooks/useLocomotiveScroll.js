import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const useLocomotiveScroll = (location) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Update scroll position on location change
    locomotiveScroll.update();

    // Clean up on unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [location]);

  return scrollRef;
};

export default useLocomotiveScroll;
