'use client'

import Button from "@mui/material/Button";
import React, {ReactNode, useEffect} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
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
					sx={{ my: 2, color: 'white', display: 'block' }}
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
					<Button href={'/get-started'} autoFocus>
						Take Me To The Course
					</Button>
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