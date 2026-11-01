// Digital card: QR tabs (click and arrow keys) and a Share button where the browser supports it.
(function () {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.vc-tabs [role="tab"]'));

    function show(tab) {
        tabs.forEach(function (t) {
            var on = t === tab;
            t.setAttribute('aria-selected', on ? 'true' : 'false');
            t.tabIndex = on ? 0 : -1;
            document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
        });
    }

    tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { show(tab); });
        tab.addEventListener('keydown', function (e) {
            if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
            var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
            next.focus();
            show(next);
        });
    });

    // iPhone Safari supports the share sheet; elsewhere the button stays hidden.
    var share = document.querySelector('.vc-share');
    if (share && navigator.share) {
        share.hidden = false;
        share.addEventListener('click', function () {
            navigator.share({
                title: 'Samuel Bakst',
                text: 'Samuel Bakst, economist: contact, CV and GDT',
                url: location.href.split('#')[0]
            }).catch(function () { /* the visitor closed the share sheet */ });
        });
    }
})();
