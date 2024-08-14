/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="astro/astro-jsx" />

/// <reference types="@astrojs/starlight/types" />
/// <reference path="@astrojs/starlight/virtual.d.ts" />
/// <reference types="@astrojs/starlight/schema" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}

interface ImportMetaEnv {
	readonly SKIP_DEPENDENCY_INSTALL: string;
	readonly UNSTABLE_PRE_BUILD: string;
	readonly NODE_VERSION: string;
	readonly KEYSTATIC_REPO_OWNER: string;
	readonly KEYSTATIC_REPO_NAME: string;
	readonly KEYSTATIC_GITHUB_CLIENT_ID: string;
	readonly KEYSTATIC_GITHUB_CLIENT_SECRET: string;
	readonly KEYSTATIC_SECRET: string;
	readonly PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: string;
	readonly CLOUDFLARE_ACCOUNT_ID: string;
	readonly CLOUDFLARE_API_TOKEN: string;
	readonly CLOUDFLARE_PROJECT_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TODO_ANY = any;
