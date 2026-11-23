// Contact form (see _includes/site/contact-form.html): sends the message to Formward
// without leaving the page and shows a thank-you or error note in the page's language.
(function () {
	const form = document.querySelector(".contact-form");
	if (!form) return;
	const button = form.querySelector('button[type="submit"]');
	const thanks = form.querySelector(".contact-form-thanks");
	const error = form.querySelector(".contact-form-error");
	const label = button.textContent;

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
			form.reset();
			form.classList.add("is-sent");
			thanks.focus();
		} catch (err) {
			error.hidden = false;
			console.warn("Contact form:", err.message);
		} finally {
			button.disabled = false;
			button.textContent = label;
		}
	});
})();

// "Request your sparring session" (offer panel): jump to the form with the topic chosen
document.querySelectorAll("a[data-topic]").forEach(link => {
	link.addEventListener("click", e => {
		const form = document.querySelector(".contact-form");
		const topic = form && form.querySelector('select[name="topic"]');
		if (!topic) return;
		e.preventDefault();
		topic.value = link.dataset.topic;
		form.scrollIntoView({ behavior: "smooth", block: "start" });
		form.querySelector("#cf-name").focus({ preventScroll: true });
	});
});
