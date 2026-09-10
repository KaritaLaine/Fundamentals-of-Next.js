import PageLayout from "./components/page-layout/page-layout";

const Home = () => {
	return (
		<PageLayout title="Welcome to my final website!">
			<div className="flex flex-col gap-[1rem] text-gray-300">
				<h2 className="text-xl font-medium text-fuchsia-300">What I learned</h2>
				<p>
					First of all, I learned how to set up a Next.js project and how the
					routing works. I already have a lot of experience with React,
					TypeScript, Tailwind and frontend in general, so styling, state and
					API work weren't really new to me, though doing them the Next.js way
					did differ a bit. It was also fun to practice with kind-of free hands
					for once, since I'm usually just following someone else's designs.
				</p>
				<p>
					The parts I learned the most from were the App Router and the split
					between server and client components, server-side rendering, writing
					tests with Jest, and deploying a project on Vercel.
				</p>
			</div>

			<div className="flex flex-col gap-[1rem] text-gray-300">
				<h2 className="text-xl font-medium text-fuchsia-300">Pages</h2>

				<div className="flex flex-col gap-[1.5rem]">
					<div className="flex flex-col gap-[0.5rem]">
						<h3 className="font-medium text-white"> Home </h3>
						<p>
							The page you are on now. It gives a short recap of what I learned
							on the course and a brief summary of every other page. It's a
							plain server component that only renders text.
						</p>
					</div>

					<div className="flex flex-col gap-[0.5rem]">
						<h3 className="font-medium text-white"> Calculator </h3>
						<p>
							A simple calculator. You type two numbers into the input fields,
							then press one of the operator buttons (+, −, ×, ÷) to run that
							operation on them. The answer is then shown in a box under the
							buttons. It's a client component that keeps the two numbers and
							the latest result in state, and recalculates whenever you press
							one of the buttons.
						</p>
					</div>

					<div className="flex flex-col gap-[0.5rem]">
						<h3 className="font-medium text-white"> Text editor </h3>
						<p>
							A very simple text editor. You type into the text box, then press
							one of the buttons to change what you wrote: UPPERCASE, lowercase,
							or Clear. It's a client component that keeps your text in state,
							and each button replaces the text with an edited version of it.
						</p>
					</div>

					<div className="flex flex-col gap-[0.5rem]">
						<h3 className="font-medium text-white"> Quiz </h3>
						<p>
							A short multiple-choice quiz. You pick one option per question,
							then press Submit to see which answers were correct and which not,
							and your total score. It's a client component that keeps your
							picked answers in state.
						</p>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Home;
