import Link from "next/link";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog/post", label: "Blog Post" },
];

const Navigation = () => {
	return (
		<nav>
			<ul>
				{navLinks.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
