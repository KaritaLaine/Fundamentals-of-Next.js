"use client";

import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/calculator", label: "Calculator" },
	{ href: "/editor", label: "Text editor" },
	{ href: "/quiz", label: "Quiz" },
];

const Navlinks = () => {
	return (
		<div className="flex gap-10">
			<nav className="flex flex-row items-center gap-[2rem]">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="font-medium border-b-2 border-current transition-colors hover:border-fuchsia-300"
					>
						{link.label}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Navlinks;
