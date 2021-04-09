export default function H3({
	...restProps
}: React.HTMLProps<HTMLHeadingElement>) {
	// eslint-disable-next-line jsx-a11y/heading-has-content
	return <h3 className="mb-2 text-2xl" {...restProps} />;
}
