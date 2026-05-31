// =========================
// IMAGE GALLERY MODAL
// =========================

(() => {
    const openBtns = document.querySelectorAll("[data-modal-open]");
    const closeBtn = document.querySelector("[data-modal-close]");
    const modal = document.querySelector("[data-modal]");
    const modalImg = document.querySelector("[data-modal-img]");

    if (!openBtns.length || !closeBtn || !modal || !modalImg) return;

    openBtns.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;

            modal.classList.remove("is-hidden");
            document.body.style.overflow = "hidden";
        });
    });

    function closeModal() {
        modal.classList.add("is-hidden");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", e => {
        if (e.target === modal) closeModal();
    });
})();



(() => {

    const cardData = {
        "streetwear-boy": {
            image: "img/Streetwear Boy.webp",
            title: "STREETWEAR",
            text: "A strong Dirty Y2K / McBling Streetwear aesthetic. Low-rise oversized flare jeans, a worn-out fitted tee, and a massive belt create that authentic early-2000s energy. The slim sunglasses and graffiti background push the rebellious underground vibe even further. The messy look is intentional — that’s the core of the aesthetic."
        },
        "y2k-girl": {
            image: "img/Y2K Girl.webp",
            title: "Y2K",
            text: "A classic Boho Y2K aesthetic with strong 2004–2006 fashion influence. Embroidered low-rise jeans, a fitted top, and layered accessories create an elongated and unmistakably “00s” silhouette. The outfit feels feminine yet confident, balancing softness with subtle rockstar energy."
        },
        "streetwear-girl": {
            image: "img/Streetwear Girl.webp",
            title: "STREETWEAR",
            text: "This outfit blends Cyber Y2K with modern streetwear. The denim-heavy styling, metallic sneakers, and layered accessories create a futuristic aesthetic. The bandana and glasses add early-internet and cyber-fashion influence, while the overall look stays balanced instead of overly complicated."
        },
        "y2k-boy": {
            image: "img/Y2K Boy.webp",
            title: "Y2K",
            text: "A mix of Skater Y2K and relaxed streetwear. The cargos, tank top, bandana, and worn sneakers make the outfit feel effortless and lived-in. Accessories, headphones, and the skateboard create that nostalgic teenage freedom associated with the early 2000s. The muted colors give the look a cinematic and slightly mature vibe."
        }
    };

    const modal = document.getElementById("cardModal");
    const modalImage = document.getElementById("cardModalImage");
    const modalTitle = document.getElementById("cardModalTitle");
    const modalText = document.getElementById("cardModalText");

    const closeBtn = modal.querySelector(".card-close"); 
    const openBtns = document.querySelectorAll("[data-card]");

    if (!modal || !modalImage || !modalTitle || !modalText || !closeBtn) return;

    function openModal(card) {
        modalImage.src = card.image;
        modalImage.alt = card.title;

        modalTitle.textContent = card.title;
        modalText.textContent = card.text;

        modal.classList.remove("is-hidden");
        document.body.classList.add("no-scroll");
    }

    function closeModal() {
        modal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
    }

    openBtns.forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();

            const card = cardData[btn.dataset.card];
            if (!card) return;

            openModal(card);
        });
    });

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", e => {
        if (e.target === modal) closeModal();
    });

})();


(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove("active"));

                const active = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );

                if (active) active.classList.add("active");
            }
        });
    }, {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
})();


(() => {

    const openBtn = document.getElementById("openTrendInfo");
    const modal = document.getElementById("trendModal");
    const closeBtn = document.getElementById("trendClose");

    if (!openBtn || !modal || !closeBtn) return;

    openBtn.addEventListener("click", e => {
        e.preventDefault();
        modal.classList.remove("is-hidden");
        document.body.classList.add("no-scroll");
    });

    function closeModal() {
        modal.classList.add("is-hidden");
        document.body.classList.remove("no-scroll");
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", e => {
        if (e.target === modal) closeModal();
    });

})();