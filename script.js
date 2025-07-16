import { playlist } from "./playlist.js"

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
    } else {
      // For general elements, you might want to remove 'is-visible' if they scroll out
      // but for the phone mockup, we want it to stay animated once it's done.
      // The 'unobserve' call above handles preventing re-animation for phone-mockup.
      // For other elements, if you want them to re-animate on re-scroll, keep this:
      // entry.target.classList.remove("is-visible");
      // For skill items, reset their individual animations if they leave view and you want them to re-animate
      // if (entry.target.classList.contains("skill-item")) {
      //   const skillListItems = entry.target.querySelectorAll("li");
      //   skillListItems.forEach((item) => {
      //     item.style.animation = ""; // Clear animation property
      //     item.style.opacity = "0";
      //     item.style.transform = "translateX(-20px)";
      //   });
      // }
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
function initForm() {
  const form = document.querySelector(".contact-form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const submitBtn = form.querySelector(".btn-primary")
    const originalText = submitBtn.querySelector("span").textContent

    // Simulate form submission
    submitBtn.querySelector("span").textContent = "Sending..."
    submitBtn.disabled = true

    fetch("http://localhost:8000/contact", {
      // Replace with your FastAPI backend URL
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // For Form(...) in FastAPI
      },
      body: new URLSearchParams(new FormData(form)).toString(), // Convert form data to URL-encoded string
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          submitBtn.querySelector("span").textContent = data.message
        } else {
          submitBtn.querySelector("span").textContent = "Message Sent! ✨"
        }
        setTimeout(() => {
          submitBtn.querySelector("span").textContent = originalText
          submitBtn.disabled = false
          form.reset()
        }, 2000)
      })
      .catch((error) => {
        console.error("Error:", error)
        submitBtn.querySelector("span").textContent = "Error sending message 😔"
        setTimeout(() => {
          submitBtn.querySelector("span").textContent = originalText
          submitBtn.disabled = false
        }, 2000)
      })
  })
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
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide luc="lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
      document.getElementById("albumArt").classList.remove("playing")
    }
  }

  // Initialize with the home screen active (index 0)
  showApp(0)

  // CV Button functionality: Open external link
  if (viewCvButton) {
    viewCvButton.addEventListener("click", () => {
      // Replace with your actual Google Drive or cloud storage link
      window.open("https://docs.google.com/document/d/1_YOUR_CV_LINK_HERE/edit?usp=sharing", "_blank")
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
  initForm()
  initPhoneMockupInteractivity() // Initialize phone mockup interactivity

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

  // Project cards hover effect
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.01)" // Match new CSS hover
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })
})
