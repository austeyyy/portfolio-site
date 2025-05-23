"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

/**
 * Custom navigation hook that handles page transitions
 * @returns {Object} Navigation utilities
 */
export const useNavigation = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  /**
   * Triggers the page transition animation
   */
  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  /**
   * Handles navigation with transition
   * @param {string} path - Path to navigate to
   * @returns {Function} Click event handler
   */
  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    if (path === pathname) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    router.push(path, {
      onTransitionReady: triggerPageTransition,
    });
  };

  // Return the functions and values needed by components
  return {
    handleNavigation,
    currentPath: pathname,
  };
};

// Export as default as well for flexibility
export default useNavigation;
