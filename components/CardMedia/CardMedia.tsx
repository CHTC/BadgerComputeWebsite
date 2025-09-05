import Box from "@mui/material/Box";
import ExportedImage from "next-image-export-optimizer";
import React from "react";

export interface StaticImageData {
	src: string
	height: number
	width: number
	blurDataURL?: string
	blurWidth?: number
	blurHeight?: number
}

interface CardMediaProps {
  image: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const CardMedia: React.FC<CardMediaProps> = ({ image, alt = "", width, height, style, ...rest }) => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ExportedImage
        src={image}
        alt={alt}
        width={width}
        height={height}
        style={{ width: width ? width : "100%", height: height ? height : "auto", ...style }}
        {...rest}
      />
    </Box>
  );
};

export default CardMedia;
