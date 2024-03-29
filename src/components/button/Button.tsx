import clsx from "clsx";
import { motion } from "framer-motion";
import React, { HTMLProps } from "react";

import styles from "./Button.module.scss";

const Button = React.forwardRef<
	HTMLAnchorElement,
	HTMLProps<HTMLAnchorElement> & { isDelayed?: boolean }
	// eslint-disable-next-line react/prop-types
>(({ onClick, href, target, className, isDelayed, children }, ref) => {
	return (
		<motion.a
			onClick={onClick}
			href={href}
			ref={ref}
			target={target}
			rel="noopener"
			className={clsx(
				"block relative col-span-2 justify-self-center py-2 px-8 mx-auto font-Roboto text-3xl font-bold text-center text-blue bg-green rounded-lg cursor-pointer w-fit",
				styles.button,
				className,
			)}
			style={{ willChange: "top, opacity, box-shadow" }}
			animate={{ opacity: 1, top: 0 }}
			transition={{
				delay: isDelayed === true ? 3.5 : 0,
				duration: isDelayed === true ? 0.75 : 0,
			}}
			initial={{
				opacity: isDelayed === true ? 0 : 1,
				top: isDelayed === true ? 30 : 0,
			}}
		>
			{children}
		</motion.a>
	);
});

export default Button;
