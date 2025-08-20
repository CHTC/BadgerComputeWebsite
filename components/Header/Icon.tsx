import BadgetHubIconWEBP from "@/public/logos/badgerhub_icon.webp";
import BadgerHubIconPNG from "@/public/logos/badgerhub_icon.png";
import React, {CSSProperties} from "react";

const Icon = ({size = "50px"}: {size?: CSSProperties['width']}) => {

	const style = {
		height: size,
		width: size,
	}

	return (
		<picture>
			<source
					srcSet={BadgetHubIconWEBP.src}
					type="image/webp"
					style={style}
			/>
			<img
					src={BadgerHubIconPNG.src}
					alt="Badger Hub Icon"
					style={style}
			/>
		</picture>
	)
}

export default Icon;
