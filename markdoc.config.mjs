import { component, defineMarkdocConfig } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
	tags: {
		tabs: {
			render: component("@astrojs/starlight/components", "Tabs"),
		},
	},
	variables: {
		environment: process.env.IS_PROD ? "prod" : "dev",
	},
});
