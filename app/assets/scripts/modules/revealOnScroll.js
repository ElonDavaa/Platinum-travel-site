import throttle  from "lodash/throttle";
import debounce  from "lodash/debounce";

class revealOnScrool {
    constructor(els, revealPoint) {
        this.itemsToReveal= els;
        this.revealPoint = revealPoint;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.event();
    }

    event() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            console.log("Browser-iig resize hiij bna")
        },300));
    }

    calcCaller() {
        console.log("scroll функц ажиллаж байна");
        this.itemsToReveal.forEach(el => {
            if (el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("тооцоолол хийгдэж байна");
        let scrollPercent = (el.getBoundingClientRect() .y / this.browserHeight) * 100;
        if (scrollPercent < this.revealPoint) {
            el.classList.add("reveal-item--is-visible");
            el.isRevealed = true;
        if (el.isLastItem) {
            window.removeEventListener("scroll", this.scrollThrottle);
        }
        }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {el.classList.add("reveal-item");
        el.classList.add("reveal-item");
        el.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true;
    }
}

export default revealOnScrool; 