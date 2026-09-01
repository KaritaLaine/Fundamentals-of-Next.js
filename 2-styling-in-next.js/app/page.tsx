import Button from "./components/button/button";
import Title from "./components/title/title";

const Home = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-[3rem]">
			<div className="flex flex-col items-center justify-center gap-[1rem]">
				<Title text="Welcome to my second dummy website" />
				<p className="text-xl">
					This website was created while learning about styling in Next.js.
				</p>
			</div>

			<Button btnText="Send good vibes :)" />
		</div>
	);
};

export default Home;
