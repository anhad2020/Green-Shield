/**
 * Biotech Block Project - Main Script
 * Project: Green Shield: Nature-Inspired Active Packaging
 * Event / Context: Parivartan | Chandigarh College of Technology (CCT), CGC
 * Technology: Vanilla JavaScript (ES6+)
 */

'use strict';

/**
 * ============================================================================
 * EDITABLE PROJECT CONTENT REPOSITORY
 * ============================================================================
 * Authentic project details for Green Shield: Nature-Inspired Active Packaging.
 */
const PROJECT_CONTENT = {
  meta: {
    siteTitle: 'Green Shield: Nature-Inspired Active Packaging | Parivartan - CCT, CGC',
    privacyTitle: 'Privacy Policy | Green Shield Project',
    termsTitle: 'Terms and Conditions | Green Shield Project',
    institution: 'Chandigarh College of Technology (CCT)',
    group: 'Chandigarh Group of Colleges (CGC)',
    department: 'Department of Biotechnology',
    initiative: 'Parivartan',
    projectTitle: 'Green Shield: Nature-Inspired Active Packaging',
    logoSrc: '/assets/greenshield-logo-official.png'
  },
  
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'Process', href: '#process' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Market Analysis', href: '#market' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ],
  
  hero: {
    kicker: 'Parivartan &bull; Biotech Block, Chandigarh College of Technology (CCT), CGC',
    title: 'Green Shield: Nature-Inspired Active Packaging',
    description: 'A sustainable packaging innovation developing biodegradable starch-gelatin and cellulose-gelatin films incorporated with natural plant extracts possessing antimicrobial properties to curb contamination and minimize reliance on conventional plastic packaging.',
    primaryCtaText: 'Explore Project Overview',
    primaryCtaHref: '#project',
    secondaryCtaText: 'Review Problem Statement',
    secondaryCtaHref: '#problem',
    imageSlot: {
      src: '/assets/greenshield-final-film-v2.png',
      caption: 'Figure 1.0: Authentic Green Shield Active Packaging Film Prototype',
      details: 'Translucent biodegradable biopolymer film incorporated with antimicrobial neem extract and agricultural pectin.',
      alt: 'Authentic Green Shield active packaging film prototype held by researcher'
    }
  },

  team: {
    sectionEyebrow: 'Research Cohort & Mentorship',
    sectionTitle: 'Project Investigators & Guidance',
    leadText: 'Developed by biotechnology student researchers under faculty mentorship at the Biotech Block for Parivartan.',
    mentor: {
      name: 'Mr. Bhairav Prasad',
      role: 'Project Mentor',
      affiliation: 'Department of Biotechnology, CCT, CGC'
    },
    leaders: [
      {
        name: 'Japji Sandhu',
        role: 'Team Leader',
        focus: 'Biopolymer Matrix Formulation & Formulation Design'
      },
      {
        name: 'Pallavi Rathour',
        role: 'Team Leader',
        focus: 'Phytochemical Extraction & Antimicrobial Screening'
      }
    ],
    members: [
      {
        name: 'Harmanjot Kaur',
        role: 'Research Team Member',
        focus: 'Film Characterization & Biodegradability Assessment'
      },
      {
        name: 'Krishika Sharma',
        role: 'Research Team Member',
        focus: 'Bioassay Testing & Analytical Documentation'
      }
    ]
  },
  
  problemStatement: {
    sectionEyebrow: 'Environmental & Packaging Challenges',
    sectionTitle: 'Problem Statement',
    leadText: 'Addressing two converging global crises: persistent single-use plastic packaging waste and food spoilage caused by microbial contamination.',
    contextParagraph: 'Conventional petroleum-derived polymers take centuries to degrade, clogging terrestrial and marine ecosystems. Concurrently, inadequate packaging barriers lead to premature microbial proliferation, resulting in substantial food losses during transit and storage.',
    problems: [
      {
        id: 'P01',
        tag: 'Plastic Waste Burden',
        title: 'Single-Use Plastic Persistence',
        description: 'Traditional synthetic polymers (LDPE, PP, PET) lack biodegradability, generating mounting environmental pollution, microplastic dispersion, and carbon emissions.',
        note: 'Drive towards renewable bio-based alternatives'
      },
      {
        id: 'P02',
        tag: 'Microbial Spoilage',
        title: 'Microbial Proliferation & Spoilage',
        description: 'Standard passive packaging acts merely as a physical barrier without active inhibitory actions against foodborne bacteria, molds, and fungi, leading to reduced product shelf life.',
        note: 'Requires functionalized antimicrobial properties'
      },
      {
        id: 'P03',
        tag: 'Safety & Chemical Leaching',
        title: 'Synthetic Preservative Concerns',
        description: 'Direct chemical preservation and synthetic additives in packaging risk consumer toxicity, increasing demand for non-toxic, plant-derived, food-grade bioactive compounds.',
        note: 'Focus on natural bioactive plant extracts'
      }
    ],
    figureSlot: {
      id: 'problem-evidence-slot',
      figureLabel: 'Figure 1.0',
      caption: 'Reserved slot for comparative shelf-life decay curves and synthetic plastic waste environmental impact benchmarks.'
    }
  },
  
  projectOverview: {
    sectionEyebrow: 'Biomaterials & Innovation',
    sectionTitle: 'Project Overview',
    leadText: 'Green Shield integrates biopolymer engineering with botanical active extracts to produce an eco-friendly, biodegradable active packaging film.',
    introText: 'By synergizing starch, cellulose, and gelatin with antimicrobial botanical extracts, the project creates active packaging films that actively preserve packaged perishables while returning harmlessly to the soil after disposal.',
    objectives: [
      {
        text: 'Synthesize biodegradable biopolymer films using starch-gelatin and cellulose-gelatin matrix blends.',
        status: 'Matrix Formulation'
      },
      {
        text: 'Identify and integrate potent natural plant extracts with proven broad-spectrum antimicrobial activity.',
        status: 'Phytochemical Infusion'
      },
      {
        text: 'Evaluate mechanical properties, barrier functionality (water vapor and oxygen permeability), and soil biodegradability.',
        status: 'Film Characterization'
      },
      {
        text: 'Assess shelf-life extension on target packaged perishable food models in real-time storage trials.',
        status: 'Bioassay & Shelf-Life Trials'
      }
    ],
    deliverables: [
      {
        name: 'Active Biodegradable Film Prototype',
        spec: 'Homogeneous, flexible starch-gelatin / cellulose-gelatin film sheets with antimicrobial infusion.'
      },
      {
        name: 'Antimicrobial Inhibition Profile',
        spec: 'Zone-of-inhibition assays and microbial count logging against standard food spoilage organisms.'
      },
      {
        name: 'Biodegradability & Soil Degradation Log',
        spec: 'Quantitative mass loss documentation in simulated soil conditions demonstrating rapid environmental breakdown.'
      }
    ],
    visualSlot: {
      src: '/assets/greenshield-raw-materials-v2.png',
      figureLabel: 'Figure 2.0',
      caption: 'Sustainable Raw Materials: Cornstarch, Glycerol, Pectin, Acetic Acid, Neem Extract, Distilled Water',
      alt: 'Sustainable raw materials for Green Shield active packaging film'
    }
  },
  
  proposedSolution: {
    sectionEyebrow: 'Active Packaging Methodology',
    sectionTitle: 'Proposed Solution',
    leadText: 'A nature-inspired, multi-stage bioprocessing methodology combining bio-based polymer casting with botanical antimicrobial infusion.',
    phases: [
      {
        step: '01',
        title: 'Biopolymer Matrix Blending & Casting',
        description: 'Formulation of biodegradable starch-gelatin and cellulose-gelatin composite solutions with optimal plasticizer concentration (glycerol) to achieve high mechanical tensile strength and flexibility.'
      },
      {
        step: '02',
        title: 'Natural Botanical Extract Incorporation',
        description: 'Extraction and controlled dispersion of natural plant-derived bioactive compounds (such as neem extract and orange peel pectin) into the matrix to impart active antimicrobial defense without compromising film uniformity.'
      },
      {
        step: '03',
        title: 'Film Characterization & Shelf-Life Validation',
        description: 'Comprehensive evaluation of barrier properties, optical transparency, antimicrobial disc diffusion efficacy against target pathogens, and comparative perishable food shelf-life storage trials.'
      }
    ],
    diagramSlot: {
      src: '/assets/greenshield-steps-casting-v2.png',
      fullPosterSrc: '/assets/greenshield-infographic-v2.png',
      figureLabel: 'Figure 3.0',
      caption: 'Standard Operating Procedure (SOP): Film Casting, Drying & Final Active Packaging Formation',
      alt: 'Step-by-step laboratory procedure for casting and drying Green Shield active film'
    }
  },
  
  footer: {
    wordmark: 'GREEN SHIELD',
    institutionLine: 'Parivartan &bull; Biotech Block, Chandigarh College of Technology (CCT), CGC',
    descriptor: 'Green Shield is an academic and environmental sustainability project presented at Parivartan. Developed at the Department of Biotechnology, CCT, CGC.',
    copyrightYear: ''
  }
};

