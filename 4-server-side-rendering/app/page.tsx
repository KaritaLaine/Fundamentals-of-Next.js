import Link from "next/link";

const Home = () => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-[1rem] min-h-screen text-center">
			<h1 className="text-3xl font-bold">Welcome to my fourth dummy website</h1>
			<Link href="/blog" className="text-2xl font-medium text-violet-300 ">
				You should go check out my blog page!
			</Link>
		</div>
	);
};

export default Home;
