import Title from "./components/title/title";

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-4">
			<Title text="Welcome to my second dummy website" />
			<p>This website was created while learning about styling in Next.js.</p>
		</div>
	);
};

export default Home;
