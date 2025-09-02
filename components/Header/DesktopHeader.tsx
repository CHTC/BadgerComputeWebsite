'use client'

import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {DISCOURSE_URL} from "@/app/config";
import {Forum} from "@mui/icons-material";
import React from "react";

import LabeledIconButton from "@/components/LabeledIconButton";
import LaunchButton from "@/components/Header/LaunchButton";
import Title from "@/components/Header/Title";
import {HeaderProps} from "@/components/Header";
import {NavigationItem} from "@/components/DocumentationSidebar";

const DesktopHeader = ({pages} : {pages: NavigationItem[]}) => (
	<Toolbar disableGutters>
		<Grid container justifyContent="space-between" alignItems="center" flexGrow={1}>
			<Grid size={{md: "auto", lg: 4}}>
				<Title />
			</Grid>
			<Grid size={{md: "auto", lg: 4}}>
				<Box sx={{ display:'flex', justifyContent: 'center', flexGrow: 1 }}>
					{pages.map(({label, path}) => (
						<Link
							key={path}
							href={path}
						>
							<Button
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{label}
							</Button>
						</Link>
					))}
				</Box>
			</Grid>
			<Grid size={{md: "auto", lg: 4}}>
				<Box display={"flex"} justifyContent={'right'} alignItems={'center'} gap={2}>
					<LabeledIconButton label={"Community"} href={DISCOURSE_URL} sx={{color: "primary.contrastText"}}>
						<Forum />
					</LabeledIconButton>
					<LaunchButton>Launch</LaunchButton>
				</Box>
			</Grid>
		</Grid>
	</Toolbar>
)

export default DesktopHeader;
