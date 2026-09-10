import type { ReactNode } from "react";
import Navlinks from "../navlinks/navlinks";

interface PageLayoutProps {
	title: string;
	children: ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
	return (
		<div className="flex flex-col gap-[3rem] py-[5rem] w-xl m-auto">
			<h1 className="text-3xl font-semibold">{title}</h1>

			<Navlinks />

			{children}
		</div>
	);
};

export default PageLayout;
