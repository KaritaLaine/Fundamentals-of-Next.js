import styles from "./title.module.css";

interface TitleProps {
	text: string;
}

const Title = ({ text }: TitleProps) => {
	return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
