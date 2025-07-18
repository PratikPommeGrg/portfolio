import { playlist } from "./playlist.js"
import { projectsData } from "./projects.js"

// Smooth scrolling and navigation
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// Navigation active state
function updateActiveNav() {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")
  const navBlob = document.querySelector(".nav-blob")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
      // Get bounding rectangles for precise positioning
      const linkRect = link.getBoundingClientRect()
      const navRect = link.closest(".floating-nav").getBoundingClientRect()

      // Set blob width to match the active link's width
      navBlob.style.width = `${linkRect.width}px`
      // Set blob height to match the active link's height
      navBlob.style.height = `${linkRect.height}px`
      // Position the blob's left edge to match the active link's left edge, relative to the nav container
      navBlob.style.transform = `translateX(${linkRect.left - navRect.left}px)`
      // Position the blob's top edge to match the active link's top edge, relative to the nav container
      navBlob.style.top = `${linkRect.top - navRect.top}px`
    }
  })
}

// Update navbar overlay transparency on scroll
function updateNavbarOverlayTransparency() {
  const navbarOverlay = document.querySelector(".navbar-blur-overlay")
  if (navbarOverlay) {
    const scrollY = window.scrollY
    const fadeStart = 0 // When fade begins
    const fadeEnd = 150 // When fade completes (150px scroll)
    let opacity = 1

    if (scrollY > fadeStart) {
      opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart)
    }

    // Clamp opacity between 0 and 1
    opacity = Math.max(0, Math.min(1, opacity))
    navbarOverlay.style.opacity = opacity
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add is-visible class for general elements
      if (!entry.target.classList.contains("is-visible")) {
        entry.target.classList.add("is-visible")
      }

      // Special handling for skill items to stagger their list elements
      if (entry.target.classList.contains("skill-item")) {
        const skillListItems = entry.target.querySelectorAll("li")
        skillListItems.forEach((item, index) => {
          // Only apply animation if not already animated
          if (!item.style.animation) {
            item.style.animation = `slideInLeftFade 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards ${index * 0.1}s`
          }
        })
      }

      // If the phone mockup is visible, trigger its internal app screen animations after a delay
      if (entry.target.classList.contains("phone-mockup")) {
        // Only trigger if the phone mockup itself hasn't been fully animated yet
        if (!entry.target.dataset.animated) {
          const phoneAnimationDuration = 1000 // 1 second for rotateIn animation
          const delayBeforeWidgets = 50 // Small buffer before widgets start animating

          setTimeout(() => {
            const homeScreen = entry.target.querySelector(".app-demo-home-screen")
            const musicWidget = entry.target.querySelector(".music-widget")
            const cvSection = entry.target.querySelector(".cv-home-section")
            const vibeText = document.querySelector(".vibe-text") // Get vibe text here

            if (homeScreen) homeScreen.classList.add("animate-in")
            if (musicWidget) {
              musicWidget.style.animationDelay = "0.2s" // Delay relative to this setTimeout
              musicWidget.classList.add("animate-in")
            }
            if (cvSection) {
              cvSection.style.animationDelay = "0.4s" // Delay relative to this setTimeout
              cvSection.classList.add("animate-in")
            }

            // Animate vibe text after phone and widgets are done
            // Max widget animation ends at 0.4s (delay) + 0.6s (duration) = 1s after this setTimeout.
            // So, vibeText animation starts 1.2s after this setTimeout.
            if (vibeText && !vibeText.dataset.animated) {
              vibeText.style.animation = `popInSmall 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards 1.2s, float 8s ease-in-out infinite 1.8s` // popInSmall then float
              vibeText.dataset.animated = "true"
            }

            entry.target.dataset.animated = "true"
            observer.unobserve(entry.target) // Stop observing phone mockup
          }, phoneAnimationDuration + delayBeforeWidgets)
        }
      }
    }
  })
}, observerOptions)

// Animate elements on scroll
function initScrollAnimations() {
  const animateElements = document.querySelectorAll(
    ".project-card, .contact-card, .profile-card, .skill-item, .contact-form-container, .phone-mockup", // Added phone-mockup here
  )

  animateElements.forEach((el) => {
    el.classList.add("animated-on-scroll") // Add base class for initial hidden state
    observer.observe(el)
  })
}

