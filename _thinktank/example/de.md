---
# ───────────────────────────────────────────────────────────────────────────
# EXAMPLE PIECE — copy the whole "example" folder to start a new piece.
# Language = file name (de.md / fr.md / en.md). Folder name = web address:
#   _thinktank/example/de.md  →  shakeri.eu/think-tank/example/de/
# ───────────────────────────────────────────────────────────────────────────
published: false                # true = live on the site (and on the overview)
title: "Titel des Beitrags"
lead: "Ein bis zwei Sätze, die zusammenfassen, worum es geht und warum es wichtig ist."
date: 2026-10-16                # YYYY-MM-DD — the overview sorts by this
cover: cover.jpg                # file in think-tank/images/<folder>/ — delete line for no cover
cover_alt: "Drei Menschen lachen gemeinsam"
cover_caption: "Bildunterschrift · Foto: Name"
# description: "Optional: Text für Google & Link-Vorschauen (sonst wird der Lead verwendet)"
# author: "Andere Autor:in"     # optional, default: Gözel Shakeri
---

Fließtext wird einfach geschrieben. **Fett**, *kursiv* und [ein Link](https://example.org).
Ein neuer Absatz beginnt nach einer Leerzeile.

## Zwischenüberschrift

Aufzählungen:

- erster Punkt
- zweiter Punkt

Nummerierte Liste:

1. erster Schritt
2. zweiter Schritt

{% include tt/figure.html src="images/gallery/network.jpg" alt="Spielfiguren in einem Netzwerk" caption="Bild in Textbreite mit Bildunterschrift (caption weglassen = keine Unterschrift)" %}

{% include tt/gallery.html images="images/gallery/workshop-optm.jpg|images/gallery/seminar.jpg" captions="Links|Rechts" alts="Haftnotizen|Seminarraum" %}

{% include tt/quote.html text="Ein prägnantes Zitat, das hervorgehoben werden soll." cite="Name, Funktion" %}

> Ein einfaches Zitat ohne Quellenangabe geht auch so.

<div class="tt-callout" markdown="1">
### Das Wichtigste in Kürze

- Erste Kernaussage
- Zweite Kernaussage
- Dritte Kernaussage
</div>

{% include tt/video.html youtube="VIDEO_ID" title="Videotitel" %}

Eine Aussage mit Quellenangabe.[^1] Noch eine.[^2]

[^1]: Autor:in (2025). *Titel*. Verlag. <https://example.org>
[^2]: Zweite Quelle. Die Quellen erscheinen automatisch am Ende des Beitrags.
