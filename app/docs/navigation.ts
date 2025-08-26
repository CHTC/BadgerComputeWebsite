
// Facilitators can ignore this, it defines the navigation structure for the documentation sidebar.
import type { NavigationItem } from "@/components/DocumentationSidebar";

// You can update the navigation structure here.
export const navigation: NavigationItem[] = [
		{ label: "Docs Home", path: "docs/index.md" },
		{
			label: "Explore",
			children: [
				{ label: "Feature Showcase", path: "docs/showcase.md" },
				{ label: "Example Use Cases", path: "docs/use-cases.md" }
			]
		},
		{
			label: "Learn",
			children: [
				{ label: "Jupyter", path: "docs/jupyter.md" },
				{ label: "Notebooks", path: "docs/notebooks.md" },
				{ label: "Software", path: "docs/software.md" },
				{ label: "Data", path: "docs/data.md" }
			]
		},
		{
			label: "Help",
			children: [
				{ label: "Log in to BadgerCompute", path: "docs/login.md" },
				{ label: "Frequently Asked Questions", path: "docs/faqs.md" },
				{ label: "Get Help", path: "docs/get-help.md" }
			]
		}
];