// Parallax effect for floating shapes
function initParallax() {
  const shapes = document.querySelectorAll(".floating-shape")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.3

    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.2
      shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.02}deg)`
    })
  })
}

// Form handling
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.querySelector('span').textContent;
    
    // Visual feedback
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = "Sending...";
    submitBtn.classList.add('sending');
    
    // For Formspree, we let it handle the submission
    // We just provide visual feedback
    
    setTimeout(() => {
      submitBtn.querySelector('span').textContent = "Sent! 🎉";
      submitBtn.classList.remove('sending');
      
      // Reset after 3 seconds
      setTimeout(() => {
        submitBtn.querySelector('span').textContent = originalText;
        submitBtn.disabled = false;
      
      }, 3000);
    }, 1500); // Simulate network delay
  });
}

// Phone Mockup App Demo and CV Link
function initPhoneMockupInteractivity() {
  const appDemos = document.querySelectorAll(".phone-screen .app-demo")
  const navDots = document.querySelectorAll(".phone-screen-nav .nav-dot")
  const viewCvButton = document.getElementById("viewCvButton") // Get the new CV button

  // This function is simplified as there's only one main app screen now
  function showApp(index) {
    appDemos.forEach((demo, i) => {
      demo.classList.remove("active")
      if (i === index) {
        demo.classList.add("active")
      }
    })
    navDots.forEach((dot, i) => {
      dot.classList.remove("active")
      if (i === index) {
        dot.classList.add("active")
      }
    })

    // Stop music if it's playing when switching apps (though now it's always on the home screen)
    const audioPlayer = document.getElementById("audioPlayer")
    if (audioPlayer && !audioPlayer.paused) {
      audioPlayer.pause()
      document.getElementById("playPauseButton").innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
      albumArtElement.classList.remove("playing")
    }
  }

  // Initialize with the home screen active (index 0)
  showApp(0)

  // CV Button functionality: Open external link
  if (viewCvButton) {
    viewCvButton.addEventListener("click", () => {
      // Replace with your actual Google Drive or cloud storage link
      window.open("https://drive.google.com/file/d/11rU0unuPCnIEyjEemuETAoDdN6tJarNT/view?usp=sharing", "_blank")
    })
  }

  // Music Player Functionality (adapted for widget)
  const audioPlayer = document.getElementById("audioPlayer")
  const playPauseButton = document.getElementById("playPauseButton")
  const prevButton = document.getElementById("prevButton")
  const nextButton = document.getElementById("nextButton")
  const songTitleElement = document.getElementById("songTitle")
  const artistNameElement = document.getElementById("artistName")
  const albumArtElement = document.getElementById("albumArt")
  const musicProgressBar = document.getElementById("musicProgressBar")

  let currentSongIndex = 0

  function loadSong(songIndex) {
    const song = playlist[songIndex]
    audioPlayer.src = song.src
    songTitleElement.textContent = song.title
    artistNameElement.textContent = song.artist
    albumArtElement.style.backgroundImage = `url(${song.albumArt})`
    audioPlayer.load() // Load the new song
  }

  function playPauseMusic() {
    if (audioPlayer.paused) {
      audioPlayer
        .play()
        .then(() => {
          // Playback started successfully
          playPauseButton.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
          albumArtElement.classList.add("playing")
        })
        .catch((error) => {
          // Playback failed, log error to console
          console.error("Error playing audio:", error)
          // You might want to add a user-facing message here, e.g., "Playback failed. Please try again."
        })
    } else {
      audioPlayer.pause()
      playPauseButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
      albumArtElement.classList.remove("playing")
    }
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length
    loadSong(currentSongIndex)
    audioPlayer.play()
    playPauseButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
    albumArtElement.classList.add("playing")
  }

  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length
    loadSong(currentSongIndex)
    audioPlayer.play()
    playPauseButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
    albumArtElement.classList.add("playing")
  }

  // Get the progress bar element
  const musicProgressBarContainer = document.querySelector(".progress-bar-music-small")

  // Add event listener to the progress bar container
  if (musicProgressBarContainer) {
    musicProgressBarContainer.addEventListener("click", (e) => {
      const progressBarRect = musicProgressBarContainer.getBoundingClientRect()
      const clickX = e.clientX - progressBarRect.left
      const percentage = clickX / progressBarRect.width

      if (audioPlayer.duration) {
        audioPlayer.currentTime = audioPlayer.duration * percentage
      }
    })
  }

  if (audioPlayer) {
    playPauseButton.addEventListener("click", playPauseMusic)
    prevButton.addEventListener("click", prevSong)
    nextButton.addEventListener("click", nextSong)

    audioPlayer.addEventListener("timeupdate", () => {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100
      musicProgressBar.style.width = `${progress}%`
    })

    audioPlayer.addEventListener("ended", nextSong) // Play next song when current ends

    // Load the first song on page load
    loadSong(currentSongIndex)

    // Attempt to play music automatically
    audioPlayer
      .play()
      .then(() => {
        // Playback started successfully
        playPauseButton.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
        albumArtElement.classList.add("playing")
      })
      .catch((error) => {
        // Autoplay was prevented, log error and keep button as play
        console.warn("Autoplay prevented:", error)
        playPauseButton.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
        albumArtElement.classList.remove("playing")
      })
  }
}


// --- NEW FUNCTION: Dynamically Generate Project Cards ---
function generateProjectCards() {
  const projectsGrid = document.getElementById("projectsGrid") // Get the empty grid container

  if (!projectsGrid) {
    console.error("Projects grid container not found!")
    return
  }

  projectsData.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.classList.add("project-card", "animated-on-scroll") // Add animation class

    // Create the project image section
    const projectImage = document.createElement("div")
    projectImage.classList.add("project-image")
    const phonePreview = document.createElement("div")
    phonePreview.classList.add("phone-preview")
    const phoneScreenSmall = document.createElement("div")
    phoneScreenSmall.classList.add("phone-screen-small")
    const appPreview = document.createElement("img") // Changed to img for specific images
    appPreview.classList.add("app-preview")
    appPreview.src = project.splashImage // Use the first image as the preview
    appPreview.alt = `${project.name} Preview`
    appPreview.style.borderRadius = "12px" // Match phone-screen-small border-radius

    phoneScreenSmall.appendChild(appPreview)
    phonePreview.appendChild(phoneScreenSmall)
    projectImage.appendChild(phonePreview)

    // Create the project content section
    const projectContent = document.createElement("div")
    projectContent.classList.add("project-content")

    const projectMeta = document.createElement("div")
    projectMeta.classList.add("project-meta")
    const projectType = document.createElement("span")
    projectType.classList.add("project-type")
    projectType.textContent = project.type
    const projectYear = document.createElement("span")
    projectYear.classList.add("project-year")
    projectYear.textContent = project.year
    projectMeta.appendChild(projectType)
    projectMeta.appendChild(projectYear)

    const projectTitle = document.createElement("h4")
    projectTitle.classList.add("project-title")
    projectTitle.textContent = project.name

    const projectDescription = document.createElement("p")
    projectDescription.classList.add("project-description")
    // Truncate description for card view
    const briefText = project.brief
    projectDescription.textContent = briefText.length > 120 ? briefText.substring(0, 117) + "..." : briefText

    const projectTech = document.createElement("div")
    projectTech.classList.add("project-tech")
    // Take only first 3 tech tags for card preview
    project.techStack.slice(0, 3).forEach((tech) => {
      const techTag = document.createElement("span")
      techTag.classList.add("tech-tag")
      techTag.textContent = tech
      projectTech.appendChild(techTag)
    })
    // Add an ellipsis if there are more than 3 tech tags
    if (project.techStack.length > 3) {
      const ellipsisTag = document.createElement("span")
      ellipsisTag.classList.add("tech-tag")
      ellipsisTag.textContent = "..."
      projectTech.appendChild(ellipsisTag)
    }

    const projectLinks = document.createElement("div")
    projectLinks.classList.add("project-links")
    const viewMoreLink = document.createElement("a")
    viewMoreLink.href = "#" // Will be prevented by JS
    viewMoreLink.classList.add("project-link")
    viewMoreLink.setAttribute("data-project-id", project.id) // Crucial for modal
    viewMoreLink.innerHTML = `
      <span>Details</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
    projectLinks.appendChild(viewMoreLink)

    projectContent.appendChild(projectMeta)
    projectContent.appendChild(projectTitle)
    projectContent.appendChild(projectDescription)
    projectContent.appendChild(projectTech)
    projectContent.appendChild(projectLinks)

    projectCard.appendChild(projectImage)
    projectCard.appendChild(projectContent)

    projectsGrid.appendChild(projectCard)
  })

  // After generating all cards, initialize scroll animations and modal interactivity
  initScrollAnimations() // Re-observe new elements

}

