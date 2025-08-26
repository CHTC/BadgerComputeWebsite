import {Typography} from "@mui/material";
import {Assignment, Subject, Preview, School} from "@mui/icons-material";

import DocumentationCard from "@/components/DocumentationCard";

const DOCUMENTATION_CATEGORIES = [
	{
		name: "Explore",
		description: "Discover the features and capabilities of BadgerCompute.",
		items: [
			{
				name: "Features Showcase",
				description: "Explore the key features of BadgerCompute.",
				link: "/docs/explore/features-showcase",
				icon: <Preview />
			},
			{
				name: "Example Use Cases",
				description: "See how BadgerCompute can be used in various scenarios.",
				link: "/docs/explore/example-use-cases",
				icon: <Assignment />
			}
		]
	},
	{
		name: "Learn",
		description: "Get in-depth knowledge about BadgerCompute.",
		items: [
			{
				name: "Jupyter",
				description: "Learn how to use Jupyter notebooks with BadgerCompute.",
				link: "/docs/learn/jupyter",
				icon: <School />
			},
			{
				name: "Notebooks",
				description: "Notebooks for BadgerCompute.",
				link: "/docs/learn/notebooks",
				icon: <Subject />
			}
		]
	}
]

const Page = () => {
	return (
		<>
			<Typography variant="h1">BadgerCompute Documentation</Typography>

		</>
	)
}

export default Page;
