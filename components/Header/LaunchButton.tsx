'use client'

import Button from "@mui/material/Button";
import React, {ReactNode, useEffect} from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import {NOTEBOOK_URL} from "@/app/config";


/**
 * A LaunchButton component that has past trigger memory and asks if you completed the canvas course if you haven't
 */
const LaunchButton = ({children}: {children: ReactNode}) => {

	const [open, setOpen] = React.useState(false);
	const [skipCheck, setSkipCheck] = React.useState(false);

	useEffect(() => {
		setSkipCheck(getSkipCheck());
	}, []);

	return (
		<>
			<Button
					onClick={(e) => {
						if (!skipCheck) {
							setOpen(true);
							e.preventDefault();
						}
					}}
					href={NOTEBOOK_URL}
					sx={{ my: 2, display: 'block' }}
					variant={"outlined"}
					// @ts-ignore Colors must be broken because this works just fine and is more extensible than hardcoding a color
					color={"primary.contrastText"}
			>
				{children}
			</Button>
			<Dialog
					open={open}
					onClose={() => setOpen(false)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					Confirm Canvas Course Completion
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Use of BadgerHub requires completion of the associated Canvas course.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => {
						skipFutureCheck();
						launchNotebooks()
					}}>Course Is Complete</Button>
					<Link href={'/get-started'}>
						<Button autoFocus>
							Take Me To The Course
						</Button>
					</Link>
				</DialogActions>
			</Dialog>
		</>
	)
}

const getSkipCheck = () => {
	try {
		const storedSkipCheck = localStorage.getItem('skipCheck');
		if (storedSkipCheck) {
			return JSON.parse(storedSkipCheck) === true;
		}
	} catch (e) {
		console.error(e);
	}

	// If no skipCheck is found or parsing fails, return false
	return false;
}

const skipFutureCheck = () => {
	localStorage.removeItem('skipCheck');
	localStorage.setItem("skipCheck", JSON.stringify(true));
}

const launchNotebooks = () => {
	window.open(NOTEBOOK_URL, "_blank");
}


export default LaunchButton;