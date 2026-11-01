// Theme control, ported from GDT (GDT/api/static/theme.js) so this site behaves like GDT.
// Load in <head> without defer so the page never flashes the wrong theme.
// Three modes: 'system' (no stored key, no data-theme: follow the OS), 'light', 'dark'.
// gdtSetTheme(mode) stores the choice under the same key GDT uses ('gdt.theme') and fires
// a "gdt-theme" event. Every [data-gdt-theme-set] button[data-mode] is wired on DOMContentLoaded.
// GDT's colour-blind and toggle helpers are left out: nothing on this site calls them.
(function () {
  var KEY = 'gdt.theme', root = document.documentElement;
  try { var saved = localStorage.getItem(KEY); if (saved === 'light' || saved === 'dark') root.dataset.theme = saved; } catch (e) {}
  function fire() { document.dispatchEvent(new CustomEvent('gdt-theme')); }
  window.gdtThemeMode = function () {
    var t = root.dataset.theme;
    return t === 'light' || t === 'dark' ? t : 'system';
  };
  function sync() {
    var mode = window.gdtThemeMode();
    var btns = document.querySelectorAll('[data-gdt-theme-set] button[data-mode]');
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute('aria-checked', btns[i].getAttribute('data-mode') === mode ? 'true' : 'false');
  }
  window.gdtSetTheme = function (mode) {
    if (mode === 'light' || mode === 'dark') {
      root.dataset.theme = mode;
      try { localStorage.setItem(KEY, mode); } catch (e) {}
    } else {
      delete root.dataset.theme;
      try { localStorage.removeItem(KEY); } catch (e) {}
    }
    sync();
    fire();
  };
  function wire() {
    var btns = document.querySelectorAll('[data-gdt-theme-set] button[data-mode]');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].dataset.gdtWired) continue;
      btns[i].dataset.gdtWired = '1';
      btns[i].addEventListener('click', function () { window.gdtSetTheme(this.getAttribute('data-mode')); });
    }
    sync();
  }
  window.gdtWireTheme = wire;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
  var mq = window.matchMedia && matchMedia('(prefers-color-scheme: dark)');
  if (mq && mq.addEventListener) mq.addEventListener('change', function () {
    if (!root.dataset.theme) fire();
  });
})();
