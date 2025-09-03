import {ElementType} from "react";
import {Box, Grid} from "@mui/material";


import TableOfContents from "@/components/TableOfContents";
import {TableOfContentsEntry} from "@/components/types";

export interface DocumentationPageProps {
	Page: ElementType;
	tocEntries: TableOfContentsEntry[];
	frontMatter: Record<string, unknown>;
}

const DocumentationPage = ({Page, tocEntries}: DocumentationPageProps) => {

	// We don't need to add the h1 to the TOC since it's the page title
	const h2AndUpTocEntries = tocEntries.flatMap((tocEntry: TableOfContentsEntry) => {
		if (tocEntry.depth === 1) {
			return tocEntry.children || [];
		}
		return tocEntry;
	})

	return (
		<Grid container spacing={2}>
			<Grid size={{xs: 12, md: 9}}>
				<Page />
			</Grid>
			<Grid size={3} display={{xs: 'none', md: 'block'}}>
				<Box sx={{padding: 2, position: 'sticky', top: 70}}>
					<TableOfContents entries={h2AndUpTocEntries} />
				</Box>
			</Grid>
		</Grid>
	)
}

export default DocumentationPage;
