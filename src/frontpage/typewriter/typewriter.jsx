import { useState, useEffect } from "react";


export default function Typewriter({ text, speed = 50, initialDelay = 0, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [isReadyToType, setIsReadyToType] = useState(initialDelay === 0);


  useEffect(() => {
    if (initialDelay > 0 && !isReadyToType) {
      const delayTimer = setTimeout(() => {
        setIsReadyToType(true);
      }, initialDelay);
      
      return () => clearTimeout(delayTimer);
    }
  }, [initialDelay, isReadyToType]);


  useEffect(() => {
    if (isReadyToType && displayed.length < text.length) {
      
      const nextCharIndex = displayed.length;

      const typingTimer = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(nextCharIndex));
      }, speed);
      
      return () => clearTimeout(typingTimer);
    }
  }, [isReadyToType, displayed, text, speed]);

  
  return (
    <div className={ className }>
      {displayed}
    </div>
  );
}
