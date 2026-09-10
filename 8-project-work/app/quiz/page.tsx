"use client";

import { useState } from "react";
import Button from "../components/button/button";
import Navlinks from "../components/navlinks/navlinks";
import Question from "../components/question/question";

const questions = [
	{
		question: "Which of these is an animal?",
		options: ["Cat", "Next.js", "Table"],
		answer: "Cat",
	},
	{
		question: "What is 1 + 4?",
		options: ["3", "5", "6.2"],
		answer: "5",
	},
	{
		question: "Which planet do we live on?",
		options: ["Mars", "Jupiter", "Earth"],
		answer: "Earth",
	},
];

const Quiz = () => {
	const [answers, setAnswers] = useState<{ [questionIndex: number]: string }>(
		{},
	);
	const [submitted, setSubmitted] = useState(false);

	const selectAnswer = (questionIndex: number, option: string) => {
		setAnswers({ ...answers, [questionIndex]: option });
	};

	const score = questions.filter((q, i) => answers[i] === q.answer).length;

	return (
		<div className="flex flex-col gap-[3rem] py-[5rem] w-xl m-auto">
			<h1 className="text-3xl font-semibold">Quiz</h1>

			<Navlinks />

			<div className="flex flex-col gap-[2rem]">
				{questions.map((q, i) => (
					<Question
						key={q.question}
						number={i + 1}
						question={q.question}
						options={q.options}
						answer={q.answer}
						selected={answers[i]}
						submitted={submitted}
						onSelect={(option) => selectAnswer(i, option)}
					/>
				))}

				{submitted ? (
					<p className="text-lg font-medium">
						You got {score} out of {questions.length} answers correct!
					</p>
				) : (
					<Button
						btnText="Submit"
						w="w-1/2"
						onClick={() => setSubmitted(true)}
					/>
				)}
			</div>
		</div>
	);
};

export default Quiz;
