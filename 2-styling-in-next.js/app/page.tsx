import Button from "./components/button/button";
import Card from "./components/card/card";
import Title from "./components/title/title";
import frierenIcon from "./icons/frieren.jpg";

const Home = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-[3rem]">
			<div className="flex flex-col items-center justify-center gap-[1rem]">
				<Title text="Welcome to my second dummy website" />
				<p className="text-xl">
					This website was created while learning about styling in Next.js.
				</p>
			</div>

			<Card
				image={frierenIcon}
				title="Frieren: Beyond Journey's End"
				description="During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them."
			/>

			<Button btnText="Send good vibes :)" />
		</div>
	);
};

export default Home;
