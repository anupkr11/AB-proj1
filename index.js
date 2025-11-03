import { header } from "./components/header.js";
import { navbar } from "./components/navbar.js";
import { home } from "./components/home.js";
// import { footer } from "./components/footer.js";

document.getElementById("root").innerHTML = `
  ${header}
  ${navbar}
  ${home}

`;
