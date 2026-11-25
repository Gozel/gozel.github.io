// Download box for Think Tank pieces (see _includes/tt/download-gate.html):
// links with the class tt-gated ask for an email address before the file opens.
(function () {
	const dialog = document.querySelector(".tt-gate");
	const links = document.querySelectorAll("a.tt-gated");
	if (!dialog || !links.length || typeof dialog.showModal !== "function") return;

	const form = dialog.querySelector("form");
	const email = form.querySelector('input[name="email"]');
	const file = form.querySelector('input[name="file"]');
	const button = form.querySelector('button[type="submit"]');
	const error = form.querySelector(".contact-form-error");
	const done = form.querySelector(".tt-gate-done");
	const doneLink = form.querySelector(".tt-gate-link");
	const label = button.textContent;
	const KEY = "tt-gate-email";

	const given = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
	const remember = () => { try { localStorage.setItem(KEY, "1"); } catch (e) { /* storage unavailable */ } };

	function startDownload(href) {
		const a = document.createElement("a");
		a.href = href;
		a.download = "";
		document.body.appendChild(a);
		a.click();
		a.remove();
	}

	links.forEach(link => link.addEventListener("click", e => {
		if (given()) return; // address given before: open the file as usual
		e.preventDefault();
		file.value = link.getAttribute("href");
		doneLink.href = link.href;
		form.classList.remove("is-done");
		done.hidden = true;
		error.hidden = true;
		dialog.showModal();
		email.focus();
	}));

	dialog.querySelector(".tt-gate-close").addEventListener("click", () => dialog.close());
	dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

	form.addEventListener("submit", async e => {
		e.preventDefault();
		error.hidden = true;
		button.disabled = true;
		button.textContent = form.dataset.sending;
		try {
			const res = await fetch(form.action, {
				method: "POST",
				headers: { Accept: "application/json" },
				body: new URLSearchParams(new FormData(form))
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok) throw new Error(data.error || res.status);
			remember();
			form.classList.add("is-done");
			done.hidden = false;
			done.querySelector(".tt-gate-thanks").focus();
			startDownload(doneLink.href);
		} catch (err) {
			error.hidden = false;
			console.warn("Download form:", err.message);
		} finally {
			button.disabled = false;
			button.textContent = label;
		}
	});
})();
