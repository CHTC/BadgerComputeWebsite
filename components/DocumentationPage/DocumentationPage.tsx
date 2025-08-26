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
	return (
		<Grid container spacing={2}>
			<Grid size={9}>
				<Page />
			</Grid>
			<Grid size={3}>
				<Box sx={{padding: 2, position: 'sticky', top: 70}}>
					<TableOfContents entries={tocEntries} />
				</Box>
			</Grid>
		</Grid>
	)
}

export default DocumentationPage;
