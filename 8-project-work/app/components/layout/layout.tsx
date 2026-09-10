import type { ReactNode } from "react";
import Navlinks from "../navlinks/navlinks";

interface LayoutProps {
	title: string;
	children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
	return (
		<div className="flex flex-col gap-[3rem] py-[5rem] w-xl m-auto">
			<h1 className="text-3xl font-semibold">{title}</h1>

			<Navlinks />

			{children}
		</div>
	);
};

export default Layout;
