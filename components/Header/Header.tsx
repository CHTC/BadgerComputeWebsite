import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {Forum, Description} from '@mui/icons-material';
import React from "react";

import Icon from "./Icon";
import LaunchButton from "./LaunchButton";
import {DISCOURSE_URL} from "@/app/config";
import Link from "@mui/material/Link";
import LabeledIconButton from "@/components/LabeledIconButton";

const pages = [
	{ label: 'Get Started', path: '/get-started' },
	{ label: 'Policies', path: '/policies' },
	{ label: 'Documentation', path: '/docs' }
]

const Header = () => {
	return (
		<AppBar position="sticky" elevation={0}>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Link href={"/"} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={3}>
						<Icon />
						<Typography variant="h4" sx={{color: 'primary.contrastText'}}>
							BadgerCompute
						</Typography>
					</Link>
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
					<Box display={"flex"} alignItems={'center'} gap={1}>
						<LabeledIconButton label={"Discourse"} href={DISCOURSE_URL} sx={{color: "primary.contrastText"}}>
							<Forum />
						</LabeledIconButton>
						<LabeledIconButton label={"Docs"} href={"/docs"} sx={{color: "primary.contrastText"}}>
							<Description />
						</LabeledIconButton>
						<LaunchButton>Launch Notebook</LaunchButton>
					</Box>

				</Toolbar>
			</Container>
		</AppBar>

	)
}

export default Header;
