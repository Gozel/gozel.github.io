const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
              || window.matchMedia("(max-width: 980px)").matches;
const langSelect = (!isMobile) ? document.getElementById("language") : document.querySelectorAll('.link.depth-0')[3];

async function loadLanguage(lang) {
	try {
		const response = await fetch(`lang/${lang}.json`);
		const data = await response.json();

		// Navigation
		document.getElementById("nav-services").innerHTML = data.nav.services;
		document.getElementById("nav-serviceslist").innerHTML = data.nav.serviceslist;
		document.getElementById("nav-servicesresearch").innerHTML = data.nav.servicesresearch;
		document.getElementById("nav-servicesresearch").title = data.nav.servicesresearch;
		document.getElementById("nav-serviceseducation").innerHTML = data.nav.serviceseducation;
		document.getElementById("nav-servicesinnovation").innerHTML = data.nav.servicesinnovation;
		document.getElementById("nav-about").innerHTML = data.nav.about;
		document.getElementById("nav-aboutlist").innerHTML = data.nav.aboutlist;
		document.getElementById("nav-aboutgozel").innerHTML = data.nav.aboutgozel;
		document.getElementById("nav-aboutHCD").innerHTML = data.nav.aboutHCD;
		document.getElementById("nav-aboutpublications").innerHTML = data.nav.aboutpublications;
		document.getElementById("nav-abouttalks").innerHTML = data.nav.abouttalks;
		document.getElementById("nav-contact").innerHTML = data.nav.contact;
		// document.getElementById("nav-language").innerHTML = data.nav.language;

		// Footer
		if (document.getElementById("footer-contact")) document.getElementById("footer-contact").innerHTML = data.footer.contact;
		if (document.getElementById("footer-about")) document.getElementById("footer-about").innerHTML = data.footer.about;
		if (document.getElementById("footer-terms")) document.getElementById("footer-terms").innerHTML = data.footer.terms;
		if (document.getElementById("footer-privacy")) document.getElementById("footer-privacy").innerHTML = data.footer.privacy;
		if (document.getElementById("footer-credits")) document.getElementById("footer-credits").innerHTML = data.footer.credits;

		// Landing
		if (document.getElementById("landing-title")) document.getElementById("landing-title").innerHTML = data.landing.title;
		if (document.getElementById("landing-subtitle")) document.getElementById("landing-subtitle").innerHTML = data.landing.subtitle;

		// Hero section
		if (document.getElementById("hero-title")) document.getElementById("hero-title").innerHTML = data.hero.title;
		if (document.getElementById("hero-subtitle")) document.getElementById("hero-subtitle").innerHTML = data.hero.subtitle;

		// What I do
		if (document.getElementById("whatIdo-title")) document.getElementById("whatIdo-title").innerHTML = data.whatIdo.title;
		if (document.getElementById("whatIdo-subtitle1")) document.getElementById("whatIdo-subtitle1").innerHTML = data.whatIdo.subtitle1;
		if (document.getElementById("whatIdo-text1")) document.getElementById("whatIdo-text1").innerHTML = data.whatIdo.text1;
		if (document.getElementById("whatIdo-more1")) document.getElementById("whatIdo-more1").innerHTML = data.whatIdo.more1;
		if (document.getElementById("whatIdo-subtitle2")) document.getElementById("whatIdo-subtitle2").innerHTML = data.whatIdo.subtitle2;
		if (document.getElementById("whatIdo-text2")) document.getElementById("whatIdo-text2").innerHTML = data.whatIdo.text2;
		if (document.getElementById("whatIdo-more2")) document.getElementById("whatIdo-more2").innerHTML = data.whatIdo.more2;
		if (document.getElementById("whatIdo-subtitle3")) document.getElementById("whatIdo-subtitle3").innerHTML = data.whatIdo.subtitle3;
		if (document.getElementById("whatIdo-text3")) document.getElementById("whatIdo-text3").innerHTML = data.whatIdo.text3;
		if (document.getElementById("whatIdo-more3")) document.getElementById("whatIdo-more3").innerHTML = data.whatIdo.more3;

		// Ways I can help you
		if (document.getElementById("waysIcanhelp-title")) document.getElementById("waysIcanhelp-title").innerHTML = data.waysIcanhelp.title;
		if (document.getElementById("waysIcanhelp-text")) document.getElementById("waysIcanhelp-text").innerHTML = data.waysIcanhelp.text;
		if (document.getElementById("waysIcanhelp-more")) document.getElementById("waysIcanhelp-more").innerHTML = data.waysIcanhelp.more;

		// Case Studies
		if (document.getElementById("casestudies-title")) document.getElementById("casestudies-title").innerHTML = data.casestudies.title;

		if (document.getElementById("research-nav")) document.getElementById("research-nav").innerHTML = data.research.nav;
		if (document.getElementById("research-title")) document.getElementById("research-title").innerHTML = data.research.title;
		if (document.getElementById("research-subtitle")) document.getElementById("research-subtitle").innerHTML = data.research.subtitle;

		// RESEARCH
		if (document.getElementById("researchbody-questions")) document.getElementById("researchbody-questions").innerHTML = data.researchbody.questions;
		if (document.getElementById("researchbody-questionsanswers")) document.getElementById("researchbody-questionsanswers").innerHTML = data.researchbody.questionsanswers;
		if (document.getElementById("researchbody-methods")) document.getElementById("researchbody-methods").innerHTML = data.researchbody.methods;
		if (document.getElementById("researchbody-methodsanswers")) document.getElementById("researchbody-methodsanswers").innerHTML = data.researchbody.methodsanswers;
		if (document.getElementById("researchbody-outcomes")) document.getElementById("researchbody-outcomes").innerHTML = data.researchbody.outcomes;
		if (document.getElementById("researchbody-outcomesanswers")) document.getElementById("researchbody-outcomesanswers").innerHTML = data.researchbody.outcomesanswers;
		if (document.getElementById("researchbody-resources")) document.getElementById("researchbody-resources").innerHTML = data.researchbody.resources;
		if (document.getElementById("researchbody-resourcesanswers")) document.getElementById("researchbody-resourcesanswers").innerHTML = data.researchbody.resourcesanswers;
		if (document.getElementById("researchbody-expertise")) document.getElementById("researchbody-expertise").innerHTML = data.researchbody.expertise;
		if (document.getElementById("researchbody-expertiseanswers")) document.getElementById("researchbody-expertiseanswers").innerHTML = data.researchbody.expertiseanswers;
		if (document.getElementById("researchbody-contact")) document.getElementById("researchbody-contact").innerHTML = data.researchbody.contact;
		if (document.getElementById("researchbody-more")) document.getElementById("researchbody-more").innerHTML = data.researchbody.more;

		// EDUCATION
		if (document.getElementById("education-nav")) document.getElementById("education-nav").innerHTML = data.education.nav;
		if (document.getElementById("education-title")) document.getElementById("education-title").innerHTML = data.education.title;
		if (document.getElementById("education-subtitle")) document.getElementById("education-subtitle").innerHTML = data.education.subtitle;
		if (document.getElementById("education-article")) document.getElementById("education-article").innerHTML = data.education.article;
		if (document.getElementById("education-what")) document.getElementById("education-what").innerHTML = data.education.what;
		if (document.getElementById("education-whatanswers")) document.getElementById("education-whatanswers").innerHTML = data.education.whatanswers;
		if (document.getElementById("education-how")) document.getElementById("education-how").innerHTML = data.education.how;
		if (document.getElementById("education-howanswers")) document.getElementById("education-howanswers").innerHTML = data.education.howanswers;
		if (document.getElementById("education-who")) document.getElementById("education-who").innerHTML = data.education.who;
		if (document.getElementById("education-whoanswers")) document.getElementById("education-whoanswers").innerHTML = data.education.whoanswers;
		if (document.getElementById("education-outcomes")) document.getElementById("education-outcomes").innerHTML = data.education.outcomes;
		if (document.getElementById("education-outcomesanswers")) document.getElementById("education-outcomesanswers").innerHTML = data.education.outcomesanswers;
		if (document.getElementById("education-resources")) document.getElementById("education-resources").innerHTML = data.education.resources;
		if (document.getElementById("education-resourcesanswers")) document.getElementById("education-resourcesanswers").innerHTML = data.education.resourcesanswers;
		if (document.getElementById("education-expertise")) document.getElementById("education-expertise").innerHTML = data.education.expertise;
		if (document.getElementById("education-expertiseanswers")) document.getElementById("education-expertiseanswers").innerHTML = data.education.expertiseanswers;
		if (document.getElementById("education-contact")) document.getElementById("education-contact").innerHTML = data.education.contact;
		if (document.getElementById("education-more")) document.getElementById("education-more").innerHTML = data.education.more;

		// INNOVATION
		if (document.getElementById("innovation-nav")) document.getElementById("innovation-nav").innerHTML = data.innovation.nav;
		if (document.getElementById("innovation-title")) document.getElementById("innovation-title").innerHTML = data.innovation.title;
		if (document.getElementById("innovation-subtitle")) document.getElementById("innovation-subtitle").innerHTML = data.innovation.subtitle;
		if (document.getElementById("innovation-divider")) document.getElementById("innovation-divider").innerHTML = data.innovation.divider;
		if (document.getElementById("innovation-what")) document.getElementById("innovation-what").innerHTML = data.innovation.what;
		if (document.getElementById("innovation-whatanswers")) document.getElementById("innovation-whatanswers").innerHTML = data.innovation.whatanswers;
		if (document.getElementById("innovation-how")) document.getElementById("innovation-how").innerHTML = data.innovation.how;
		if (document.getElementById("innovation-howanswers")) document.getElementById("innovation-howanswers").innerHTML = data.innovation.howanswers;
		if (document.getElementById("innovation-who")) document.getElementById("innovation-who").innerHTML = data.innovation.who;
		if (document.getElementById("innovation-whoanswers")) document.getElementById("innovation-whoanswers").innerHTML = data.innovation.whoanswers;
		if (document.getElementById("innovation-outcomes")) document.getElementById("innovation-outcomes").innerHTML = data.innovation.outcomes;
		if (document.getElementById("innovation-outcomesanswers")) document.getElementById("innovation-outcomesanswers").innerHTML = data.innovation.outcomesanswers;
		if (document.getElementById("innovation-resources")) document.getElementById("innovation-resources").innerHTML = data.innovation.resources;
		if (document.getElementById("innovation-resourcesanswers")) document.getElementById("innovation-resourcesanswers").innerHTML = data.innovation.resourcesanswers;
		if (document.getElementById("innovation-expertise")) document.getElementById("innovation-expertise").innerHTML = data.innovation.expertise;
		if (document.getElementById("innovation-expertiseanswers")) document.getElementById("innovation-expertiseanswers").innerHTML = data.innovation.expertiseanswers;
		if (document.getElementById("innovation-contact")) document.getElementById("innovation-contact").innerHTML = data.innovation.contact;
		if (document.getElementById("innovation-more")) document.getElementById("innovation-more").innerHTML = data.innovation.more;

		// GOZEL
		if (document.getElementById("gozel-title")) document.getElementById("gozel-title").innerHTML = data.gozel.title;
		if (document.getElementById("gozel-text")) document.getElementById("gozel-text").innerHTML = data.gozel.text;
		if (document.getElementById("gozel-team")) document.getElementById("gozel-team").innerHTML = data.gozel.team;
		if (document.getElementById("gozel-teamtext")) document.getElementById("gozel-teamtext").innerHTML = data.gozel.teamtext;
		if (document.getElementById("gozel-divider1")) document.getElementById("gozel-divider1").innerHTML = data.gozel.divider1;
		if (document.getElementById("gozel-subtitle1")) document.getElementById("gozel-subtitle1").innerHTML = data.gozel.subtitle1;
		if (document.getElementById("gozel-subtitle1text")) document.getElementById("gozel-subtitle1text").innerHTML = data.gozel.subtitle1text;
		if (document.getElementById("gozel-subtitle2")) document.getElementById("gozel-subtitle2").innerHTML = data.gozel.subtitle2;
		if (document.getElementById("gozel-subtitle2text")) document.getElementById("gozel-subtitle2text").innerHTML = data.gozel.subtitle2text;
		if (document.getElementById("gozel-subtitle3")) document.getElementById("gozel-subtitle3").innerHTML = data.gozel.subtitle3;
		if (document.getElementById("gozel-subtitle3text")) document.getElementById("gozel-subtitle3text").innerHTML = data.gozel.subtitle3text;
		if (document.getElementById("gozel-subtitle4")) document.getElementById("gozel-subtitle4").innerHTML = data.gozel.subtitle4;
		if (document.getElementById("gozel-subtitle4text")) document.getElementById("gozel-subtitle4text").innerHTML = data.gozel.subtitle4text;
		if (document.getElementById("gozel-contact")) document.getElementById("gozel-contact").innerHTML = data.gozel.contact;
		if (document.getElementById("gozel-more")) document.getElementById("gozel-more").innerHTML = data.gozel.more;
		if (document.getElementById("gozel-divider2")) document.getElementById("gozel-divider2").innerHTML = data.gozel.divider2;
		if (document.getElementById("gozel-experience")) document.getElementById("gozel-experience").innerHTML = data.gozel.experience;
		if (document.getElementById("gozel-experiencetext")) document.getElementById("gozel-experiencetext").innerHTML = data.gozel.experiencetext;
		if (document.getElementById("gozel-education")) document.getElementById("gozel-education").innerHTML = data.gozel.education;
		if (document.getElementById("gozel-educationtext")) document.getElementById("gozel-educationtext").innerHTML = data.gozel.educationtext;
		if (document.getElementById("gozel-cv")) document.getElementById("gozel-cv").innerHTML = data.gozel.cv;
		
		// PUBLICATIONS
		if (document.getElementById("publications-title")) document.getElementById("publications-title").innerHTML = data.publications.title;
		if (document.getElementById("publications-abstract")) document.getElementById("publications-abstract").innerHTML = data.publications.abstract;
		if (document.getElementById("publications-list")) document.getElementById("publications-list").innerHTML = data.publications.list;

		// TALKS
		if (document.getElementById("talks-title")) document.getElementById("talks-title").innerHTML = data.talks.title;
		if (document.getElementById("talks-abstract")) document.getElementById("talks-abstract").innerHTML = data.talks.abstract;
		if (document.getElementById("talks-list")) document.getElementById("talks-list").innerHTML = data.talks.list;

		// HCD
		if (document.getElementById("hcd-title")) document.getElementById("hcd-title").innerHTML = data.hcd.title;
		if (document.getElementById("hcd-abstract")) document.getElementById("hcd-abstract").innerHTML = data.hcd.abstract;
		if (document.getElementById("hcd-whattitle")) document.getElementById("hcd-whattitle").innerHTML = data.hcd.whattitle;
		if (document.getElementById("hcd-whatanswers")) document.getElementById("hcd-whatanswers").innerHTML = data.hcd.whatanswers;
		if (document.getElementById("hcd-divider1")) document.getElementById("hcd-divider1").innerHTML = data.hcd.divider1;
		if (document.getElementById("hcd-approach1title")) document.getElementById("hcd-approach1title").innerHTML = data.hcd.approach1title;
		if (document.getElementById("hcd-approach1answers")) document.getElementById("hcd-approach1answers").innerHTML = data.hcd.approach1answers;
		if (document.getElementById("hcd-approach2title")) document.getElementById("hcd-approach2title").innerHTML = data.hcd.approach2title;
		if (document.getElementById("hcd-approach2answers")) document.getElementById("hcd-approach2answers").innerHTML = data.hcd.approach2answers;
		if (document.getElementById("hcd-approach3title")) document.getElementById("hcd-approach3title").innerHTML = data.hcd.approach3title;
		if (document.getElementById("hcd-approach3answers")) document.getElementById("hcd-approach3answers").innerHTML = data.hcd.approach3answers;
		if (document.getElementById("hcd-divider2")) document.getElementById("hcd-divider2").innerHTML = data.hcd.divider2;
		if (document.getElementById("hcd-research")) document.getElementById("hcd-research").innerHTML = data.hcd.research;
		if (document.getElementById("hcd-innovation")) document.getElementById("hcd-innovation").innerHTML = data.hcd.innovation;

		// CONTACT
		if (document.getElementById("contact-title")) document.getElementById("contact-title").innerHTML = data.contact.title;
		if (document.getElementById("contact-collab")) document.getElementById("contact-collab").innerHTML = data.contact.collab;
		if (document.getElementById("contact-more")) document.getElementById("contact-more").innerHTML = data.contact.more;

		// FACT CHECKER
		if (document.getElementById("factchecker-title")) document.getElementById("factchecker-title").innerHTML = data.factchecker.title;
		if (document.getElementById("factchecker-subtitle")) document.getElementById("factchecker-subtitle").innerHTML = data.factchecker.subtitle;
		if (document.getElementById("factchecker-sources")) document.getElementById("factchecker-sources").innerHTML = data.factchecker.sources;
		if (document.getElementById("factchecker-howIbuilt")) document.getElementById("factchecker-howIbuilt").innerHTML = data.factchecker.howIbuilt;
		if (document.getElementById("factchecker-contact")) document.getElementById("factchecker-contact").innerHTML = data.factchecker.contact;
		if (document.getElementById("factchecker-more")) document.getElementById("factchecker-more").innerHTML = data.factchecker.more;
		if (document.getElementById("factchecker-resources")) document.getElementById("factchecker-resources").innerHTML = data.factchecker.resources;
		
		// SCIENCE ENGINE
		if (document.getElementById("scienceengine-title")) document.getElementById("scienceengine-title").innerHTML = data.scienceengine.title;
		if (document.getElementById("scienceengine-subtitle")) document.getElementById("scienceengine-subtitle").innerHTML = data.scienceengine.subtitle;
		if (document.getElementById("scienceengine-sources")) document.getElementById("scienceengine-sources").innerHTML = data.scienceengine.sources;
		if (document.getElementById("scienceengine-howIbuilt")) document.getElementById("scienceengine-howIbuilt").innerHTML = data.scienceengine.howIbuilt;
		if (document.getElementById("scienceengine-contact")) document.getElementById("scienceengine-contact").innerHTML = data.scienceengine.contact;
		if (document.getElementById("scienceengine-more")) document.getElementById("scienceengine-more").innerHTML = data.scienceengine.more;
		if (document.getElementById("scienceengine-resources")) document.getElementById("scienceengine-resources").innerHTML = data.scienceengine.resources;

		// Update HTML language
		document.documentElement.lang = lang;
		updateNavTexts(data);
		// document.addEventListener('shown.bs.offcanvas', () => updateNavTexts(data));

	} catch (err) {
		console.error("Error loading translation:", err);
	}
}

