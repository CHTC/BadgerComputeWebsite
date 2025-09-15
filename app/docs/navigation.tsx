import { MenuBook, Help, Login, SupportAgent } from "@mui/icons-material";

// Facilitators can ignore this, it defines the navigation structure for the documentation sidebar.
import type { NavigationItem } from "@/components/DocumentationSidebar";

// You can update the navigation structure here.
const navigationFiles: NavigationItem[] = [
    { label: "Introduction", path: "/docs/hello-jupyter.md", icon: <MenuBook /> },
    { label: "Log in to BadgerCompute", path: "/docs/login.md", icon: <Login /> },
    { label: "Frequently Asked Questions", path: "/docs/faqs.md", icon: <Help /> },
    { label: "Get Help", path: "/docs/get-help.md", icon: <SupportAgent /> },
    {
        label: "Jupyter Notebooks",
        path: "/docs/jupyter/index.md",
        icon: <SupportAgent />,
        children: [
            { label: "Log in to BadgerCompute", path: "/docs/login.md", icon: <Login /> },
            { label: "Frequently Asked Questions", path: "/docs/faqs.md", icon: <Help /> },
            { label: "Get Help", path: "/docs/get-help.md", icon: <SupportAgent /> },
        ]
    },
    { label: "Admin Docs", path: "/docs/admin-docs.mdx", icon: <MenuBook /> },
    { label: "Getting Started", path: "/app/get-started/get-started.mdx", icon: <MenuBook /> },
    { label: "Policies", path: "/app/policies/policies.mdx", icon: <Help /> },
    {
        label: "Advanced Topics",
        path: "/docs/advanced/index.md",
        icon: <MenuBook />,
        children: [
            { label: "Performance Tuning", path: "/docs/advanced/performance.md", icon: <MenuBook /> },
            { label: "Security", path: "/docs/advanced/security.md", icon: <Help /> },
            {
                label: "Deep Dive",
                path: "/docs/advanced/deep-dive/index.md",
                icon: <SupportAgent />,
                children: [
                    { label: "Networking", path: "/docs/advanced/deep-dive/networking.md", icon: <Help /> },
                    { label: "Storage", path: "/docs/advanced/deep-dive/storage.md", icon: <MenuBook /> },
                    {
                        label: "Nested Level",
                        path: "/docs/advanced/deep-dive/nested/index.md",
                        icon: <Login />,
                        children: [
                            { label: "Level 3A", path: "/docs/advanced/deep-dive/nested/3a.md", icon: <MenuBook /> },
                            { label: "Level 3B", path: "/docs/advanced/deep-dive/nested/3b.md", icon: <Help /> },
                        ]
                    }
                ]
            }
        ]
    },
    { label: "Canvas Course", path: "/docs/get-started-canvas-course.svg", icon: <MenuBook /> },
    { label: "Guided Intro", path: "/public/docs/guided-intro-to-badgercompute/index.md", icon: <SupportAgent /> },
    { label: "Login Guide", path: "/public/docs/login-guide/index.md", icon: <Login /> },
    {
        label: "Resources",
        path: "/docs/resources/index.md",
        icon: <MenuBook />,
        children: [
            { label: "External Links", path: "/docs/resources/links.md", icon: <Help /> },
            { label: "Downloads", path: "/docs/resources/downloads.md", icon: <SupportAgent /> },
            { label: "Empty Section", path: "/docs/resources/empty.md", icon: <MenuBook />, children: [] },
        ]
    },
    { label: "Support", path: "/docs/support.md", icon: <SupportAgent /> },
    { label: "Contact", path: "/docs/contact.md", icon: <Help /> },
    { label: "About", path: "/docs/about.md", icon: <MenuBook /> },
    {
        label: "Multi-Level Test",
        path: "/docs/multi-level/index.md",
        icon: <Login />,
        children: [
            {
                label: "Level 2",
                path: "/docs/multi-level/level2.md",
                icon: <MenuBook />,
                children: [
                    {
                        label: "Level 3",
                        path: "/docs/multi-level/level3.md",
                        icon: <Help />,
                        children: [
                            { label: "Level 4", path: "/docs/multi-level/level4.md", icon: <SupportAgent /> }
                        ]
                    }
                ]
            }
        ]
    },
    { label: "File SVG", path: "/public/docs/file.svg", icon: <MenuBook /> },
    { label: "Banner", path: "/components/UW/Banner/README.md", icon: <Help /> },
    { label: "Footer", path: "/components/UW/Footer/README.md", icon: <SupportAgent /> },
    { label: "Logo", path: "/components/UW/Logo/README.md", icon: <Login /> },
    { label: "Table of Contents", path: "/components/TableOfContents/index.tsx", icon: <MenuBook /> },
    { label: "Alert DropDown", path: "/components/AlertDropDown/index.ts", icon: <Help /> },
    { label: "Analytics", path: "/components/Analytics/index.ts", icon: <SupportAgent /> },
    { label: "Documentation Card", path: "/components/DocumentationCard/index.ts", icon: <Login /> },
    { label: "Documentation Page", path: "/components/DocumentationPage/index.ts", icon: <MenuBook /> },
    { label: "Sidebar", path: "/components/DocumentationSidebar/index.ts", icon: <Help /> },
    { label: "Header", path: "/components/Header/index.ts", icon: <SupportAgent /> },
    { label: "Launch Button", path: "/components/Header/LaunchButton.tsx", icon: <Login /> },
    { label: "Mobile Header", path: "/components/Header/MobileHeader.tsx", icon: <MenuBook /> },
    { label: "Title", path: "/components/Header/Title.tsx", icon: <Help /> },
    { label: "SubHeader", path: "/components/SubHeader/SubHeader.tsx", icon: <SupportAgent /> },
    { label: "UW Banner", path: "/components/UW/Banner/README.md", icon: <MenuBook /> },
    { label: "UW Footer", path: "/components/UW/Footer/README.md", icon: <Help /> },
    { label: "UW Logo", path: "/components/UW/Logo/README.md", icon: <SupportAgent /> },
];

export const navigation = navigationFiles.map(item => {
	return {
		...item,
		path: `${item.path?.replace(/\.mdx?$|\/index\.md$/, '') || ''}/`
	}
})
