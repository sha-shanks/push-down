(function() {
    function removePopup() {
        const popup = document.querySelector('div.vSyRff');
        if (popup) {
            popup.style.display = 'none';
        }
        
        const searchBox = document.querySelector('input[name="q"]');
        if (searchBox) {
            searchBox.focus();
        }
    }

    
    window.addEventListener('load', () => {
        removePopup();
    });

    
    const observer = new MutationObserver(() => {
        removePopup();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
