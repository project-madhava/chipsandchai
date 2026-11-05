# Chips and Chai

A one-column site for events and writing in Ahmedabad and Gandhinagar.

```bash
npm install
npm run dev
```

Add an event as `src/content/events/name.md`. Add a piece of writing as `src/content/writing/name.md`. The home page lists events from the last 30 days and anything still ahead. Older events stay on the events page.

A push to `main` builds the site and copies it to the server. A daily run does the same, so the 30-day window moves without another edit.
