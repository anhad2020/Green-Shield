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
    { label: 'Problem', href: '#problem' },
    { label: 'Project', href: '#project' },
    { label: 'Solution', href: '#solution' },
    { label: 'Team', href: '#team' }
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
      src: '/assets/greenshield-final-film.png',
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
      src: '/assets/greenshield-raw-materials.png',
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
      src: '/assets/greenshield-steps-casting.png',
      fullPosterSrc: '/assets/greenshield-poster-full.png',
      figureLabel: 'Figure 3.0',
      caption: 'Standard Operating Procedure (SOP): Film Casting, Drying & Final Active Packaging Formation',
      alt: 'Step-by-step laboratory procedure for casting and drying Green Shield active film'
    }
  },
  
  footer: {
    wordmark: 'GREEN SHIELD',
    institutionLine: 'Parivartan &bull; Biotech Block, Chandigarh College of Technology (CCT), CGC',
    descriptor: 'Green Shield is an academic and environmental sustainability project presented at Parivartan. Developed at the Department of Biotechnology, CCT, CGC.',
    copyrightYear: '2025'
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

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleRouting);
  
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });
  
  handleRouting();
  setupScrollSpy();
});
