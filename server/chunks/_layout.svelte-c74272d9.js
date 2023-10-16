import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each, b as escape } from './ssr-28e3d90a.js';

const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar navbar-expand-lg navbar-dark mb-1" style="background-color: #E64626;" data-svelte-h="svelte-1g60rfg"><div class="container"><a class="navbar-brand ms-2" href="/">SMA Extreme Heat Policy</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="/">Home</a></li> <li class="nav-item"><a class="nav-link " href="/about">About</a></li></ul></div></div></nav>`;
});
const feedbackLink = "https://sydney.au1.qualtrics.com/jfe/form/SV_3jAqlzAnAoAOU8S";
const contactEmail = "federico.tartarini@sydney.edu.au";
const version = "0.0.3";
let logo = "/icons/usyd-logo.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const authors = [
    {
      name: "Federico Tartarini",
      link: "https://www.linkedin.com/in/federico-tartarini/"
    },
    {
      name: "Ollie Jay",
      link: "https://au.linkedin.com/in/ollie-jay-793a1b11"
    },
    {
      name: "James Smallcombe",
      link: "https://twitter.com/smallcombe2?lang=en"
    }
  ];
  return `<footer style="width: 100%; background-color: #E64626; padding: 1rem;"><div class="container p-2 my-2;"><div class="row"><div class="col"><p><a${add_attribute("href", feedbackLink, 0)} style="color: #333333; text-decoration: underline;">Click here to provide your feedback</a></p> <p>Website authors: 
            ${each(authors, ({ name, link }, $index) => {
    return `<a${add_attribute("href", link, 0)} style="color: #333333; text-decoration: underline;">${escape(name)}</a> ${$index !== authors.length - 1 ? `,` : ``}`;
  })}</p> <p data-svelte-h="svelte-1uwy1fv">© 2023 - Heat and Health Research Incubator, USyd</p> <p>Version: ${escape(version)}</p> <p><a${add_attribute("href", "mailto:" + contactEmail, 0)} style="color: #333333; text-decoration: underline;">Contact Us</a></p></div> <div class="col-auto"><img${add_attribute("src", logo, 0)} alt="USyd Logo" width="125px"></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c74272d9.js.map
