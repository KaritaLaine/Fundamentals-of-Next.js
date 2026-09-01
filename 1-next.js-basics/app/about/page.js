import Navigation from "../components/navigation";

export default function About() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center gap-10">
			<Navigation pathname="/about" />

			<div className="flex flex-col items-center gap-5">
				<h1 className="text-4xl font-bold text-[#DB7093]">About this course</h1>
				<p className="text-xl text-gray-300">
					This course offers a first glance at the Next.js framework.
				</p>
			</div>
		</div>
	);
}
