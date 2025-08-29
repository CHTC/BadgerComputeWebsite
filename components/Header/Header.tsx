'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Forum, Menu, Close} from '@mui/icons-material';
import React, {useState} from "react";

import Icon from "./Icon";
import {DISCOURSE_URL, NOTEBOOK_URL} from "@/app/config";
import Link from "@mui/material/Link";
import LabeledIconButton from "@/components/LabeledIconButton";
import LaunchButton from "@/components/Header/LaunchButton";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const pages = [
	{ label: 'Get Started', path: '/get-started' },
	{ label: 'Policies', path: '/policies' },
	{ label: 'Documentation', path: '/docs' }
]

const Header = () => {
	return (
		<AppBar position="sticky" elevation={0}>
			<Container maxWidth="lg">
				<Box sx={{ display: { xs: 'block', md: 'none' } }}>
					<MobileToolbar />
				</Box>
				<Box sx={{ display: { xs: 'none', md: 'block' } }}>
					<DesktopToolbar />
				</Box>
			</Container>
		</AppBar>
	)
}

const MobileToolbar = () => {

	const [navOpen, setNavOpen] = useState(false)

	const handleDrawerOpen = () => setNavOpen(true);
	const handleDrawerClose = () => setNavOpen(false);

	return (
		<Toolbar disableGutters>
			<Grid container justifyContent="space-between" alignItems="center" flexGrow={1}>
				<Grid size={'auto'}>
					<IconButton
							size="large"
							aria-label="open navigation menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleDrawerOpen}
							color="inherit"
					>
						<Menu />
					</IconButton>
				</Grid>
				<Grid size={'auto'}>
					<Title />
				</Grid>
				<Grid size={'auto'} display={{xs: 'none', sm: 'block'}}>
					<Box display={"flex"} justifyContent={'right'} alignItems={'center'} gap={2}>
						<LabeledIconButton label={"Discourse"} href={DISCOURSE_URL} sx={{color: "primary.contrastText"}}>
							<Forum />
						</LabeledIconButton>
					</Box>
				</Grid>
			</Grid>
			<Drawer
				anchor="left"
				open={navOpen}
				onClose={handleDrawerClose}
			>
				<Box
					sx={{ width: "100vw" }}
					role="presentation"
					onClick={handleDrawerClose}
					onKeyDown={handleDrawerClose}
				>
					<List sx={{pt: 0}}>
						<Box bgcolor={'primary.main'} mb={3}>
							<ListItem>
								<Title />
								<IconButton onClick={handleDrawerClose} sx={{marginLeft: 'auto', color: 'primary.contrastText'}}>
									<Close />
								</IconButton>
							</ListItem>
						</Box>

						{pages.map(({ label, path }) => (
							<ListItem key={path} disablePadding>
								<ListItemButton component="a" href={path}>
									<ListItemText primary={label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						<ListItem disablePadding>
							<ListItemButton component="a" href={DISCOURSE_URL}>
								<ListItemText primary="Discourse" />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</Toolbar>
	)
}

const DesktopToolbar = () => (
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
					<LabeledIconButton label={"Discourse"} href={DISCOURSE_URL} sx={{color: "primary.contrastText"}}>
						<Forum />
					</LabeledIconButton>
					<LaunchButton>Launch</LaunchButton>
				</Box>
			</Grid>
		</Grid>
	</Toolbar>
)


const Title = () => (
		<Link href={"/"} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={{lg: 3, xs: 1}} component={'a'}>
			<Icon />
			<Typography variant="h4" sx={{color: 'primary.contrastText'}}>
				BadgerCompute
			</Typography>
		</Link>
)

export default Header;
