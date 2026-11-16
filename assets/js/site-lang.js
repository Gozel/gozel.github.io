// Language switch for pages built per language (English at /page, French at /fr/page, German at /de/page).
// The texts are already in the page; the switch opens the same page in the other language.
(function () {
	var lang = document.documentElement.lang;
	try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }

	// a copy of the switch goes into the phone title bar (built by main.js)
	var langSwitch = document.querySelector(".lang-switch");
	var titleBar = document.getElementById("titleBar");
	if (langSwitch && titleBar && !titleBar.querySelector(".lang-switch")) {
		titleBar.appendChild(langSwitch.cloneNode(true));
	}

	// Links written inside the texts (lang/*.json) are relative, e.g. "contact". With <base href="/"> they
	// open the English address; pages that also exist in this language get the language prefix instead.
	var prefix = lang === "en" ? "" : "/" + lang;
	var prerendered = window.sitePrerendered || [];
	document.querySelectorAll("a[href]").forEach(function (a) {
		if (a.closest("#titleBar, #navPanel")) return; // phone menu: built and handled by main.js
		var href = a.getAttribute("href");
		if (href === "" || href.charAt(0) === "#") { a.setAttribute("href", location.pathname + href); return; }
		if (/^([a-z]+:|\/|\{)/i.test(href) ) return;
		var page = href.split("#")[0].replace(/\.html$/, "");
		a.setAttribute("href", (prerendered.indexOf(page) >= 0 ? prefix : "") + "/" + href);
	});

	document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
		var active = btn.dataset.setLang === lang;
		btn.classList.toggle("active", active);
		btn.setAttribute("aria-pressed", active ? "true" : "false");
	});

	document.addEventListener("click", function (e) {
		var btn = e.target.closest("[data-set-lang]");
		if (!btn) return;
		e.preventDefault();
		if (btn.dataset.setLang === lang) return;
		try { localStorage.setItem("lang", btn.dataset.setLang); } catch (err) { /* storage unavailable */ }
		location.href = btn.dataset.href + location.hash;
	});
})();
