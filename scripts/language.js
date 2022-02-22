// complete all words translation

var languages = {
  en: {
    "nav-home": "HOME",
    "nav-services": "SERVICES",
    "nav-about-me": "ABOUT ME",
    "nav-skills": "SKILLS",
    "nav-works": "WORKS",
    "nav-contact": "CONTACT",
    "section-experiences": "INTERNATIONAL EXPERIENCES"
  },
  fr: {
    "nav-home": "ACCUEIL",
    "nav-services": "MES SERVICES",
    "nav-about-me": "À PROPOS",
    "nav-skills": "MES COMPÉTENCES",
    "nav-works": "RÉFÉRENCES",
    "nav-contact": "CONTACT",
    "section-experiences": "MES EXPÉRIENCES INTERNATIONALES"
  }
}
const langs = document.querySelectorAll(".lang");
const langsLinks = document.querySelectorAll(".lang-link");

function loadLanguage(lang){
    langs.forEach(elem => {
      elem.textContent = languages[lang][elem.id];
    });
}

langsLinks.forEach(elem => {
  elem.onclick = function() {
    loadLanguage(elem.attributes['data-lang'].nodeValue)
  };
});


