interface ButtonProps {
	btnText: string;
}

const Button = ({ btnText }: ButtonProps) => {
	return (
		<button
			type="submit"
			className="rounded-md bg-[#ffe4c4] p-[0.5rem] my-[0.5rem] font-semibold text-black hover:bg-[#daa520] cursor-pointer transition-colors duration-300"
		>
			{btnText}
		</button>
	);
};

export default Button;
