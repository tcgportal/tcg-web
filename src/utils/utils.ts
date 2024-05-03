export function classNames(...classes: (string | undefined)[]) {
	return classes.filter(Boolean).join(' ');
}

export function responsiveClassnames(
	responsiveClasees: {
		'2xl': (string | undefined)[];
		xl: (string | undefined)[];
		lg: (string | undefined)[];
		md: (string | undefined)[];
		sm: (string | undefined)[];
		default: (string | undefined)[];
	},
	...classes: (string | undefined)[]
) {
	const _2xl = responsiveClasees['2xl'].filter(Boolean).join(' ');
	const xl = responsiveClasees.xl.filter(Boolean).join(' ');
	const lg = responsiveClasees.lg.filter(Boolean).join(' ');
	const md = responsiveClasees.md.filter(Boolean).join(' ');
	const sm = responsiveClasees.sm.filter(Boolean).join(' ');
	return classNames(...classes, ...responsiveClasees.default, _2xl, xl, lg, md, sm);
}
