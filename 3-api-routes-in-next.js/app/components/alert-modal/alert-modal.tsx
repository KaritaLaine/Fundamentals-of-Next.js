interface AlertProps {
	message: string;
	variant: "success" | "error";
	onClose: () => void;
}

const Alert = ({ message, variant, onClose }: AlertProps) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<button
				type="button"
				onClick={onClose}
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
			/>

			<div
				className={`relative flex w-full max-w-md items-center justify-center gap-3 rounded-md bg-[#2c2c2e] p-6 gap-[2rem] border ${variant === "success" ? "border-green-500" : "border-red-500"}`}
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute top-3 right-4 cursor-pointer"
				>
					🗙
				</button>

				<p
					className={`text-2xl ${
						variant === "success" ? "text-green-500" : "text-red-500"
					}`}
				>
					{variant === "success" ? "✓" : "✗"}
				</p>
				<p className="text-lg max-w-3/4">{message}</p>
			</div>
		</div>
	);
};

export default Alert;
