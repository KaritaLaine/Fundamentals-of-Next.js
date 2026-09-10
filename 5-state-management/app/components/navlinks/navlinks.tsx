"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/theme";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
];

const Navlinks = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="flex gap-10">
			<nav className="flex flex-row items-center gap-10">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="text-xl font-semibold border-b-2 border-current transition-colors hover:border-teal-500"
					>
						{link.label}
					</Link>
				))}
			</nav>

			<button
				type="button"
				onClick={toggleTheme}
				className="text-xl font-semibold cursor-pointer"
			>
				{theme === "light" ? "🔅" : "🔆"}
			</button>
		</div>
	);
};

export default Navlinks;
