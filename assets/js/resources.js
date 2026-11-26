// Resources page (_layouts/resources.html): show all resources, only free ones, or only ours.
// The choice is kept in the address (?show=free) so a filtered view can be shared.
(function () {
	const buttons = document.querySelectorAll(".res-filters [data-show]");
	if (!buttons.length) return;
	const clusters = document.querySelectorAll(".res-cluster");
	const topicLinks = document.querySelectorAll(".res-topics li");
	const none = document.querySelector(".res-none");

	function show(choice) {
		buttons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.show === choice)));
		let any = false;
		clusters.forEach(cluster => {
			let visible = 0;
			cluster.querySelectorAll(".res-card").forEach(card => {
				const match = choice === "all" || card.dataset[choice] === "true";
				card.hidden = !match;
				if (match) visible++;
			});
			cluster.hidden = visible === 0;
			if (visible) any = true;
		});
		topicLinks.forEach(a => {
			const target = document.getElementById(a.querySelector("a").getAttribute("href").split("#")[1]);
			a.hidden = !target || target.hidden;
		});
		none.hidden = any;
		const url = new URL(location.href);
		if (choice === "all") url.searchParams.delete("show"); else url.searchParams.set("show", choice);
		history.replaceState(null, "", url);
	}

	buttons.forEach(b => b.addEventListener("click", () => show(b.dataset.show)));
	const initial = new URLSearchParams(location.search).get("show");
	if (initial === "own" || initial === "free") show(initial);
})();

// Link button next to each topic heading: copies the address of that section
// (e.g. shakeri.eu/resources#sustainable-business-models) so it can be sent to someone.
document.querySelectorAll(".res-anchor").forEach(link => {
	link.addEventListener("click", async e => {
		const id = link.getAttribute("href").split("#")[1];
		const url = location.origin + location.pathname + "#" + id;
		history.replaceState(null, "", location.pathname + location.search + "#" + id); // full path: <base href="/"> would turn "#id" into the home page
		if (!navigator.clipboard) return; // the browser jumps to the section; copy the address bar
		e.preventDefault();
		try {
			await navigator.clipboard.writeText(url);
			link.classList.add("is-copied");
			link.setAttribute("data-label", link.dataset.copied);
			setTimeout(() => link.classList.remove("is-copied"), 2000);
		} catch (err) {
			location.hash = id;
		}
	});
});
