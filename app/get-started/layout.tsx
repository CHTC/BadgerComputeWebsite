import type {Metadata} from "next";
import Container from "@mui/material/Container";
import SubHeader from "@/components/SubHeader";

export const metadata: Metadata = {
	title: "Get Started",
	description: "Getting started with CHTC Notebook Service",
};

const SUB_PAGES = [
	{
		title: "Is BadgerHub for Me?",
		href: "#is-badgerhub-for-me",
	},
	{
		title: "Take the Canvas Course",
		href: "#take-the-canvas-course",
	},
	{
		title: "Login to BadgerHub",
		href: "#login-to-badgerhub",
	},
];

export default function Layout({
																 children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SubHeader links={SUB_PAGES} />
			<Container maxWidth="lg" sx={{py: 4}}>
				<main>
					{children}
				</main>
			</Container>
		</>
	);
}