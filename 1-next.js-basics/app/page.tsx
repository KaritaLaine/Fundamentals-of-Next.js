import Navigation from "./components/navigation";
import styles from "./home/home.module.css";

const Home = () => {
	return (
		<div className={styles.layout}>
			<Navigation />

			<div className={styles.textContainer}>
				<h1> Welcome to my dummy website </h1>
				<p>
					This website was created while doing the "Fundamentals of Next.js"
					-course.
				</p>
			</div>
		</div>
	);
};

export default Home;
