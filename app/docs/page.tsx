import {Typography, Grid, Link, TypographyVariant, IconProps} from "@mui/material";
import {ElementType, cloneElement, ReactElement} from "react";


import { navigation } from "./navigation";
import DocumentationCard from "@/components/DocumentationCard";

import type { NavigationItem } from "@/components/DocumentationSidebar";

const recursableNavigation = {
	label: "BadgerCompute Documentation",
	children: navigation
}

const Page = () => {
	return <Grid container spacing={2}>
		<NavigationItem {...recursableNavigation} depth={1} />
	</Grid>
};

const NavigationItem = ({label, path, icon, children, depth}: NavigationItem & {depth: number}) => {

	// Toss an error if the depth is too high
	// This allows us to cast the types below safely
	if(depth > 5) {
		throw new Error("NavigationItem depth exceeds maximum of 5");
	}

	if(!children) {
		return (
			<Grid display={'flex'} size={{xs: 12, md: 6}}>
				<Link href={path} style={{textDecoration: 'none', width: '100%'}}>
					<DocumentationCard icon={icon} title={label} />
				</Link>
			</Grid>
		)
	}

	return (
		<>
			<Grid size={12}>
				<Typography
					component={`h${depth}` as ElementType}
					variant={`h${depth + 1}` as TypographyVariant}
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
					gutterBottom
				>
					{icon && cloneElement(icon as ReactElement<IconProps>, {style: {fontSize: 'inherit', marginRight: '1rem'}})}
					{label}
				</Typography>
			</Grid>
			{children.map(child => (
				<NavigationItem key={child.label} depth={depth + 1} {...child} />
			))}
		</>
	)

}

export default Page;
