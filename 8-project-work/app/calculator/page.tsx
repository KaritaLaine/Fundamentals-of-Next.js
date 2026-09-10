"use client";

import { useState } from "react";
import Button from "../components/button/button";
import Input from "../components/input/input";
import Navlinks from "../components/navlinks/navlinks";

const buttons = [
	{ text: "+", calc: (a: number, b: number) => a + b },
	{ text: "−", calc: (a: number, b: number) => a - b },
	{ text: "×", calc: (a: number, b: number) => a * b },
	{
		text: "÷",
		calc: (a: number, b: number) => a / b,
	},
];

const Calculator = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [result, setResult] = useState<number | string>("");

	return (
		<div className="flex flex-col gap-[3rem] py-[5rem] w-xl m-auto">
			<h1 className="text-3xl font-semibold">Calculator</h1>

			<Navlinks />

			<div className="flex flex-col gap-[1rem]">
				<p className="text-gray-200 max-w-2/3 mb-[1rem]">
					Enter two numbers, then pick an operator from the buttons below to see
					the result!
				</p>

				<Input
					label="First number:"
					name="a"
					type="number"
					value={String(a)}
					onChange={(value) => setA(Number(value))}
				/>
				<Input
					label="Second number:"
					name="b"
					type="number"
					value={String(b)}
					onChange={(value) => setB(Number(value))}
				/>

				<div className="flex gap-[1rem]">
					{buttons.map((btn) => (
						<Button
							key={btn.text}
							btnText={btn.text}
							onClick={() => setResult(btn.calc(a, b))}
						/>
					))}
				</div>

				{result !== "" && (
					<div className="flex items-center gap-2 self-start rounded-lg border border-fuchsia-300/40 bg-fuchsia-300/10 px-4 py-2 leading-none font-medium mt-[1rem]">
						<p className="text-fuchsia-300">Result:</p>
						<span className="text-lg">{result}</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Calculator;
