import { MenuBook, Help, Login, SupportAgent } from "@mui/icons-material";

// Facilitators can ignore this, it defines the navigation structure for the documentation sidebar.
import type { NavigationItem } from "@/components/DocumentationSidebar";

// You can update the navigation structure here.
const navigationFiles: NavigationItem[] = [
	{ label: "Introduction", path: "/docs/hello-jupyter.md", icon: <MenuBook /> },
	{ label: "Log in to BadgerCompute", path: "/docs/login.md", icon: <Login /> },
	{ label: "Frequently Asked Questions", path: "/docs/faqs.md", icon: <Help /> },
	{ label: "Get Help", path: "/docs/get-help.md", icon: <SupportAgent /> }
];

export const navigation = navigationFiles.map(item => {
	return {
		...item,
		path: `${item.path?.replace(/\.mdx?$|\/index\.md$/, '') || ''}/`
	}
})
