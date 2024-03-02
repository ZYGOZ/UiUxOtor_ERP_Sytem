import React, { useRef, useEffect, useState } from "react";
import styles from "./CustomScrollView.module.css";

interface CustomScrollViewProps {
  children: React.ReactNode;
}

const CustomScrollView: React.FC<CustomScrollViewProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    if (!contentRef.current || !scrollbarRef.current || !thumbRef.current)
      return;

    const content = contentRef.current;
    const scrollbar = scrollbarRef.current;
    const thumb = thumbRef.current;

    const updateScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = content;
      const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
      const thumbPosition =
        (scrollTop / (scrollHeight - clientHeight)) *
        (clientHeight - thumbHeight);

      thumb.style.height = thumbHeight + "px";
      thumb.style.transform = `translateY(${thumbPosition}px)`;
    };

    updateScroll();

    const handleScroll = () => {
      updateScroll();
    };

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      const startY = e.clientY;
      const startScrollTop = content.scrollTop;

      const handleMouseMove = (e: MouseEvent) => {
        const deltaY = e.clientY - startY;
        const scrollDelta =
          (deltaY / content.clientHeight) * content.scrollHeight;
        content.scrollTop = startScrollTop + scrollDelta;
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    scrollbar.addEventListener("mousedown", handleMouseDown);
    content.addEventListener("scroll", handleScroll);

    return () => {
      scrollbar.removeEventListener("mousedown", handleMouseDown);
      content.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
      <div ref={scrollbarRef} className={styles.scrollbar}>
        <div
          ref={thumbRef}
          className={isDragging ? styles.thumbDragging : styles.thumb}
        />
      </div>
    </div>
  );
};

export default CustomScrollView;
