import "../styles/styles.css";
import MobileMenu from "./modules/mobileMenu";
import revealOnScrool from "./modules/revealOnScroll";

new revealOnScrool(document.querySelectorAll(".feature-item"), 75);
new revealOnScrool(document.querySelectorAll(".testimonial"), 50);
let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept();
}
