type PresentationCardProps = {
	title: string;
	name: string;
	date: string;
	profession?: string;
	imageURL: string;
	description: string;
};

export default function PresentationCard({
	title,
	name,
	date,
	profession,
	imageURL,
	description,
}: PresentationCardProps) {
	return (
		<figure className="max-w-screen-sm text-white font-Roboto bg-blue-dark rounded">
			<div className="relative p-3">
				<img className="mb-4 w-full" src={imageURL} alt={title} />
				<figcaption>
					<h3 className="mb-3 text-teal text-2xl font-bold">{title}</h3>
					<h4 className="mb-6 uppercase">
						{name} - {profession ?? "Error: No Profession Provided"}
					</h4>
					<h4 className="text-yellow font-bold">{date}</h4>
					<button
						className="absolute bottom-3 right-3 p-4 text-black leading-none bg-yellow rounded-full"
						type="button"
					>
						+
					</button>
				</figcaption>
			</div>
		</figure>
	);
}
