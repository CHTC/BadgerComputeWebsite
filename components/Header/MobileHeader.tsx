'use client';

import React, {useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import {Close, Forum, Menu} from "@mui/icons-material";
import Box from "@mui/material/Box";
import LabeledIconButton from "@/components/LabeledIconButton";
import {DISCOURSE_URL, NOTEBOOK_URL} from "@/app/config";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link"

import Title from "@/components/Header/Title";
import {NavigationItem} from "@/components/DocumentationSidebar";

const MobileHeader = ({pages} : {pages: NavigationItem[]}) => {

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
						<LabeledIconButton label={"Community"} href={DISCOURSE_URL} sx={{color: "primary.contrastText"}}>
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
						{pages.map((page) => (
							<MobileNavigationItem key={page.path + page.label} page={page} />
						))}
						<MobileNavigationItem page={{label: "Community", path: DISCOURSE_URL, icon: <Forum />}} />
						<MobileNavigationItem page={{label: "Launch Notebook", path: NOTEBOOK_URL}} />
					</List>
					<Divider />
					<List>
					</List>
				</Box>
			</Drawer>
		</Toolbar>
	)
}

const MobileNavigationItem = ({ page }: { page: NavigationItem }) => {
  if (page.children && page.children.length > 0) {
    return <MobileNavigationFolder page={page} />;
  } else {
		const href = `${page.path?.replace(/\.mdx?$|\/index\.md$/, '') || ''}/`
    return (
			<Link href={href} color="inherit" underline={'none'}>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary={page.label} />
					</ListItemButton>
				</ListItem>
			</Link>
    );
  }
};

const MobileNavigationFolder = ({ page }: { page: NavigationItem }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleToggle}>
          <ListItemText primary={page.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 2 }}>
          {page.children?.map((child) => (
            <MobileNavigationItem key={child.label + (child.path || "")} page={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default MobileHeader;
