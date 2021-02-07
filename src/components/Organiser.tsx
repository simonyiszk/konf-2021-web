import clsx from "clsx";

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
		<div className="flex flex-col items-center mb-10 px-10 space-y-3">
			<div className={clsx(bgColor, "p-2 rounded-full")}>
				<div className="block p-2 bg-blue rounded-full">
					<img
						src={image.fields.file.url}
						alt={name}
						className="w-52 h-52 rounded-full"
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
