 /*
  AMARA DESIGN — JAVASCRIPT

  CUSTOMIZATION:
  1. Change the WhatsApp number below if needed.
  2. Change project information inside PROJECTS.
  3. Project images must match the filenames in /assets.
  4. No backend is required.
*/


/* ========================================
   WHATSAPP SETTINGS
======================================== */

/*
  IMPORTANT:
  WhatsApp numbers must be written with:
  country code + number

  Do NOT include:
  +
  spaces
  brackets
  dashes
*/

const WHATSAPP_NUMBER = "12349137679230";


/* ========================================
   WHATSAPP HELPER
======================================== */

function openWhatsApp(message) {

  const encodedMessage =
    encodeURIComponent(message);

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* ========================================
   WHATSAPP BUTTONS
======================================== */

const whatsappLinks =
  document.querySelectorAll(
    ".whatsapp-link"
  );


whatsappLinks.forEach(function (link) {

  link.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      const message =
        link.dataset.message ||
        "Hi Amara! I'd like to discuss a design project with you.";

      openWhatsApp(message);

    }
  );

});


/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuToggle =
  document.querySelector(".menu-toggle");

const nav =
  document.querySelector(".nav");


if (menuToggle && nav) {

  menuToggle.addEventListener(
    "click",
    function () {

      const isOpen =
        nav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

      menuToggle.textContent =
        isOpen ? "×" : "☰";

    }
  );


  /* Close menu after clicking a link */

  const navLinks =
    nav.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "☰";

      }
    );

  });

}


/* ========================================
   SMOOTH SCROLL
======================================== */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(
            targetId
          );

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* ========================================
   ACTIVE NAVIGATION LINK
======================================== */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navigationLinks =
  document.querySelectorAll(
    ".nav-link"
  );


const observer =
  new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (!entry.isIntersecting) {
          return;
        }

        navigationLinks.forEach(
          function (link) {

            link.classList.remove(
              "active"
            );

          }
        );

        const activeLink =
          document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
          );

        if (activeLink) {

          activeLink.classList.add(
            "active"
          );

        }

      });

    },
    {
      rootMargin:
        "-30% 0px -60% 0px"
    }
  );


sections.forEach(function (section) {

  observer.observe(section);

});


/* ========================================
   PROJECT INFORMATION
======================================== */

/*
  These details appear when someone taps
  "View case".
*/

const PROJECTS = {

  luxe: {

    title: "Luxe Muse",

    tag: "Fashion Boutique",

    image: "assets/luxe-muse.png",

    description:
      "A sophisticated visual identity created for a modern fashion boutique that wants to look premium, elegant and memorable.",

    points: [
      "Luxury-focused visual direction",
      "Fashion social media concepts",
      "Promotional graphics",
      "Elegant brand presentation"
    ]

  },


  glow: {

    title: "Amara Glow",

    tag: "Skincare Brand",

    image: "assets/amara-glow.png",

    description:
      "A soft and polished beauty identity designed to make a skincare brand feel fresh, feminine and trustworthy.",

    points: [
      "Beauty brand identity",
      "Social media graphics",
      "Packaging direction",
      "Promotional content"
    ]

  },


  velora: {

    title: "Velora Studio",

    tag: "Beauty Salon",

    image: "assets/velora-studio.png",

    description:
      "A luxury salon concept designed around a refined and modern beauty experience.",

    points: [
      "Salon branding",
      "Beauty service graphics",
      "Social media templates",
      "Luxury visual direction"
    ]

  },


  mama: {

    title: "Mama T’s Kitchen",

    tag: "Food & Snacks",

    image: "assets/mamas-kitchen.png",

    description:
      "A warm and welcoming food brand concept designed for flour-based foods and snacks.",

    points: [
      "Food brand identity",
      "Menu and promotional graphics",
      "Social media designs",
      "Packaging direction"
    ]

  },


  yumisa: {

    title: "Yumisa Bakes",

    tag: "Bakery & Pastries",

    image: "assets/yumisa-bakes.png",

    description:
      "A playful bakery identity designed to make sweet products look attractive across social media and promotional materials.",

    points: [
      "Bakery branding",
      "Product promotion",
      "Social media templates",
      "Packaging concepts"
    ]

  },


  crave: {

    title: "Crave Corner",

    tag: "Pizza & Snacks",

    image: "assets/crave-corner.png",

    description:
      "A bold and energetic food identity for a pizza and flour-based snack business.",

    points: [
      "Food branding",
      "Menu concepts",
      "Social media graphics",
      "Promotional designs"
    ]

  },


  bright: {

    title: "Bright Minds Academy",

    tag: "Educational Classes",

    image: "assets/bright-minds.png",

    description:
      "A clean and trustworthy education brand designed for classes, students and parents.",

    points: [
      "Education branding",
      "Class promotional flyers",
      "Social media templates",
      "Student-focused visuals"
    ]

  },


  learnhub: {

    title: "LearnHub Tutors",

    tag: "Tutoring Brand",

    image: "assets/learnhub-tutors.png",

    description:
      "A friendly tutoring brand concept designed to communicate learning, confidence and professionalism.",

    points: [
      "Tutoring identity",
      "Educational flyers",
      "Social media graphics",
      "Promotional materials"
    ]

  },


  future: {

    title: "FutureStep Academy",

    tag: "Learning Centre",

    image: "assets/futurestep-academy.png",

    description:
      "A modern learning-centre identity created to appeal to students and parents.",

    points: [
      "Learning-centre branding",
      "Class announcements",
      "Educational social content",
      "Promotional graphics"
    ]

  }

};


