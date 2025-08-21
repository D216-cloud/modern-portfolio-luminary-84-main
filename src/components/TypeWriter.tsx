import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  delay?: number;
  className?: string;
}

const TypeWriter = ({ texts, delay = 100, className = '' }: TypeWriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentFullText = texts[currentTextIndex];

    if (!isDeleting && currentText !== currentFullText) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, delay);
    } else if (!isDeleting && currentText === currentFullText) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText !== '') {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, delay / 2);
    } else if (isDeleting && currentText === '') {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, delay]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
};

export default TypeWriter;