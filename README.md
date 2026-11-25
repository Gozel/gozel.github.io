# shakeri.eu

Website of Shakeri *et al.*, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
Every page exists in English, French and German.

## Where things are

| Path | What it is |
|---|---|
| `lang/en.json`, `fr.json`, `de.json` | All page texts, one file per language. Edit texts here. |
| `lang/thinktank.yml` | Labels of the Think Tank pages (categories, filters, download box) |
| `_layouts/default.html` | Base of every page: head, header, footer, scripts |
| `_layouts/<page>.html` | Content of one page (approach, contact, services-…, …) |
| `_includes/site/` | Shared parts: header, footer, contact form, links (`url.html`), language helpers |
| `<page>.html`, `fr/<page>.html`, `de/<page>.html` | Short stubs that build each page once per language |
| `_thinktank/<piece>/en.md` … | Think Tank pieces in Markdown, see `think-tank/_HOW-TO-PUBLISH.md` |
| `_includes/tt/`, `_layouts/tt-*.html`, `think-tank.html` | Think Tank templates |
| `assets/css/fresh.css` | The site's own styles, on top of the template's `main.css` |
| `assets/js/` | `site-lang.js` (language switch), `think-tank.js`, `contact-form.js`, `download-gate.js`; the rest comes from the template |
| `images/`, `resources/`, `publications/`, `certifcates/` | Images and downloadable files |
| `_config.yml` | Site settings: contact form address, analytics, list of pages built per language |

## Adding a page

1. Create `_layouts/<page>.html` with front matter for the base layout, e.g.

   ```yaml
   ---
   layout: default
   title: block.title          # "block.key" of the title in lang/<lang>.json
   description: block.subtitle # summary for search engines (optional)
   nav: services               # menu item to highlight (optional)
   ---
   {%- include site/lang-vars.html -%}
   …page content, texts as {{ t.block.key | default: en.block.key }}…
   ```

2. Add the stubs `<page>.html`, `fr/<page>.html` and `de/<page>.html` (copy an existing one).
3. Add `<page>` to `prerendered` in `_config.yml`.
4. Add the texts to all three files in `lang/`.

Internal links: `{% include site/url.html to='contact' %}` gives the address in the page's language.

## Preview locally

```sh
bundle install
bundle exec jekyll serve --livereload --unpublished
```

Then open <http://localhost:4000>. Restart after changing `_config.yml`.
The contact form and the download box only accept messages from shakeri.eu, so they show an error locally.

## Credits

Design based on Dopetrope by [HTML5 UP](https://html5up.net) (@ajlkn),
free for personal and commercial use under the CCA 3.0 license (see `LICENSE.txt`).
