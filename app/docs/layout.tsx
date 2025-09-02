import type {Metadata} from "next";


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import DocumentationSidebar from "@/components/DocumentationSidebar";
import {navigation} from "./navigation";

export const metadata: Metadata = {
	title: "Documentation",
	description: "BadgerHub documentation and tutorials",
};

export default async function Layout({
	children
}: LayoutProps<'/docs'>) {

	return (
		<>
			<Container maxWidth="xl" sx={{py: 4, minHeight: "60vh"}}>
				<Grid container spacing={2} sx={{mb: 4}}>
					<Grid size={{xs: 0, md: 2}} display={{xs: 'none', md: 'block'}}>
						<DocumentationSidebar navigation={navigation} />
					</Grid>
					<Grid size={10}>
						<main>
							{children}
						</main>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

