import Link from "next/link";

export default function About() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-10">
			<div className="flex flex-col items-center gap-1">
				<h1> About this course </h1>
				<p> This course offers a first glance at the Next.js framework. </p>
			</div>

			<Link href="/">Back to Home</Link>
		</div>
	);
}