function updateNavTexts(data) {

  // Desktop version
  const desktopServices = document.getElementById('nav-services');
  if (desktopServices) desktopServices.innerHTML = data.nav.services;

  // Bootstrap mobile version
  document.querySelectorAll('.link.depth-0 span.indent-0')[0].innerHTML = data.nav.services;
  document.querySelectorAll('.link.depth-1 span.indent-1')[0].innerHTML = data.nav.servicesresearch;
  document.querySelectorAll('.link.depth-1 span.indent-1')[1].innerHTML = data.nav.serviceseducation;
  document.querySelectorAll('.link.depth-1 span.indent-1')[2].innerHTML = data.nav.servicesinnovation;

  document.querySelectorAll('.link.depth-0 span.indent-0')[1].innerHTML = data.nav.about;
  document.querySelectorAll('.link.depth-1 span.indent-1')[3].innerHTML = data.nav.aboutgozel;
  document.querySelectorAll('.link.depth-1 span.indent-1')[4].innerHTML = data.nav.aboutHCD;
  document.querySelectorAll('.link.depth-1 span.indent-1')[5].innerHTML = data.nav.aboutpublications;
  document.querySelectorAll('.link.depth-1 span.indent-1')[6].innerHTML = data.nav.abouttalks;

  document.querySelectorAll('.link.depth-0 span.indent-0')[2].innerHTML = data.nav.contact;
  // add more mappings as needed
}

// Load default or saved language
const savedLang = localStorage.getItem("lang") || "en";
langSelect.value = savedLang;
if (isMobile) langSelect.children.language.value = savedLang;
loadLanguage(savedLang);

// Change language
langSelect.addEventListener("change", () => {
	const lang = (!isMobile) ? langSelect.value : langSelect.children.language.value;
	localStorage.setItem("lang", lang);
	loadLanguage(lang);
});
