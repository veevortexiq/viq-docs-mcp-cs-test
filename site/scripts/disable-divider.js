document.addEventListener('DOMContentLoaded', function () {
  // find any link containing "divider" in the href and fully disable it
  document.querySelectorAll('a[href*="divider"]').forEach(function (a) {
    a.removeAttribute('href');                // remove navigation target
    a.setAttribute('aria-disabled', 'true');  // mark as disabled
    a.setAttribute('tabindex', '-1');         // remove from tab order
    a.style.pointerEvents = 'none';           // just in case
  });
});