/**
 * ============================================================================
 * VIEW ROUTING CONTROLLER (Single-Page Hash Routing)
 * ============================================================================
 */
function handleRouting() {
  const hash = window.location.hash.toLowerCase();
  
  const mainView = document.getElementById('main-website-view');
  const privacyView = document.getElementById('privacy-view');
  const termsView = document.getElementById('terms-view');
  
  if (!mainView || !privacyView || !termsView) return;
  
  closeMobileNav();
  
  if (hash === '#privacy-policy') {
    mainView.classList.add('hidden-view');
    termsView.classList.remove('active-view');
    privacyView.classList.add('active-view');
    
    document.title = PROJECT_CONTENT.meta.privacyTitle;
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const heading = document.getElementById('privacy-heading');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus();
    }
  } else if (hash === '#terms-and-conditions') {
    mainView.classList.add('hidden-view');
    privacyView.classList.remove('active-view');
    termsView.classList.add('active-view');
    
    document.title = PROJECT_CONTENT.meta.termsTitle;
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const heading = document.getElementById('terms-heading');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus();
    }
  } else {
    // Return to main page view
    privacyView.classList.remove('active-view');
    termsView.classList.remove('active-view');
    mainView.classList.remove('hidden-view');
    
    document.title = PROJECT_CONTENT.meta.siteTitle;
    
    if (hash && hash !== '#' && hash !== '#home') {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else if (hash === '#' || hash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  updateActiveNavLink();
}

/**
 * Update active state on navigation links according to current location/scroll.
 */
function updateActiveNavLink() {
  const currentHash = window.location.hash.toLowerCase() || '#home';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Automatically close mobile navbar toggle dropdown after link click.
 */
function closeMobileNav() {
  const navbarCollapse = document.getElementById('navbarBiotechContent');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    if (window.bootstrap && window.bootstrap.Collapse) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        navbarCollapse.classList.remove('show');
      }
    } else {
      navbarCollapse.classList.remove('show');
    }
  }
}

