import Image, { type StaticImageData } from "next/image";
import styles from "./card.module.css";

interface CardProps {
	image: StaticImageData;
	title: string;
	description: string;
}

const Card = ({ image, title, description }: CardProps) => {
	return (
		<div className={styles.card}>
			<Image src={image} alt={title} className={styles.image} />

			<div className={styles.body}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default Card;
