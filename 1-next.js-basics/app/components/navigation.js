import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog/post", label: "Blog Post" },
];

const Navigation = () => {
	return (
		<nav>
			<ul className="flex flex-row gap-10">
				{navLinks.map((link) => (
					<li key={link.href}>
						<Link
							href={link.href}
							className="text-xl font-semibold border-b-2 border-white transition-colors hover:border-pink-400"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
