import ContactForm from "./components/contact-form/contact-form";

const Home = () => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-[1rem] min-h-screen gap-[2rem]">
			<div className="flex flex-col items-center gap-[1rem] text-center">
				<h1 className="text-3xl font-bold">
					Welcome to my third dummy website
				</h1>
				<p className="text-lg">Feel free to send me a message down below!</p>
			</div>

			<ContactForm />
		</div>
	);
};

export default Home;
