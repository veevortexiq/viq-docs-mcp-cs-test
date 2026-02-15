---
title: System Status
hide:
  - toc
---


# System Status Dashboard

<div id="status-dashboard">

<style>
    /* SCOPED CSS: Only affects this dashboard */
    #status-dashboard {
        --nav-bg: #ffffff;
        --border-color: #e5e7eb;
        --text-dark: #111827;
        --text-gray: #6b7280;
        --active-color: #5529D6; /* Your primary purple */
        
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        max-width: 100%;
        margin: 0 auto;
    }

    #status-dashboard * {
        box-sizing: border-box;
    }

    /* --- Navigation Tabs --- */
    #status-dashboard .app-nav {
        display: flex;
        flex-wrap: wrap;
        background: var(--nav-bg);
        border-bottom: 2px solid var(--border-color);
        margin-bottom: 20px;
        padding: 0;
        list-style: none;
        gap: 2px;
    }

    #status-dashboard .nav-item {
        padding: 15px 20px;
        text-align: center;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        transition: all 0.2s ease;
        font-weight: 500;
        font-size: 14px;
        color: var(--text-gray);
        margin-bottom: -2px; /* Sit on the line */
    }

    #status-dashboard .nav-item:hover {
        color: var(--active-color);
        background-color: #f9fafb;
    }

    #status-dashboard .nav-item.active {
        border-bottom: 3px solid var(--active-color);
        color: var(--active-color);
        font-weight: 700;
        background-color: #fff;
    }

/* --- Iframe Container --- */
    #status-dashboard .iframe-container {
        width: 100%;
        
        /* CHANGE THIS: Was 800px, needs to be auto to let the iframe grow */
        height: 1000px; 
        
        background: #f9fafb;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        overflow: visible; /* changed from hidden to visible just in case */
        position: relative;
    }

/*    #status-dashboard iframe {
        width: 100%;
        height: 100%;
        border: none;
        display: block;
    } */
	
	#status-dashboard .status-frame {
			width: 100%;
			
			/* The iframe needs to be tall enough for your longest page */
			height: 1000px; 
			
			border: none;
			display: block;
			overflow: hidden;
			scrollbar-width: none;
		}
		

    /* Loading State */
    #status-dashboard .loading-msg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--text-gray);
        font-size: 14px;
        z-index: 0;
    }

    /* --- Mobile Responsiveness --- */
    @media screen and (max-width: 767px) {
        #status-dashboard .app-nav {
            flex-wrap: nowrap;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 5px; /* Space for scrollbar */
            
            /* Hide scrollbar visually but allow swipe */
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }
        #status-dashboard .app-nav::-webkit-scrollbar {
            display: none;
        }
        
        #status-dashboard .nav-item {
            flex: 0 0 auto;
            padding: 12px 15px;
            font-size: 13px;
        }

        #status-dashboard .iframe-container {
            height: 500px; /* Smaller height on mobile */
        }
    }
</style>


<div class="app-nav" id="appNav">
    </div>

<div class="iframe-container">
   <!--  <iframe id="statusFrame" src="" allowfullscreen></iframe> -->
	<iframe 
    id="statusFrame" 
    class="status-frame" 
    src="" 
    title="System Status" 
    scrolling="no">
</iframe>
</div>

</div>

<script>
  (function() {
    // --- Configuration ---
    const services = [
        { name: 'AI Operating System Platform', url: 'https://monitor.vortexiq.ai/' },
        { name: 'StagingPro BigCommerce', url: 'https://monitor.stagingpro.com/' },
        { name: 'Vortex Backup BigCommerce', url: 'https://monitor.rollbackpro.com/' },
        { name: 'Vortex Staging Shopify', url: 'https://monitor-shopifystg.vortexiq.ai/' },
        { name: 'Vortex Backup Shopify', url: 'https://monitor-shopifybkp.vortexiq.ai/' },
        { name: 'Staging Adobe Commerce', url: 'https://monitor.dryrunpro.com/' }
    ];

    // --- Main Initializer ---
    function tryInitDashboard() {
       var attempts = 0;
       // Check every 100ms, up to 50 times (5 seconds total)
       var interval = setInterval(function() {
          var navContainer = document.getElementById('appNav');
          var iframe = document.getElementById('statusFrame');
          
          // Only run if both elements exist in the DOM
          if (navContainer && iframe) {
             clearInterval(interval);
             // Small extra delay to ensure browser is ready to render iframe
             setTimeout(function() { 
                buildDashboard(navContainer, iframe); 
             }, 50);
          }
          
          attempts++;
          // Stop checking after 5 seconds
          if (attempts > 50) clearInterval(interval);
       }, 100);
    }

    // --- Builder Function ---
    function buildDashboard(nav, frame) {
        // Clear any existing buttons to prevent duplicates
        nav.innerHTML = '';
        
        services.forEach(function(service, index) {
            var btn = document.createElement('div');
            btn.className = 'nav-item ' + (index === 0 ? 'active' : '');
            btn.innerText = service.name;
            
            btn.onclick = function() {
                // Update active classes
                var allItems = document.querySelectorAll('#status-dashboard .nav-item');
                allItems.forEach(function(el) { el.classList.remove('active'); });
                btn.classList.add('active');
                
                // Update Iframe
                frame.src = service.url;
            };
            nav.appendChild(btn);
        });

        // Load the first URL immediately if not already set
        if (services.length > 0) {
             frame.src = services[0].url;
        }
    }

    // --- Event Listeners ---
    
    // 1. Run immediately (covers Hard Refresh)
    tryInitDashboard();

    // 2. Run on Instant Navigation (covers clicking links)
    // We subscribe to MkDocs' global observable
    if (window.document$) {
        window.document$.subscribe(function() {
            // Wait 150ms after navigation finishes, then start polling
            setTimeout(tryInitDashboard, 150); 
        });
    }

  })();
</script>



---

[← Back to Help Center](../index.md){ .md-button }