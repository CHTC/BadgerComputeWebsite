import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {Forum} from '@mui/icons-material';
import React from "react";

import Icon from "./Icon";
import LaunchButton from "./LaunchButton";
import {DISCOURSE_URL} from "@/app/config";
import Link from "@mui/material/Link";

const pages = ['Get Started', 'Policies']

const Header = () => {
	return (
		<AppBar position="static" elevation={0}>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Link href={"/"} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={3}>
						<Icon />
						<Typography variant="h4" sx={{color: 'primary.contrastText'}}>
							BadgerHub
						</Typography>
					</Link>
					<Box sx={{ display:'flex', justifyContent: 'center', flexGrow: 1 }}>
						{pages.map((page) => (
								<Button
										key={page}
										href={`/${page.toLowerCase().replace(/\s+/g, '-')}`}
										sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page}
								</Button>
						))}
					</Box>
					<Box display={"flex"}>
						<LaunchButton>Launch</LaunchButton>
						<IconButton href={DISCOURSE_URL} sx={{color: "primary.contrastText"}}>
							<Forum />
						</IconButton>
					</Box>

				</Toolbar>
			</Container>
		</AppBar>

	)
}


export default Header;
