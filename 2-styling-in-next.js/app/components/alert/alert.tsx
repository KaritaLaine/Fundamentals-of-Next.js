interface AlertProps {
	message: string;
}

const Alert = ({ message }: AlertProps) => {
	return (
		<div className="flex w-full max-w-md items-center gap-3 rounded-md border border-yellow-500/40 bg-yellow-500/10 p-3 justify-center">
			<span className="text-2xl">!</span>
			<p>{message}</p>
		</div>
	);
};

export default Alert;
