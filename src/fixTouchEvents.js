// Fix for touch events and interactivity issues after navigation

export const fixTouchEvents = () => {
    // Fix for iOS touch events
    const enableTouchOnIOS = () => {
        if (typeof document !== 'undefined') {
            // Remove any potential overlays that might be blocking touch events
            const overlays = document.querySelectorAll('.overlay, .modal-backdrop');
            overlays.forEach(overlay => {
                if (overlay) {
                    overlay.remove();
                }
            });

            // Ensure body and html aren't preventing events
            document.body.style.pointerEvents = 'auto';
            document.documentElement.style.pointerEvents = 'auto';

            // Reset overflow properties that might be locking the screen
            document.body.style.overflow = 'auto';
            document.body.style.position = 'static';
            document.body.style.height = 'auto';
            document.body.style.width = 'auto';
        }
    };

    // Fix for Android touch events
    const enableTouchOnAndroid = () => {
        if (typeof document !== 'undefined') {
            // Force layout recalculation
            document.body.style.display = 'none';
            // This causes a reflow
            void document.body.offsetHeight;
            document.body.style.display = '';

            // Reset any touch-action restrictions
            document.body.style.touchAction = 'auto';
            document.documentElement.style.touchAction = 'auto';
        }
    };

    // Fix z-index stacking context issues
    const fixZIndexStacking = () => {
        if (typeof document !== 'undefined') {
            // Reset any potential z-index issues on main containers
            const mainContainers = document.querySelectorAll('main, #root, #__next, .app-container');
            mainContainers.forEach(container => {
                if (container) {
                    container.style.position = 'relative';
                    container.style.zIndex = 'auto';
                }
            });
        }
    };

    // Apply all fixes after navigation completes
    const applyAllFixes = () => {
        enableTouchOnIOS();
        enableTouchOnAndroid();
        fixZIndexStacking();
    };

    // Set up event listeners
    if (typeof window !== 'undefined') {
        // Apply on route changes (for React Router)
        window.addEventListener('popstate', applyAllFixes);

        // Apply on initial load
        window.addEventListener('load', applyAllFixes);

        // Special fix for pages that might have modals or overlays
        document.addEventListener('click', (e) => {
            // If clicking a link, prepare to fix touch events after navigation
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                setTimeout(applyAllFixes, 100);
            }
        });
    }
};

// Call this in your main index.js or App.js
// fixTouchEvents();