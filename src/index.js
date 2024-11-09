import "./styles.css";

import { clearSiteContent } from "./functions.js";

import { homePageLoad } from "./home-load.js"
import { menuPageLoad } from "./menu-load.js"
import { aboutPageLoad } from "./about-load.js"

homePageLoad();

document.querySelector("#home").addEventListener("click", () => {
    clearSiteContent();

    homePageLoad();
});

document.querySelector("#menu").addEventListener("click", () => {
    clearSiteContent();

    menuPageLoad();
});

document.querySelector("#about").addEventListener("click", () => {
    clearSiteContent();

    aboutPageLoad();
});
