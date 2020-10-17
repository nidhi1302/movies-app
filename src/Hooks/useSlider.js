import { useState, useEffect } from 'react';

function useSlideshow(slides, { timerLength = 5000 } = {}) {
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrIndex((currIndex + 1) % slides.length);
        }, timerLength);
        return () => clearTimeout(timer);
    }, [currIndex, slides, timerLength]);

    const updateSlide = (direction) => {
        if (direction === "previous") {
            return setCurrIndex((currIndex - 1 + slides.length) % slides.length)
        };

        if (direction === 'next') {
            return setCurrIndex((currIndex + 1) % slides.length)
        }
    };

    return {
        currIndex,
        updateSlide
    };
}
export default useSlideshow;