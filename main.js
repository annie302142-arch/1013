/**
 * ANSEL LIN PHOTOGRAPHY — CORE INTERACTION SCRIPT
 * Minimalist, Modern, Editorial Portfolio Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Core State
  let activeFilter = 'all';
  let filteredItems = [...GALLERY_DATA];
  let currentLightboxIndex = 0;
  let isLightboxActive = false;

  // 2. DOM Elements
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxLocation = document.getElementById('lightbox-location');
  const lightboxStory = document.getElementById('lightbox-story');
  const lightboxCamera = document.getElementById('lightbox-camera');
  const lightboxLens = document.getElementById('lightbox-lens');
  const lightboxSettings = document.getElementById('lightbox-settings');
  const lightboxFocal = document.getElementById('lightbox-focal');

  // Series Elements
  const seriesModal = document.getElementById('series-modal');
  const seriesClose = document.getElementById('series-close');
  const seriesTitle = document.getElementById('series-title');
  const seriesTheme = document.getElementById('series-theme');
  const seriesYear = document.getElementById('series-year');
  const seriesClient = document.getElementById('series-client');
  const seriesIntro = document.getElementById('series-intro');
  const seriesGrid = document.getElementById('series-grid');

  // Toast
  const toastNotice = document.getElementById('toast-notice');
  const toastMessage = document.getElementById('toast-message');

  // Custom Cursor
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorFollower = document.querySelector('.custom-cursor-follower');
  const cursorText = document.querySelector('.cursor-text');

  /* ==========================================================================
     CUSTOM MAGNETIC CURSOR
     ========================================================================== */
  if (cursorDot && cursorFollower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const updateFollower = () => {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(updateFollower);
    };
    requestAnimationFrame(updateFollower);

    // Hover delegates
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        if (text) {
          cursorFollower.classList.add('has-text');
          cursorText.textContent = text;
        } else {
          cursorFollower.classList.add('is-hovering-link');
        }
      } else if (e.target.closest('a, button, input, textarea, select')) {
        cursorFollower.classList.add('is-hovering-link');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor], a, button, input, textarea, select');
      if (target) {
        cursorFollower.classList.remove('has-text');
        cursorFollower.classList.remove('is-hovering-link');
        cursorText.textContent = '';
      }
    });
  }

  /* ==========================================================================
     HEADER SCROLL & SCROLL SPY
     ========================================================================== */
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Header Blur & Border
    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy for Nav
    let currentSectionId = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     MOBILE HAMBURGER MENU
     ========================================================================== */
  if (mobileMenuBtn && mobileMenu) {
    const toggleMobileMenu = () => {
      const isOpen = mobileMenu.classList.contains('active');
      if (isOpen) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = `
          <svg class="w-6 h-6 text-stone-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        `;
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.add('active');
        mobileMenuBtn.innerHTML = `
          <svg class="w-6 h-6 text-stone-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        `;
        document.body.style.overflow = 'hidden';
      }
    };

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = `
          <svg class="w-6 h-6 text-stone-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        `;
        document.body.style.overflow = '';
      });
    });
  }

  /* ==========================================================================
     GALLERY RENDERING & FILTERING
     ========================================================================== */
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  const renderGallery = (items) => {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `gallery-card group reveal-item ${item.gridSpan} rounded-sm`;
      card.setAttribute('data-cursor', 'VIEW');
      card.setAttribute('data-index', index);

      card.innerHTML = `
        <div class="img-wrapper ${item.aspect} bg-stone-900 overflow-hidden">
          <img 
            src="${item.image}" 
            alt="${item.title} - ${item.titleEn}" 
            loading="lazy" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div class="overlay p-6 flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <span class="font-mono text-[10px] tracking-widest uppercase text-stone-300 bg-stone-900/70 backdrop-blur-md px-2.5 py-1 border border-stone-700/50 rounded-full">
                ${item.category.toUpperCase()}
              </span>
              <span class="font-mono text-xs text-stone-400">
                ${item.year}
              </span>
            </div>

            <div class="card-info">
              <p class="font-mono text-[11px] text-amber-200/80 tracking-wider mb-1">${item.location}</p>
              <h3 class="font-serif text-2xl md:text-3xl font-light text-stone-100 leading-snug tracking-wide">
                ${item.title} <span class="text-sm font-sans font-light text-stone-400 block sm:inline sm:ml-2">${item.titleEn}</span>
              </h3>
              <div class="mt-3 pt-3 border-t border-stone-700/40 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>${item.exif.camera}</span>
                <span class="text-stone-300 flex items-center gap-1 group-hover:text-amber-200 transition-colors">
                  EXPLORE 
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(card);
    });

    initScrollObserver();
  };

  // Filter Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilter = btn.getAttribute('data-filter');
      if (activeFilter === 'all') {
        filteredItems = [...GALLERY_DATA];
      } else {
        filteredItems = GALLERY_DATA.filter(item => item.category === activeFilter);
      }

      // Smooth transition
      galleryGrid.style.opacity = '0';
      galleryGrid.style.transform = 'translateY(12px)';
      galleryGrid.style.transition = 'all 0.3s ease';

      setTimeout(() => {
        renderGallery(filteredItems);
        galleryGrid.style.opacity = '1';
        galleryGrid.style.transform = 'translateY(0)';
      }, 300);
    });
  });

  /* ==========================================================================
     LIGHTBOX SYSTEM
     ========================================================================== */
  const openLightbox = (index) => {
    if (!filteredItems[index]) return;
    currentLightboxIndex = index;
    isLightboxActive = true;
    updateLightboxContent();

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    isLightboxActive = false;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const updateLightboxContent = () => {
    const item = filteredItems[currentLightboxIndex];
    if (!item) return;

    // Smooth image transition
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.97)';

    setTimeout(() => {
      lightboxImg.src = item.image;
      lightboxImg.alt = `${item.title} — ${item.titleEn}`;
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      };

      // Header Meta
      const currentNum = String(currentLightboxIndex + 1).padStart(2, '0');
      const totalNum = String(filteredItems.length).padStart(2, '0');
      lightboxCounter.textContent = `${currentNum} / ${totalNum}`;
      lightboxCategory.textContent = item.categoryLabel;

      // Body Meta
      lightboxTitle.innerHTML = `${item.title} <span class="text-stone-400 font-sans text-lg font-light block sm:inline sm:ml-2">${item.titleEn}</span>`;
      lightboxLocation.textContent = `${item.location} · ${item.year}`;
      lightboxStory.textContent = item.story;

      // EXIF Info
      lightboxCamera.textContent = item.exif.camera;
      lightboxLens.textContent = item.exif.lens;
      lightboxSettings.textContent = `${item.exif.aperture} · ${item.exif.shutter} · ${item.exif.iso}`;
      lightboxFocal.textContent = item.exif.focalLength;
    }, 180);
  };

  const showPrevLightbox = () => {
    if (!filteredItems.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  };

  const showNextLightbox = () => {
    if (!filteredItems.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
    updateLightboxContent();
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextLightbox);

  // Close when clicking outside image wrap
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!isLightboxActive) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
  });

  /* ==========================================================================
     PROJECTS RENDERING & SERIES VIEWER
     ========================================================================== */
  const projectsContainer = document.getElementById('projects-container');

  const renderProjects = () => {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';

    PROJECTS_DATA.forEach((proj, idx) => {
      const projEl = document.createElement('div');
      projEl.className = 'project-card p-6 md:p-10 mb-16 last:mb-0 rounded-sm reveal-item';
      
      const isReversed = idx % 2 === 1;

      projEl.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div class="lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}">
            <div class="project-cover-container aspect-[16/10] overflow-hidden rounded-sm relative group cursor-pointer" data-cursor="EXPLORE" data-project-id="${proj.id}">
              <img 
                src="${proj.coverImage}" 
                alt="${proj.title}" 
                loading="lazy" 
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div class="absolute bottom-4 left-4 bg-stone-950/80 backdrop-blur-md px-3.5 py-1.5 border border-stone-800 text-stone-300 font-mono text-xs rounded-full">
                ${proj.series.length} PHOTOGRAPHS IN SERIES
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 text-stone-400 font-mono text-xs tracking-widest uppercase mb-3">
                <span class="text-amber-200/90 font-bold">${proj.number}</span>
                <span class="w-8 h-[1px] bg-stone-700"></span>
                <span>${proj.location}</span>
              </div>

              <h3 class="font-serif text-3xl md:text-4xl text-stone-100 font-light tracking-wide mb-2">
                ${proj.title}
                <span class="block text-lg font-sans text-stone-400 font-light mt-1">${proj.titleEn}</span>
              </h3>

              <p class="font-mono text-xs text-amber-200/70 tracking-wider mb-6">
                ${proj.theme} · ${proj.year}
              </p>

              <p class="text-stone-300 font-sans text-sm md:text-base leading-relaxed mb-6 font-light">
                ${proj.intro}
              </p>

              <blockquote class="border-l-2 border-stone-600 pl-4 py-1 text-xs text-stone-400 italic font-serif leading-relaxed mb-8">
                “${proj.curatorNote}”
              </blockquote>
            </div>

            <div class="pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
              <span class="font-mono text-[11px] text-stone-400 max-w-[200px] truncate">
                ${proj.client}
              </span>

              <button 
                class="view-series-btn inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 text-stone-950 hover:bg-white text-xs font-mono tracking-widest uppercase rounded-full transition-all hover:scale-105 active:scale-95 shadow-md"
                data-project-id="${proj.id}"
              >
                <span>探索完整系列</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;

      // Click to open series
      const cover = projEl.querySelector('.project-cover-container');
      const btn = projEl.querySelector('.view-series-btn');

      const triggerOpen = () => openSeriesModal(proj);
      cover.addEventListener('click', triggerOpen);
      btn.addEventListener('click', triggerOpen);

      projectsContainer.appendChild(projEl);
    });
  };

  /* ==========================================================================
     SERIES MODAL HANDLER
     ========================================================================== */
  const openSeriesModal = (proj) => {
    if (!seriesModal) return;

    seriesTitle.innerHTML = `${proj.title} <span class="text-stone-400 text-xl font-sans block sm:inline sm:ml-3">${proj.titleEn}</span>`;
    seriesTheme.textContent = `${proj.theme} · ${proj.location}`;
    seriesYear.textContent = proj.year;
    seriesClient.textContent = proj.client;
    seriesIntro.textContent = proj.intro;

    // Render series images
    seriesGrid.innerHTML = '';
    proj.series.forEach((photo, idx) => {
      const col = document.createElement('div');
      col.className = 'group relative overflow-hidden bg-stone-900 border border-stone-800/60 rounded-sm cursor-pointer';
      col.setAttribute('data-cursor', 'VIEW');

      col.innerHTML = `
        <div class="aspect-[4/3] overflow-hidden">
          <img 
            src="${photo.url}" 
            alt="${photo.caption}" 
            loading="lazy" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div class="p-4 bg-stone-950 flex items-center justify-between border-t border-stone-800/50">
          <span class="font-serif text-sm text-stone-200 tracking-wide">${photo.caption}</span>
          <span class="font-mono text-xs text-stone-400">0${idx + 1}</span>
        </div>
      `;

      // Clicking series image can preview
      col.addEventListener('click', () => {
        // Temporarily populate lightbox with this series image
        lightboxImg.src = photo.url;
        lightboxCounter.textContent = `0${idx + 1} / 0${proj.series.length}`;
        lightboxCategory.textContent = proj.theme;
        lightboxTitle.innerHTML = `${proj.title} · ${photo.caption}`;
        lightboxLocation.textContent = proj.location;
        lightboxStory.textContent = proj.curatorNote;
        lightboxCamera.textContent = "Medium Format / Leica";
        lightboxLens.textContent = "Prime Lens";
        lightboxSettings.textContent = "Editorial Archival";
        lightboxFocal.textContent = "Fine Art";
        lightboxModal.classList.add('active');
      });

      seriesGrid.appendChild(col);
    });

    seriesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeSeriesModal = () => {
    if (!seriesModal) return;
    seriesModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (seriesClose) seriesClose.addEventListener('click', closeSeriesModal);
  if (seriesModal) {
    seriesModal.addEventListener('click', (e) => {
      if (e.target === seriesModal) closeSeriesModal();
    });
  }

  /* ==========================================================================
     INTERSECTION OBSERVER (SCROLL REVEAL)
     ========================================================================== */
  const initScrollObserver = () => {
    const revealItems = document.querySelectorAll('.reveal-item:not(.revealed)');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(el => observer.observe(el));
  };

  /* ==========================================================================
     CONTACT FORM & TOAST
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  const showToast = (message, duration = 3500) => {
    if (!toastNotice) return;
    toastMessage.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, duration);
  };

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'studio@ansellin-photo.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('電子郵件已複製到剪貼簿 (Copied to Clipboard)');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-stone-900 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        傳送委託詢問中...
      `;

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast('感謝您的詢問，攝影師 Ansel Lin 將於 24 小時內與您聯繫。');
      }, 1200);
    });
  }

  /* ==========================================================================
     BACK TO TOP
     ========================================================================== */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initial runs
  renderGallery(filteredItems);
  renderProjects();
  initScrollObserver();
});
