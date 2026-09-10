import Navlinks from "../components/navlinks/navlinks";

const Quiz = () => {
	return (
		<div className="flex flex-col gap-[3rem] py-[5rem] w-xl m-auto">
			<h1 className="text-3xl font-semibold">Quiz</h1>

			<Navlinks />

			<div className="flex flex-col gap-[1rem]">
				<p className="text-gray-200">content</p>
			</div>
		</div>
	);
};

export default Quiz;
