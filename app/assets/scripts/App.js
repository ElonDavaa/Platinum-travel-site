import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScrool from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";


let stickyHeader = new StickyHeader();
new RevealOnScrool(document.querySelectorAll(".feature-item"), 75);
new RevealOnScrool(document.querySelectorAll(".testimonial"), 50);
let mobileMenu = new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import("./modules/Modal")
        .then(x => {
            modal = new x.default();
            setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("Файлыг дуудхад алдаа гарлаа"));
        } else {
            modal.openModal();
        }
    });
});

if (module.hot) {
    module.hot.accept();
}
