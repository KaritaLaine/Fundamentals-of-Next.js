interface InputProps {
	label: string;
	name: string;
	value: string;
	type?: string;
	placeholder?: string;
	multiline?: boolean;
	w?: string;
	onChange: (value: string) => void;
}

const Input = ({
	label,
	name,
	value,
	type = "text",
	placeholder,
	multiline,
	w = "w-1/2",
	onChange,
}: InputProps) => {
	return (
		<div className={`${w} flex flex-col gap-[0.5rem]`}>
			<div className="flex flex-row">
				<p>{label}</p>
			</div>

			{multiline ? (
				<textarea
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={(event) => onChange(event.target.value)}
					className="w-full rounded-md bg-[#333333] p-[0.5rem]"
				/>
			) : (
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={(event) => onChange(event.target.value)}
					className="w-full rounded-md bg-[#333333] p-[0.5rem]"
				/>
			)}
		</div>
	);
};

export default Input;
