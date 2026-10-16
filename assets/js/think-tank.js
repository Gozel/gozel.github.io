// Think Tank: the pages are built by Jekyll from _thinktank/ (see think-tank/_HOW-TO-PUBLISH.md).
// This script only handles languages and date formatting in the browser.

function ttFormatDate(iso, lang) {
	const date = new Date(iso + "T00:00:00");
	if (isNaN(date)) return iso;
	return date.toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" });
}

function ttSetStoredLang(lang) {
	try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
}

// Show dates in the language of the text around them
document.querySelectorAll("time[datetime]").forEach(time => {
	const lang = time.closest("[lang]")?.getAttribute("lang");
	if (lang) time.textContent = ttFormatDate(time.getAttribute("datetime"), lang);
});

/* ---------- Individual piece ---------- */

const ttPost = document.querySelector(".tt-post");
if (ttPost) {
	const toggle = ttPost.querySelector(".tt-lang-toggle");

	// Choosing a version also switches the rest of the site to that language
	if (toggle) toggle.addEventListener("click", e => {
		const link = e.target.closest("a[data-lang]");
		if (link) ttSetStoredLang(link.dataset.lang);
	});

	// The site's language menu opens the matching version, when there is one
	document.addEventListener("site:languagechange", e => {
		const link = toggle && toggle.querySelector(`a[data-lang="${e.detail}"]`);
		if (link && !link.classList.contains("active")) location.href = link.href;
	});

	// <base href="/"> would send in-page links (e.g. footnotes) to the home page
	ttPost.querySelectorAll('a[href^="#"]').forEach(a => {
		a.setAttribute("href", location.pathname + a.getAttribute("href"));
	});
}

/* ---------- Overview ---------- */

const ttPieces = document.querySelectorAll(".tt-piece");
if (document.querySelector(".tt-grid")) {
	document.addEventListener("site:languageloaded", e => {
		const { lang, data } = e.detail;
		const intro = document.getElementById("thinktank-intro");
		const empty = document.getElementById("thinktank-empty");
		if (data.thinktank) {
			document.getElementById("thinktank-title").innerHTML = data.thinktank.title;
			if (intro) intro.innerHTML = data.thinktank.intro;
			if (empty) empty.innerHTML = data.thinktank.empty;
		}
		// Show each piece in the reader's language, otherwise in its first version
		ttPieces.forEach(piece => {
			const cards = [...piece.querySelectorAll(".tt-card")];
			const shown = cards.find(c => c.dataset.lang === lang) || cards[0];
			cards.forEach(c => { c.hidden = c !== shown; });
		});
	});
}
