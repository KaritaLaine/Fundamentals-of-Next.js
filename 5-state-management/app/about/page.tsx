"use client";

import Navlinks from "@/app/components/navlinks/navlinks";
import { useTheme } from "@/app/context/theme";

const About = () => {
	const { theme } = useTheme();

	return (
		<div
			className={`flex flex-1 flex-col items-center justify-center gap-[3rem] min-h-screen text-center ${
				theme === "dark" ? "bg-black text-white" : "bg-white text-black"
			}`}
		>
			<Navlinks />

			<div className="flex flex-col gap-[1.5rem]">
				<h1 className="text-3xl font-semibold">About this website</h1>
				<p className="text-xl font-medium text-teal-500">
					This is the fifth Next.js website I've created for this course
				</p>
			</div>
		</div>
	);
};

export default About;