// Add this to your existing script.js file

// Modal functionality
function initProjectModal() {
  const modal = document.getElementById("projectModal")
  const closeBtn = modal.querySelector(".modal-close-btn")
  const modalOverlay = modal.querySelector(".modal-overlay")
  
  // Close modal when clicking close button or overlay
  closeBtn.addEventListener("click", closeModal)
  modalOverlay.addEventListener("click", closeModal)
  
  // Close modal when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal()
    }
  })
  
  // Set up click handlers for all "Details" buttons
  document.querySelectorAll(".project-link[data-project-id]").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const projectId = button.getAttribute("data-project-id")
      const project = projectsData.find(p => p.id === projectId)
      if (project) {
        openModal(project)
      }
    })
  })
}

function openModal(project) {
  const modal = document.getElementById("projectModal")
  const modalTitle = modal.querySelector(".modal-title")
  const modalType = modal.querySelector(".modal-type")
  const modalYear = modal.querySelector(".modal-year")
  const modalDescription = modal.querySelector(".modal-description")
  const techStackContainer = modal.querySelector(".tech-stack")
  const mainImage = modal.querySelector(".main-image")
  const thumbnailContainer = modal.querySelector(".thumbnail-container")
  const liveDemoLink = modal.querySelector(".live-demo")
  const githubLink = modal.querySelector(".github-link")
  
  // Set basic project info
  modalTitle.textContent = project.name
  modalType.textContent = project.type
  modalYear.textContent = project.year
  modalDescription.textContent = project.description || project.brief
  
  // Set tech stack
  techStackContainer.innerHTML = ""
  project.techStack.forEach(tech => {
    const techTag = document.createElement("span")
    techTag.classList.add("tech-tag")
    techTag.textContent = tech
    techStackContainer.appendChild(techTag)
  })
  
  // Set images
  thumbnailContainer.innerHTML = ""
  if (project.images && project.images.length > 0) {
    mainImage.src = project.images[0]
    mainImage.alt = `${project.name} screenshot`
    
    project.images.forEach((img, index) => {
      const thumbnail = document.createElement("div")
      thumbnail.classList.add("thumbnail")
      if (index === 0) thumbnail.classList.add("active")
      
      const thumbnailImg = document.createElement("img")
      thumbnailImg.src = img
      thumbnailImg.alt = `${project.name} screenshot ${index + 1}`
      
      thumbnail.appendChild(thumbnailImg)
      thumbnail.addEventListener("click", () => {
        mainImage.src = img
        modal.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("active"))
        thumbnail.classList.add("active")
      })
      
      thumbnailContainer.appendChild(thumbnail)
    })
  } else {
    // Fallback if no images are provided
    mainImage.src = project.splashImage || "/assets/images/default-project.jpg"
    mainImage.alt = `${project.name} preview`
  }
  
  // Set project links
  if (project.liveLink) {
    liveDemoLink.href = project.liveLink
    liveDemoLink.style.display = "flex"
  } else {
    liveDemoLink.style.display = "none"
  }
  
  if (project.githubLink) {
    githubLink.href = project.githubLink
    githubLink.style.display = "flex"
  } else {
    githubLink.style.display = "none"
  }
  
  // Show modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden" // Prevent scrolling behind modal
}

