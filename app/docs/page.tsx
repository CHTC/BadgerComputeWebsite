import { Typography, Grid, Link } from "@mui/material";
import { navigation } from "./navigation";
import DocumentationCard from "@/components/DocumentationCard";

const Page = () => {

	return (
		<>
			<Typography component={'h1'} variant="h2" gutterBottom>BadgerCompute Documentation</Typography>
			<Grid container spacing={2}>
				{navigation.map(navItem => (
					<Grid display={'flex'} size={{xs: 12, md: 6, lg: 4}} key={navItem.label}>
						<Link href={navItem.path} style={{textDecoration: 'none', width: '100%'}}>
							<DocumentationCard icon={navItem.icon} title={navItem.label} />
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Page;
