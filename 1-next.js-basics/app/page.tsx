import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-10">
			<h1> Home </h1>

			<Link href="/about">Go to About Page</Link>
		</div>
	);
}
