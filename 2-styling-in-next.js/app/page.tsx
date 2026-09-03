import Button from "./components/button/button";
import Card from "./components/card/card";
import Layout from "./components/layout/layout";
import Title from "./components/title/title";
import apothecaryIcon from "./icons/apothecary-diaries.jpg";
import frierenIcon from "./icons/frieren.jpg";
import spyFamilyIcon from "./icons/spy-x-family.jpg";

const Home = () => {
	return (
		<Layout>
			<div className="flex flex-col items-center justify-center gap-[1rem]">
				<Title text="Welcome to my second dummy website" />
				<p className="text-xl">
					This website was created while learning about styling in Next.js.
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-[2rem]">
				<Card
					image={frierenIcon}
					title="Frieren: Beyond Journey's End"
					description="During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them."
					backgroundColor="#2c2c2e"
				/>

				<Card
					image={apothecaryIcon}
					title="The Apothecary Diaries"
					description="Maomao, an apothecary's daughter, has been plucked from her peaceful life and sold to the lowest echelons of the imperial court. Now merely a maid, Maomao settles into her new mundane life and hides her extensive knowledge of medicine in order to avoid any unwanted attention."
					backgroundColor="#22323a"
				/>

				<Card
					image={spyFamilyIcon}
					title="Spy x Family"
					description="A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together."
					backgroundColor="#4a2c3b"
				/>
			</div>

			<Button btnText="Send good vibes :)" />
		</Layout>
	);
};

export default Home;
