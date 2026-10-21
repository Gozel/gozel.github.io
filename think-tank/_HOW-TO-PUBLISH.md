# Publishing a Think Tank piece

Each piece is written in Markdown, one file per language. When you push, GitHub Pages
(Jekyll) turns the files into web pages and adds the piece to the overview.
You never edit HTML.

```
_thinktank/
  example/                 ← sample piece (not published); copy it for a new piece
    de.md                  ← German version
    fr.md                  ← French version   (en.md for English)
  circular-food/           ← a real piece: the folder name becomes the web address
    de.md                       shakeri.eu/think-tank/circular-food/de/
    fr.md                       shakeri.eu/think-tank/circular-food/fr/
think-tank/
  images/circular-food/    ← that piece's images
  index.html               ← the overview (builds itself — never edit)
```

## Write a piece

1. Copy the folder `_thinktank/example` and rename it, e.g. `_thinktank/circular-food`.
   Use lowercase letters, numbers and dashes. The name becomes part of the web address.
2. Put the images in `think-tank/images/circular-food/`.
3. In each language file, fill in the header between the two `---` lines:

   | Field | |
   |---|---|
   | `published` | `true` to go live; `false` to keep it as a draft |
   | `title`, `lead` | Shown on the page and on the overview card |
   | `date` | `YYYY-MM-DD`; the overview sorts by it |
   | `category` | One of `think-piece`, `conversation`, `research-digest`, `tools`, `report` |
   | `audience` | One of `researchers`, `policymakers`, `business`, `citizens`, `everybody`, or several in brackets: `[business, policymakers]` |
   | `cover`, `cover_alt`, `cover_caption` | Cover image (also used for the card and link previews). Delete the lines for no cover. |
   | `description` | Optional: text for Google and LinkedIn previews (defaults to the lead) |
   | `author` | Optional: defaults to Gözel Shakeri |

4. Write the text below the header.

Category and audience appear as tags on the overview card and above the title, translated
into the piece's language. The translations live in `_data/thinktank.yml`: add a line there
to create a new category or audience. A value missing from that file is shown exactly as
written, so a typo is easy to spot.

Only want one language? Delete the other file. The language buttons disappear automatically.

## Building blocks

Plain Markdown:

```markdown
Normal paragraph with **bold**, *italic* and a [link](https://example.org).

# Section heading        (# or ## — large, with a yellow accent line)

### Subheading           (smaller)

#### Small heading       (small capitals)

- bullet
- bullet

1. numbered
2. numbered

> Simple quote

A claim with a source.[^1]

[^1]: Author (2025). *Title*. Publisher.     ← sources are collected at the end automatically
```

Layout blocks (one line each, copy as needed):

```liquid
{% include tt/figure.html src="chart.png" alt="Description" caption="Caption (optional)" %}
{% include tt/figure.html src="photo.jpg" alt="Description" wide=true %}
{% include tt/gallery.html images="a.jpg|b.jpg|c.jpg" captions="Left|Middle|Right" alts="…|…|…" %}
{% include tt/quote.html text="The quotation." cite="Name, role" %}
{% include tt/video.html youtube="VIDEO_ID" title="Video title" %}
```

The key-takeaways box wraps normal Markdown:

```markdown
<div class="tt-callout" markdown="1">
### Key takeaways

- First point
- Second point
</div>
```

**Image paths:** a bare file name (`chart.png`) is looked up in
`think-tank/images/<folder name>/`. A path containing `/` is used as written,
starting from the site root, e.g. `images/gallery/network.jpg`.

**Text containing double quotes** inside an `include` (`caption="…"`): use
single quotes around it instead (`caption='He said "yes"'`).

## Overview banner image

The image on the right of the Think Tank banner is set at the top of `think-tank/index.html`:

```yaml
banner_image: think-tank/images/think-tank-banner.png
banner_alt: "think tank – ideas for futures worth building"
```

Replace the file or change the path to use another image. A wide 16:9 image (e.g. 1600×900)
matches the height of the Approach banner. Delete both lines for a text-only banner.
The same image is used for link previews of the overview page.

## Publish

Set `published: true` in each language file, then commit and push.
GitHub builds the site within a minute or two.

To take a piece down, set `published: false` again.

## Preview on your computer (optional)

Install once (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

# install Ruby packages in your home folder instead of system-wide
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install bundler

cd "/path/to/gozel.github.io"
bundle install          # installs Jekyll with GitHub's exact versions (takes a few minutes)
```

Each time you want to preview:

```bash
cd "/path/to/gozel.github.io"
bundle exec jekyll serve --livereload --unpublished
```

Then open http://localhost:4000/think-tank/. Pages reload when you save a file.
`--unpublished` also shows drafts (`published: false`), including the example piece.
Press Ctrl+C in the terminal to stop.
