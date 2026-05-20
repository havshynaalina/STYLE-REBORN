(() => {

    const refs = {
        openModalBtns: document.querySelectorAll("[data-modal-open]"), 
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        modalImg: document.querySelector("[data-modal-img]")
    };

    refs.openModalBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {

            refs.modalImg.src = e.target.src;
            refs.modalImg.alt = e.target.alt;
            toggleModal();
        });
    });

    refs.closeModalBtn.addEventListener("click", toggleModal);


    refs.modal.addEventListener("click", (e) => {
        if (e.target === refs.modal) {
            toggleModal();
        }
    });

    function toggleModal() {
        // Перемикаємо твій клас
        refs.modal.classList.toggle("is-hidden");

        if (!refs.modal.classList.contains("is-hidden")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(sec => sec !== null);

    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Видаляємо .active у всіх посилань
                navLinks.forEach(link => link.classList.remove("active"));
          
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
})();