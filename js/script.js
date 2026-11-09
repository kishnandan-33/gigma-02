/* ==========================================================
   MOBILE NAVIGATION
   ========================================================== */

(function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const navigationLinks = document.querySelectorAll(".navigation a");

  if (!menuToggle || !navigation) {
    return;
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });


  /* Close menu after clicking a navigation link */

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });


  /* Close menu when clicking outside */

  document.addEventListener("click", function (event) {
    const clickedInsideNavigation =
      navigation.contains(event.target);

    const clickedMenuButton =
      menuToggle.contains(event.target);

    if (
      !clickedInsideNavigation &&
      !clickedMenuButton
    ) {
      navigation.classList.remove("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });

})();


/* ==========================================================
   ACTIVE NAVIGATION LINK
   ========================================================== */

(function () {
  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navigationLinks = document.querySelectorAll(
    ".navigation a:not(.nav-cta)"
  );

  if (!sections.length || !navigationLinks.length) {
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {

        if (!entry.isIntersecting) {
          return;
        }

        navigationLinks.forEach(function (link) {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(
          '.navigation a[href="#' +
          entry.target.id +
          '"]'
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    },
    {
      threshold: 0.35
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

})();


/* ==========================================================
   BACK TO TOP
   ========================================================== */

(function () {
  const backToTop = document.querySelector(
    '.copyright a[href="#top"]'
  );

  if (!backToTop) {
    return;
  }

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

})();