/* ========================================
   MODAL ELEMENTS
======================================== */

const modal =
  document.querySelector("#caseModal");

const modalImage =
  document.querySelector("#modalImage");

const modalTitle =
  document.querySelector("#modalTitle");

const modalTag =
  document.querySelector("#modalTag");

const modalDescription =
  document.querySelector("#modalDescription");

const modalList =
  document.querySelector("#modalList");

const modalWhatsapp =
  document.querySelector("#modalWhatsapp");


/* ========================================
   OPEN PROJECT MODAL
======================================== */

function openProject(projectId) {

  const project =
    PROJECTS[projectId];

  if (!project || !modal) {
    return;
  }


  /* Project image */

  modalImage.src =
    project.image;

  modalImage.alt =
    `${project.title} project preview`;


  /* Project information */

  modalTitle.textContent =
    project.title;

  modalTag.textContent =
    project.tag;

  modalDescription.textContent =
    project.description;


  /* Clear old list */

  modalList.innerHTML = "";


  /* Add project points */

  project.points.forEach(
    function (point) {

      const li =
        document.createElement("li");

      li.textContent =
        point;

      modalList.appendChild(li);

    }
  );


  /* WhatsApp CTA */

  const message =
    `Hi Amara! I saw your ${project.title} project and I'd like to discuss a similar design project.`;

  modalWhatsapp.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


  /* Open modal */

  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  /* Prevent background scrolling */

  document.body.style.overflow =
    "hidden";

}


/* ========================================
   CLOSE PROJECT MODAL
======================================== */

function closeProjectModal() {

  if (!modal) {
    return;
  }

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


/* ========================================
   VIEW CASE BUTTONS
======================================== */

document
  .querySelectorAll(".project-card")
  .forEach(function (card) {

    const button =
      card.querySelector(".case-btn");

    const projectId =
      card.dataset.project;


    if (!button || !projectId) {
      return;
    }


    button.addEventListener(
      "click",
      function () {

        openProject(projectId);

      }
    );

  });


/* ========================================
   CLOSE MODAL BUTTONS
======================================== */

document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach(function (element) {

    element.addEventListener(
      "click",
      closeProjectModal
    );

  });


/* ========================================
   CLOSE MODAL WITH ESCAPE
======================================== */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape"
    ) {

      closeProjectModal();

    }

  }
);


/* ========================================
   CONTACT FORM
======================================== */

const contactForm =
  document.querySelector(
    "#contactForm"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      /* Get form values */

      const name =
        document
          .querySelector("#name")
          .value
          .trim();

      const email =
        document
          .querySelector("#email")
          .value
          .trim();

      const message =
        document
          .querySelector("#message")
          .value
          .trim();


      /* Validate */

      if (
        !name ||
        !email ||
        !message
      ) {

        alert(
          "Please fill in all the fields."
        );

        return;

      }


      /* Build WhatsApp message */

      const whatsappMessage =
        `Hi Amara!

My name is ${name}.

My email is ${email}.

I'd like to discuss a design project with you.

Project details:
${message}`;


      /* Open WhatsApp */

      openWhatsApp(
        whatsappMessage
      );


      /* Reset form */

      contactForm.reset();

    }
  );

}


/* ========================================
   CURRENT YEAR
======================================== */

const yearElement =
  document.querySelector("#year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* ========================================
   IMAGE FALLBACK
======================================== */

/*
  If an image is missing, replace it with
  a simple placeholder instead of showing
  a broken-image icon.
*/

document
  .querySelectorAll("img")
  .forEach(function (image) {

    image.addEventListener(
      "error",
      function () {

        if (
          image.dataset.fallbackUsed
        ) {
          return;
        }

        image.dataset.fallbackUsed =
          "true";

        const text =
          encodeURIComponent(
            image.alt ||
            "Amara Design"
          );

        image.src =
          `https://placehold.co/600x400?text=${text}`;

      }
    );

  });


/* ========================================
   FINISHED
======================================== */