# L33tdawg

Personal project hub for Dhillon Andrew Kannabhiran at [l33tdawg.github.io](https://l33tdawg.github.io/).

The site introduces SAGE Foundation, SAGE, Mynah, Meshticulum and Lantern, with links to other projects, writing, HITB and DHANKA.

## Editing

The complete static site lives in `dist/`. Edit `dist/index.html` for content, `dist/assets/site.css` for styling and `dist/assets/site.js` for navigation behavior. No build step or package installation is required.

For a local preview:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4173.

## Publishing

Push to `main` to deploy through the GitHub Pages workflow. Pages uses GitHub Actions as its publishing source. The existing `/sage/` and `/meshticulum/` project sites are maintained in their own repositories.

## Artwork and fonts

Project marks and illustrations are reused from the founder's public SAGE and SAGE Foundation projects. Foundation and Lantern concept imagery is explicitly labeled on the page. Meshticulum's original mark is attributed to SAGE Foundation / Dhillon Andrew Kannabhiran and comes from its Apache-2.0 repository.

Space Grotesk and Geist Mono are self-hosted under the SIL Open Font License; the license files are in `dist/assets/fonts/`. See [asset provenance](ASSETS.md).
