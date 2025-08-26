import Typography, {TypographyProps} from "@mui/material/Typography";
import Link, {LinkProps} from "@mui/material/Link";
import Box, {BoxProps} from "@mui/material/Box";
import React from "react";

const rehypeComponents = {
	h1: ({ children, ...props }: TypographyProps) => {
		return (
				<Typography variant="h1" gutterBottom {...props}>
					{children}
				</Typography>
		);
	},
	h2: ({ children, ...props }: TypographyProps) => {
		return (
				<Typography variant="h2" gutterBottom {...props}>
					{children}
				</Typography>
		);
	},
	h3: ({  children, ...props }: TypographyProps) => {
		return (
				<Typography variant="h3" gutterBottom {...props}>
					{children}
				</Typography>
		);
	},
	h4: ({ children, ...props }: TypographyProps) => {
		return (
				<Typography variant="h4" gutterBottom {...props}>
					{children}
				</Typography>
		);
	},
	h5: ({ children, ...props }: TypographyProps) => {
		return (
				<Typography variant="h5" gutterBottom {...props}>
					{children}
				</Typography>
		);
	},
	h6: ({ children, ...props }: TypographyProps) => {
		return (
				<Typography variant="h6" gutterBottom {...props}>
					{children}
				</Typography>
		);
	},
	p: (props: TypographyProps) => <Typography variant="body1" {...props} />, // use sx for spacing
	a: (props: LinkProps) => <Link {...props} />, // MUI Link
	ul: (props: BoxProps) => <Box component="ul" sx={{ pl: 4, mb: 2 }} {...props} />, // MUI Box for ul
	ol: (props: BoxProps) => <Box component="ol" sx={{ pl: 4, mb: 2 }} {...props} />, // MUI Box for ol
	li: (props: BoxProps) => <Box component="li" sx={{ mb: 0.5 }} {...props} />, // MUI Box for li
	code: (props: BoxProps) => (
			<Box
					component="code"
					sx={{
						bgcolor: "grey.100",
						px: 0.5,
						py: 0.2,
						borderRadius: 1,
						fontFamily: "monospace",
						fontSize: "0.95em",
					}}
					{...props}
			/>
	),
	pre: (props: BoxProps) => (
			<Box
					component="pre"
					sx={{ bgcolor: "grey.100", p: 2, borderRadius: 2, overflow: "auto", mb: 2 }}
					{...props}
			/>
	),
};

export default rehypeComponents;