/**
 * Setup IntersectionObserver for active section highlighting on scroll.
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  if (!('IntersectionObserver' in window) || sections.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    if (window.location.hash === '#privacy-policy' || window.location.hash === '#terms-and-conditions') {
      return;
    }
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);
        if (activeLink) {
          document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
}

/**
 * Escape HTML utility for secure client rendering of proposal entries
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Proposals Data Store (localStorage persistence)
 */
const PROPOSALS_STORAGE_KEY = 'greenshield_proposals';

function getStoredProposals() {
  try {
    const raw = localStorage.getItem(PROPOSALS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Unable to parse stored proposals from localStorage:', err);
    return [];
  }
}

function saveProposals(proposals) {
  try {
    localStorage.setItem(PROPOSALS_STORAGE_KEY, JSON.stringify(proposals));
  } catch (err) {
    console.error('Failed to write proposals to localStorage:', err);
  }
}

function updateProposalBadges() {
  const proposals = getStoredProposals();
  const count = proposals.length;
  
  const badge = document.getElementById('proposalsCountBadge');
  const linkBadge = document.getElementById('proposalsCountLink');
  
  if (badge) badge.textContent = count;
  if (linkBadge) linkBadge.textContent = count;
}

function renderProposalsList() {
  const container = document.getElementById('proposalsListContainer');
  if (!container) return;

  const proposals = getStoredProposals();
  if (proposals.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 text-muted small" id="noProposalsMessage">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-2 text-secondary opacity-50">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
        <div>No collaboration proposals recorded yet in this browser.</div>
        <div class="mt-1 text-secondary opacity-75">Submit an inquiry through the form to log a test proposal.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = proposals.map((item, idx) => `
    <div class="proposal-card-item" data-proposal-id="${escapeHtml(item.id)}">
      <div class="proposal-card-header">
        <div class="d-flex align-items-center gap-2">
          <span class="proposal-id-badge">${escapeHtml(item.id)}</span>
          <span class="proposal-meta-time">${escapeHtml(item.timestamp || item.date || 'Recent')}</span>
        </div>
        <button type="button" class="btn btn-sm btn-outline-danger py-0 px-2 delete-single-proposal-btn" data-index="${idx}" style="font-size: 0.72rem;" title="Delete this entry">
          Delete
        </button>
      </div>
      <div class="proposal-body-subject">${escapeHtml(item.subject)}</div>
      <div class="proposal-body-inquirer">
        <strong>${escapeHtml(item.name)}</strong> &bull; 
        <span class="text-dark">${escapeHtml(item.org || 'Not specified')}</span> &bull; 
        <a href="mailto:${encodeURIComponent(item.email)}?subject=Re:%20${encodeURIComponent(item.subject)}" class="text-success text-decoration-none fw-semibold">
          ${escapeHtml(item.email)}
        </a>
      </div>
      <div class="proposal-body-text">${escapeHtml(item.message)}</div>
      <div class="proposal-actions">
        <a href="mailto:${encodeURIComponent(item.email)}?subject=Re:%20${encodeURIComponent(item.subject)}" class="btn btn-sm btn-outline-success py-1 px-2" style="font-size: 0.76rem;">
          Reply via Email &rarr;
        </a>
        <span class="text-muted small" style="font-size: 0.72rem;">Saved to browser storage</span>
      </div>
    </div>
  `).join('');

  // Attach delete handlers for individual items
  container.querySelectorAll('.delete-single-proposal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      const currentList = getStoredProposals();
      if (!isNaN(idx) && idx >= 0 && idx < currentList.length) {
        currentList.splice(idx, 1);
        saveProposals(currentList);
        updateProposalBadges();
        renderProposalsList();
      }
    });
  });
}

