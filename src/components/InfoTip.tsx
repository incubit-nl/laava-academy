import { useState, useRef, useEffect } from "react";

interface Props {
  term: string;
  children: React.ReactNode;
}

export default function InfoTip({ term, children }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <span className="infotip-wrapper" ref={ref}>
      <button
        className="infotip-trigger"
        onClick={() => setOpen(!open)}
        aria-label={`Meer info over ${term}`}
      >
        i
      </button>
      {open && (
        <span className="infotip-popup">
          <span className="infotip-term">{term}</span>
          <span className="infotip-body">{children}</span>
        </span>
      )}
    </span>
  );
}
