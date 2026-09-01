import Image, { type StaticImageData } from "next/image";
import styles from "./card.module.css";

interface CardProps {
	image: StaticImageData;
	title: string;
	description: string;
	backgroundColor: string;
}

const Card = ({ image, title, description, backgroundColor }: CardProps) => {
	return (
		<div className={styles.card} style={{ backgroundColor }}>
			<Image src={image} alt={title} className={styles.image} />

			<div className={styles.body}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default Card;
