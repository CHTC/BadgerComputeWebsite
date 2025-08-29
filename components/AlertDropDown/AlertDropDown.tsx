'use client';

import React, {ReactNode, useState} from "react";
import Alert, {AlertProps} from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Box from "@mui/material/Box";
import { AlertTitle } from "@mui/material";

interface AlertDropDownProps extends AlertProps {
	title: string;
  children: ReactNode;
}

const AlertDropDown: React.FC<AlertDropDownProps> = ({ title, children, ...alertProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Alert
				{...alertProps}
        action={
          <IconButton
            aria-label={open ? "Collapse alert" : "Expand alert"}
            color="inherit"
            size="small"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        }
        sx={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => setOpen((prev) => !prev)}
      >
				<AlertTitle sx={{mb: 0, pb: 0}}>{title}</AlertTitle>
				<Collapse in={open}>
					<Box sx={{ mt: 2 }}>{children}</Box>
				</Collapse>
      </Alert>
    </Box>
  );
};

export default AlertDropDown;
