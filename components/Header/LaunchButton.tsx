'use client'

import Button from "@mui/material/Button";
import React, {ReactNode, useEffect} from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckIcon from "@mui/icons-material/Check";
import {NOTEBOOK_URL} from "@/app/config";
import {useRouter} from "next/navigation";


/**
 * A LaunchButton component that has past trigger memory and asks if you completed the canvas course if you haven't
 */
const LaunchButton = ({children}: {children: ReactNode}) => {

	const [open, setOpen] = React.useState(false);
	const [skipCheck, setSkipCheck] = React.useState(false);
	const router = useRouter()

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
					// @ts-expect-error Colors must be broken because this works just fine and is more extensible than hardcoding a color
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
						Use of BadgerCompute requires completion of the associated Canvas course.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button color={"success"} variant={'outlined'} startIcon={<CheckIcon />} onClick={() => {
						skipFutureCheck();
						launchNotebooks()
					}}>
						Course Is Complete
					</Button>
					<Button
						variant={'contained'}
						startIcon={<AssignmentIcon />}
						autoFocus
						onClick={
							() => {
								setOpen(false);
								router.push('/get-started');
							}
						}
					>
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