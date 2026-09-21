document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     Header Scroll Effect
  ========================== */

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


  /* =========================
     Mobile Menu
  ========================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mainNav =
    document.querySelector(".main-nav");

  function closeMenu() {
    if (!mainNav || !menuToggle) return;

    mainNav.classList.remove("mobile-active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  }

  if (menuToggle && mainNav) {

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen =
        mainNav.classList.toggle(
          "mobile-active"
        );

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });


    // Close after clicking navigation link

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });


    // Close when clicking outside

    document.addEventListener("click", (event) => {
      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });


    // Close with Escape

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }


  /* =========================
     Template Search
  ========================== */

  const searchInput =
    document.querySelector("#templateSearch");

  const templateCards =
    document.querySelectorAll(".template-card");

  if (searchInput && templateCards.length) {

    searchInput.addEventListener("input", () => {

      const query =
        searchInput.value
          .trim()
          .toLowerCase();

      templateCards.forEach((card) => {

        const name =
          card.dataset.name || "";

        const category =
          card.dataset.category || "";

        const content =
          card.textContent.toLowerCase();

        const matches =
          !query ||
          name.includes(query) ||
          category.includes(query) ||
          content.includes(query);

        card.style.display =
          matches ? "" : "none";
      });

    });
  }


  /* =========================
     Search Shortcut
     Ctrl / Cmd + K
  ========================== */

  document.addEventListener("keydown", (event) => {

    const isShortcut =
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k";

    if (!isShortcut) return;

    event.preventDefault();

    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  });


  /* =========================
     Scroll Reveal
  ========================== */

  const revealElements =
    document.querySelectorAll(
      [
        ".category-card",
        ".template-card",
        ".benefit-card",
        ".stats-grid > div",
        ".about-content",
        ".cta-card"
      ].join(", ")
    );

  revealElements.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(24px)";

    element.style.transition =
      "opacity 0.6s ease, transform 0.6s ease";

    element.style.transitionDelay =
      `${(index % 4) * 80}ms`;

  });


  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  /* =========================
     Placeholder Links
  ========================== */

  document
    .querySelectorAll('a[href="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {
        event.preventDefault();
      });

    });


  /* =========================
     Smooth Internal Links
  ========================== */

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


  /* =========================
     Reset Search With Escape
  ========================== */

  if (searchInput) {

    searchInput.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape"
        ) {

          searchInput.value = "";

          templateCards.forEach((card) => {
            card.style.display = "";
          });

          searchInput.blur();
        }

      }
    );

  }

});