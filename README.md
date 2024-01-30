# Portfolio Site

Using Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Contentful](https://www.contentful.com/) as the data source.

## Site

**[jackkelly.dev](https://jackkelly.dev/)**

## Configuration

### Set up environment variables

Copy .env and rename to .env.local

Set each variable on `.env.local`:

- `CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API Key
- `CONTENTFUL_ACCESS_TOKEN` should be the **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN` should be the **[Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) - access token** field of your API key
- `CONTENTFUL_PREVIEW_SECRET` should be any value you want. It must be URL friendly as the dashboard will send it as a query parameter to enable preview mode

Your `.env.local` file should look like this:

```bash
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_SECRET=...
```

### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

You should be up and running on [http://localhost:3000](http://localhost:3000)!

