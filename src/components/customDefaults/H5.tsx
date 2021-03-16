export default function H5({
	...restProps
}: React.HTMLProps<HTMLHeadingElement>) {
	// eslint-disable-next-line jsx-a11y/heading-has-content
	return <h5 className="mb-2 text-xl" {...restProps} />;
}