function closeModal() {
  const modal = document.getElementById("projectModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto" // Re-enable scrolling
}




// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  // Hero text animation on load
  const heroTitle = document.querySelector(".hero-title")
  const heroDescription = document.querySelector(".hero-description")
  const heroActions = document.querySelector(".hero-actions")
  // vibeText is now handled by phone-mockup's visibility

  if (heroTitle) {
    heroTitle.classList.add("is-visible")
  }
  if (heroDescription) {
    heroDescription.classList.add("is-visible")
  }
  if (heroActions) {
    heroActions.classList.add("is-visible")
  }

  updateActiveNav()
  initScrollAnimations() // This now observes phoneMockup and triggers its children's animations
  initParallax()
  initContactForm()
  initPhoneMockupInteractivity() // Initialize phone mockup interactivity
  generateProjectCards()
    initProjectModal() // Add this line

  // Update nav on scroll
  window.addEventListener("scroll", updateActiveNav)

  // Add click handlers to nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })

  // Add some playful interactions
  // Phone mockup tilt effect
  const phoneMockup = document.querySelector(".phone-mockup") // Get reference here
  if (phoneMockup) {
    phoneMockup.addEventListener("mousemove", (e) => {
      const rect = phoneMockup.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const rotateX = (y / rect.height) * 8
      const rotateY = (x / rect.width) * -8

      phoneMockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    })

    phoneMockup.addEventListener("mouseleave", () => {
      phoneMockup.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    })
  }
})

