import "./styles.css";

import { homePageLoad } from "./home-load.js"
import { clearSiteContent } from "./functions.js";

homePageLoad();

document.querySelector("#home").addEventListener("click", () => {
    clearSiteContent();

    homePageLoad();
});

document.querySelector("#menu").addEventListener("click", () => {
    clearSiteContent();
});

document.querySelector("#about").addEventListener("click", () => {
    clearSiteContent();
});
