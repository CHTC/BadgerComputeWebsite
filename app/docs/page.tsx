import { Typography, Grid } from "@mui/material";
import { navigation } from "./navigation";
import DocumentationCard from "@/components/DocumentationCard";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const navCards = [
	{
		label: "Introduction",
		icon: <InfoOutlinedIcon fontSize="inherit" color="primary" />,
		description: "Get an overview of BadgerCompute and how it works.",
		path: navigation.find(n => n.label === "Introduction")?.path || "#"
	},
	{
		label: "Explore",
		icon: <TravelExploreOutlinedIcon fontSize="inherit" color="primary" />,
		description: "See feature showcases and example use cases.",
		path: navigation.find(n => n.label === "Explore")?.children?.[0]?.path || "#"
	},
	{
		label: "Learn",
		icon: <SchoolOutlinedIcon fontSize="inherit" color="primary" />,
		description: "Learn about Jupyter, notebooks, data, and more.",
		path: navigation.find(n => n.label === "Learn")?.children?.[0]?.path || "#"
	},
	{
		label: "Help",
		icon: <HelpOutlineOutlinedIcon fontSize="inherit" color="primary" />,
		description: "Find answers to common questions or get help.",
		path: navigation.find(n => n.label === "Help")?.children?.[0]?.path || "#"
	}
];

const Page = () => {
	return (
		<>
			<Typography component={'h1'} variant="h2" gutterBottom>BadgerCompute Documentation</Typography>
			<Grid container spacing={2}>
				{navCards.map(card => (
					<Grid display={'flex'} size={{xs: 12, md: 6, lg: 4}} key={card.label}>
						<DocumentationCard icon={card.icon} title={card.label} description={card.description} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Page;
