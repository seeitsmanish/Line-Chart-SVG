import { useEffect, useRef } from "react";
/**
 * Hook that alerts clicks outside of the passed ref
 * @param {React.RefObject} ref - The ref of the element to detect outside clicks on
 * @param {Function} callback - The callback function to call when an outside click is detected
 */
function useOutsideClick(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     * @param {MouseEvent} event - The mouse event
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
