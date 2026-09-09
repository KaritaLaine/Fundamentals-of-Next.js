interface InputProps {
	label: string;
	name: string;
	value: string;
	placeholder?: string;
	multiline?: boolean;
	onChange: (value: string) => void;
}

const Input = ({
	label,
	name,
	value,
	placeholder,
	multiline,
	onChange,
}: InputProps) => {
	return (
		<div className="flex-1 w-full">
			<div className="flex flex-row">
				<p>{label}</p>
				<span className="text-red-500">*</span>
			</div>

			{multiline ? (
				<textarea
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className="w-full rounded-md bg-[#333333] p-[0.5rem]"
				/>
			) : (
				<input
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className="w-full rounded-md bg-[#333333] p-[0.5rem]"
				/>
			)}
		</div>
	);
};

export default Input;
