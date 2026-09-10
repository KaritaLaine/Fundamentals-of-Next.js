import Navlinks from "./components/navlinks/navlinks";

const Home = () => {
	return (
		<div className="flex flex-col gap-[3rem] py-[5rem] max-w-xl m-auto">
			<h1 className="text-3xl font-semibold">Welcome to my final website!</h1>

			<Navlinks />

			<div className="flex flex-col gap-[1rem]">
				<h2 className="text-xl font-medium text-fuchsia-300">What I learned</h2>
				<p className="text-gray-200">
					First of all, I learned how to set up a Next.js project and how the
					routing works. I already have a lot of experience with React,
					TypeScript, Tailwind and frontend in general, so styling, state and
					API work weren't really new to me, though doing them the Next.js way
					did differ a bit. It was also fun to practice with kind-of free hands
					for once, since I'm usually just following someone else's designs.
				</p>
				<p className="text-gray-200">
					The parts I learned the most from were the App Router and the split
					between server and client components, server-side rendering, writing
					tests with Jest, and finally deploying a project on Vercel.
				</p>
			</div>

			<div className="flex flex-col gap-[1rem]">
				<h2 className="text-xl font-medium text-fuchsia-300">Pages</h2>

				<div>
					<h3 className="font-medium text-fuchsia-100"> Home </h3>
					<p className="text-gray-200">-</p>
				</div>

				<div>
					<h3 className="font-medium text-fuchsia-100"> Calculator </h3>
					<p className="text-gray-200">-</p>
				</div>

				<div>
					<h3 className="font-medium text-fuchsia-100"> Editor </h3>
					<p className="text-gray-200">-</p>
				</div>

				<div>
					<h3 className="font-medium text-fuchsia-100"> Quiz </h3>
					<p className="text-gray-200">-</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
