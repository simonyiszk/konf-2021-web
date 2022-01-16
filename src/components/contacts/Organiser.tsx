import clsx from "clsx";
import Image from "next/image";

import type { IOrganiserFields } from "@/@types/generated/contentful";

export default function Organizer({
	name,
	title,
	email,
	color,
	image,
}: IOrganiserFields) {
	const bgColor = `bg-${color}`;
	const textColor = `text-${color}`;

	return (
		<div className="flex flex-col items-center px-10 mb-10 space-y-3">
			<div className={clsx(bgColor, "p-2 rounded-full")}>
				<div className="block p-2 w-56 h-56 bg-blue rounded-full">
					<Image
						src={`https:${image.fields.file.url}`}
						alt={name}
						className="rounded-full"
						width={208}
						height={208}
					/>
				</div>
			</div>
			<h3 className="text-3xl font-semibold">{name}</h3>
			<h4
				className={clsx(
					"text-sm font-bold tracking-wider uppercase",
					textColor,
				)}
			>
				{title}
			</h4>
			<a href={`mailto:${email}`} className="border-b border-dashed">
				{email}
			</a>
		</div>
	);
}
