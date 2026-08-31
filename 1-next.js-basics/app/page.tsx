import Link from "next/link";
import styles from "./home/home.module.css";

export default function Home() {
	return (
		<div className={styles.layout}>
			<div className={styles.textContainer}>
				<h1> Welcome to my dummy website </h1>
				<p>
					This website was created while doing the "Fundamentals of Next.js"
					-course.
				</p>
			</div>

			<Link href="/about">Go to About Page</Link>
		</div>
	);
}
