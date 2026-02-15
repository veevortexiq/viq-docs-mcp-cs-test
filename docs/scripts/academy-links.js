// Add "/academy" to all internal links, including those in the nav menu
document.querySelectorAll('nav a').forEach(function (link) {
  const href = link.getAttribute('href');
  if (href) {
    // Only modify relative links
    if (!href.startsWith('http') && !href.startsWith('#')) {
      // Prepend "/academy" to internal links
      link.setAttribute('href', '/academy' + href);
    }
  }
});

// Add "/academy" to all asset links (js, css, images)
document.querySelectorAll('link, script, img').forEach(function (element) {
  const src = element.getAttribute('src') || element.getAttribute('href');
  if (src && (src.startsWith('/') || src.startsWith('assets/'))) {
    element.setAttribute('src', '/academy' + src); // Prepend /academy to the src
    element.setAttribute('href', '/academy' + src); // Prepend /academy to the href for stylesheets
  }
});
