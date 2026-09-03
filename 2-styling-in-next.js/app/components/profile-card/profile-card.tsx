import Image, { type StaticImageData } from "next/image";
import styles from "./profile-card.module.css";

interface ProfileCardProps {
	name: string;
	title: string;
	color: string;
	image: StaticImageData;
}

const ProfileCard = ({ name, title, color, image }: ProfileCardProps) => {
	return (
		<div className={styles.card} style={{ backgroundColor: color }}>
			<div className={styles.avatar}>
				<Image src={image} alt={name} className={styles.avatarImg} />
			</div>

			<div className="flex flex-col gap-1">
				<h2 className="text-lg font-semibold text-yellow-100">{name}</h2>
				<p className="text text-gray-200">{title}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
