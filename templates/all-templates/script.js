/* =========================================
   TEMPLATEHUB — ALL TEMPLATES
   ========================================= */

// =========================================
// HEADER SCROLL EFFECT
// =========================================

const header = document.querySelector(".site-header");

function handleHeaderScroll() {
  if (!header) return;

  header.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );
}

handleHeaderScroll();

window.addEventListener(
  "scroll",
  handleHeaderScroll,
  { passive: true }
);


// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      mainNav.classList.toggle("mobile-active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close menu when clicking a link

  mainNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("mobile-active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  // Close menu when clicking outside

  document.addEventListener("click", (event) => {

    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mainNav.classList.remove("mobile-active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }

  });


  // Close with Escape

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      mainNav.classList.remove("mobile-active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


// =========================================
// TEMPLATE SEARCH
// =========================================

const searchInput =
  document.querySelector("#templateSearch");

const templateCards =
  document.querySelectorAll(".template-card");

const noResults =
  document.querySelector("#noResults");

const templateCount =
  document.querySelector("#templateCount");

const filterButtons =
  document.querySelectorAll(".filter-button");

let activeCategory = "all";


// =========================================
// FILTER + SEARCH
// =========================================

function filterTemplates() {

  const query =
    searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

  let visibleCount = 0;

  templateCards.forEach((card) => {

    const name =
      card.dataset.name?.toLowerCase() || "";

    const category =
      card.dataset.category?.toLowerCase() || "";

    const content =
      card.textContent.toLowerCase();

    const matchesSearch =
      !query ||
      name.includes(query) ||
      category.includes(query) ||
      content.includes(query);

    const matchesCategory =
      activeCategory === "all" ||
      category === activeCategory;

    const shouldShow =
      matchesSearch && matchesCategory;

    card.style.display =
      shouldShow ? "" : "none";

    if (shouldShow) {
      visibleCount++;
    }

  });


  // Update template count

  if (templateCount) {

    templateCount.textContent =
      `${visibleCount} ${
        visibleCount === 1
          ? "Template"
          : "Templates"
      }`;

  }


  // Show empty state

  if (noResults) {

    noResults.hidden =
      visibleCount !== 0;

  }

}


if (searchInput) {

  searchInput.addEventListener(
    "input",
    filterTemplates
  );

}


// =========================================
// CATEGORY FILTERS
// =========================================

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    activeCategory =
      button.dataset.filter || "all";

    filterTemplates();

  });

});


// =========================================
// CTRL + K / CMD + K
// =========================================

document.addEventListener(
  "keydown",
  (event) => {

    const isShortcut =
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k";

    if (!isShortcut) return;

    event.preventDefault();

    if (searchInput) {

      searchInput.focus();

      searchInput.select();

    }

  }
);


// =========================================
// ESCAPE CLEARS SEARCH
// =========================================

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      document.activeElement === searchInput
    ) {

      if (searchInput) {

        searchInput.value = "";

        activeCategory = "all";

        filterButtons.forEach((button) => {
          button.classList.remove("active");
        });

        const allButton =
          document.querySelector(
            '.filter-button[data-filter="all"]'
          );

        if (allButton) {
          allButton.classList.add("active");
        }

        filterTemplates();

        searchInput.blur();

      }

    }

  }
);


// =========================================
// SMOOTH INTERNAL LINKS
// =========================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements =
  document.querySelectorAll(
    ".template-card, " +
    ".page-hero > .container > *, " +
    ".section-heading, " +
    ".category-filters"
  );


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            "is-visible"
          );

          observerInstance.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {
    observer.observe(element);
  });

} else {

  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });

}


// =========================================
// INITIAL FILTER
// =========================================

filterTemplates();