function exportProposalsCsv() {
  const proposals = getStoredProposals();
  if (proposals.length === 0) {
    alert('No collaboration proposals have been submitted yet to export.');
    return;
  }

  const headers = ['ID', 'Timestamp', 'Name', 'Email', 'Organisation', 'Subject', 'Message'];
  const rows = proposals.map(p => [
    `"${(p.id || '').replace(/"/g, '""')}"`,
    `"${(p.timestamp || p.date || '').replace(/"/g, '""')}"`,
    `"${(p.name || '').replace(/"/g, '""')}"`,
    `"${(p.email || '').replace(/"/g, '""')}"`,
    `"${(p.org || '').replace(/"/g, '""')}"`,
    `"${(p.subject || '').replace(/"/g, '""')}"`,
    `"${(p.message || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', url);
  downloadLink.setAttribute('download', `greenshield_collaboration_proposals_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

function clearAllProposals() {
  const proposals = getStoredProposals();
  if (proposals.length === 0) {
    return;
  }
  if (confirm(`Are you sure you want to clear all ${proposals.length} recorded proposals? This cannot be undone.`)) {
    localStorage.removeItem(PROPOSALS_STORAGE_KEY);
    updateProposalBadges();
    renderProposalsList();
  }
}

/**
 * Setup Contact Form Submission, Storage & Client-Side Validation
 */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('contactStatusAlert');
  if (!form || !alertBox) return;

  // Initialize initial proposal count & list
  updateProposalBadges();
  renderProposalsList();

  // Attach CSV export & clear handlers
  const exportBtn = document.getElementById('exportProposalsCsvBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportProposalsCsv);
  }

  const clearBtn = document.getElementById('clearProposalsBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearAllProposals);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const orgInput = document.getElementById('contactOrg');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    let isValid = true;

    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (!input) return;
      if (!input.value.trim() || (input.type === 'email' && !input.checkValidity())) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      }
    });

    if (!isValid) return;

    // Build proposal object
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newProposal = {
      id: 'GS-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      timestamp: formattedDate,
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      org: orgInput && orgInput.value.trim() ? orgInput.value.trim() : 'Academic / External Partner',
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    };

    // Save to localStorage
    const currentProposals = getStoredProposals();
    currentProposals.unshift(newProposal);
    saveProposals(currentProposals);

    // Update UI
    updateProposalBadges();
    renderProposalsList();

    // Display confirmation
    alertBox.classList.add('show-success');
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Reset form
    form.reset();
    setTimeout(() => {
      [nameInput, emailInput, orgInput, subjectInput, messageInput].forEach(input => {
        if (input) input.classList.remove('is-valid');
      });
    }, 4000);
  });
}

