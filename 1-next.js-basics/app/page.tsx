import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-10">
			<div className="flex flex-col items-center gap-1">
				<h1> Welcome to my dummy website </h1>
				<p>
					This website was created while doing the "Fundamentals of Next.js"
					-course.
				</p>
			</div>

			<Link href="/about">Go to About Page</Link>
		</div>
	);
}
