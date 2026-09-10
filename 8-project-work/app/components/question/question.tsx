interface QuestionProps {
	number: number;
	question: string;
	options: string[];
	answer: string;
	selected?: string;
	submitted: boolean;
	onSelect: (option: string) => void;
}

const Question = ({
	number,
	question,
	options,
	answer,
	selected,
	submitted,
	onSelect,
}: QuestionProps) => {
	const isCorrect = selected === answer;

	return (
		<div className="flex flex-col gap-[0.5rem]">
			<p className="font-medium">
				{number}. {question}
			</p>

			{options.map((option) => (
				<label key={option} className="flex gap-2">
					<input
						type="radio"
						name={`question-${number}`}
						checked={selected === option}
						onChange={() => onSelect(option)}
					/>
					{option}
				</label>
			))}

			{submitted && (
				<p className={isCorrect ? "text-green-400" : "text-red-400"}>
					{isCorrect ? "Correct!" : `Incorrect! Correct answer was ${answer}.`}
				</p>
			)}
		</div>
	);
};

export default Question;
