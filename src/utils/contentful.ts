import { createClient } from "contentful";

export const client = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken:
		(process.env.VERCEL_ENV === "production"
			? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
			: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN) ??
		"ErrorNoAccessToken",
	host:
		process.env.VERCEL_ENV === "production"
			? "cdn.contentful.com"
			: "preview.contentful.com",
});
