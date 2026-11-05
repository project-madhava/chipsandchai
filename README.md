# chipsandchai

A community site built with [Popular](https://popular.mariatta.ca/), started
from the `starter` template.

```bash
npm install
npm run dev
```

- **Your settings** live in `popular.config.ts`: name, navigation, footer,
  brand colours, and the UI strings.
- **Your content** lives in `src/content/`: events, blog posts, organizers,
  speakers, venues, and the handbook.
- **Your images** live in `public/images/`.
- **Updating the theme** is `npm update astro-theme-popular`. You are not
  holding a copy of it, so there is nothing to re-merge.

Docs: https://popular.mariatta.ca/docs/?fw=astro

The source of this site is this repository. A push to `main` builds the site and copies `dist/` to the server, which nginx serves at https://chipsandchai.in. A daily run rebuilds even when nothing was pushed, so events age off the upcoming list on their own.

The server copy is the published output only. Edit pages here, not on the server.
