interface ButtonProps {
	btnText: string;
	onClick: () => void;
}

const Button = ({ btnText, onClick }: ButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="rounded-md bg-fuchsia-200 px-[1rem] py-[0.5rem] my-[0.5rem] font-semibold text-black hover:bg-white cursor-pointer transition-colors duration-300"
		>
			{btnText}
		</button>
	);
};

export default Button;
