interface GreetingProps {
	name?: string;
}

const Greeting = ({ name = "visitor" }: GreetingProps) => {
	return (
		<div>
			<p className="text-xl font-medium"> Hi there, {name}! :) </p>
		</div>
	);
};

export default Greeting;
