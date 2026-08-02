import React, { useCallback, useEffect, useRef } from "react";

const GitHubButton = React.memo(({ children, ...props }) => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const paint = useCallback(() => {
    if (!containerRef.current) return;

    const tempSpan = document.createElement("span");
    containerRef.current.appendChild(tempSpan);

    import(/* webpackMode: "eager" */ "github-buttons")
      .then(({ render }) => {
        if (
          buttonRef.current &&
          containerRef.current &&
          containerRef.current.lastChild === tempSpan
        ) {
          render(tempSpan.appendChild(buttonRef.current), (el) => {
            if (
              containerRef.current &&
              containerRef.current.lastChild === tempSpan
            ) {
              containerRef.current.replaceChild(el, tempSpan);
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error loading github-buttons:", error);
        if (
          containerRef.current &&
          containerRef.current.lastChild === tempSpan
        ) {
          containerRef.current.removeChild(tempSpan);
        }
      });
  }, []);

  useEffect(() => {
    paint();

    return () => {
      if (containerRef.current) {
        const lastChild = containerRef.current.lastChild;
        if (lastChild && lastChild !== buttonRef.current) {
          containerRef.current.removeChild(lastChild);
        }
      }
    };
  }, [paint]);

  return (
    <span ref={containerRef}>
      <a {...props} ref={buttonRef}>
        {children}
      </a>
    </span>
  );
});

GitHubButton.displayName = "GitHubButton";

export default GitHubButton;
