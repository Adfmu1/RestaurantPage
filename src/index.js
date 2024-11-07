import "./styles.css";

import { initialPageLoad } from "./initial-load.js"
import { clearSiteContent } from "./functions.js";

initialPageLoad();

document.querySelector("#home").addEventListener("click", () => {
    clearSiteContent();
});

document.querySelector("#menu").addEventListener("click", () => {
    clearSiteContent();
});

document.querySelector("#about").addEventListener("click", () => {
    clearSiteContent();
});