/**
 * Setup IntersectionObserver for heading pop-up entrance animation.
 */
function setupHeadingPopObserver() {
  const headings = document.querySelectorAll('.section-title, .hero-title, .section-eyebrow, .card-title-custom, .editorial-card, .methodology-step, .team-card, .process-stage-card, .pillar-card, .testing-card, .customer-segment-card, .sdg-card, .contact-section-card');
  if (!('IntersectionObserver' in window) || headings.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('topic-pop-reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  headings.forEach(heading => observer.observe(heading));
}

/**
 * Setup Specimen Switcher for authentic prototype viewer in Hero
 */
function setupPrototypeSwitcher() {
  const switchBtns = document.querySelectorAll('.prototype-view-btn');
  const mainImg = document.getElementById('heroPrototypeMainImg');
  const captionTitle = document.getElementById('heroPrototypeCaptionTitle');
  const captionText = document.getElementById('heroPrototypeCaptionText');

  if (!switchBtns.length || !mainImg) return;

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetImg = btn.getAttribute('data-img');
      const targetTitle = btn.getAttribute('data-title');
      const targetDesc = btn.getAttribute('data-desc');

      if (targetImg && mainImg.src !== targetImg) {
        mainImg.style.opacity = '0.4';
        mainImg.style.transition = 'opacity 0.15s ease';
        setTimeout(() => {
          mainImg.src = targetImg;
          mainImg.style.opacity = '1';
        }, 150);
      }

      if (captionTitle && targetTitle) {
        captionTitle.textContent = targetTitle;
      }
      if (captionText && targetDesc) {
        captionText.textContent = targetDesc;
      }

      switchBtns.forEach(b => b.classList.remove('active', 'border-success', 'bg-light'));
      btn.classList.add('active', 'border-success', 'bg-light');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleRouting);
  
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-nav-cta');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });
  
  handleRouting();
  setupScrollSpy();
  setupHeadingPopObserver();
  setupContactForm();
  setupPrototypeSwitcher();
});
