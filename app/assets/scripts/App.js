import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScrool from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";


let stickyHeader = new StickyHeader();

new RevealOnScrool(document.querySelectorAll(".feature-item"), 75);
new RevealOnScrool(document.querySelectorAll(".testimonial"), 50);
let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept();
}
