import type {Metadata} from "next";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
	title: "Get Started",
	description: "Getting started with CHTC Notebook Service",
};


export default function Layout({
																 children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Container maxWidth="lg" sx={{py: 4}}>
				<main>
					{children}
				</main>
			</Container>
		</>
	);
}