import React, { useEffect, useRef } from "react";

const OutsideClickHandler:React.FC<{ children: any, onOutsideClick: () => void, className?: string, }> = (props) => {
  const outsideClickWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      window.removeEventListener('mousedown', clickOutsideHandler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickOutsideHandler = (event: any): any => {
    if (outsideClickWrapperRef !== null && outsideClickWrapperRef.current !== null && !outsideClickWrapperRef.current.contains(event.target)){
        props.onOutsideClick();
    }
  }

  return (
    <div ref={outsideClickWrapperRef} className={props.className}>
      {props.children}
    </div>
  );
}

export default OutsideClickHandler;