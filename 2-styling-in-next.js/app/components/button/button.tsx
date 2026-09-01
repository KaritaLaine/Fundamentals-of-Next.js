import styles from "./button.module.css";

interface ButtonProps {
	btnText: string;
}

const Button = ({ btnText }: ButtonProps) => {
	return (
		<button type="button" className={styles.button}>
			{btnText}
		</button>
	);
};

export default Button;
