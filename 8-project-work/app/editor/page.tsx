"use client";

import { useState } from "react";
import Button from "../components/button/button";
import Input from "../components/input/input";
import Navlinks from "../components/navlinks/navlinks";

const Editor = () => {
	const [text, setText] = useState("");
	const buttons = [
		{ text: "UPPERCASE", edit: () => setText(text.toUpperCase()) },
		{ text: "lowercase", edit: () => setText(text.toLowerCase()) },
		{ text: "Clear", edit: () => setText("") },
	];

	return (
		<div className="flex flex-col gap-[3rem] py-[5rem] w-xl m-auto">
			<h1 className="text-3xl font-semibold">Editor</h1>

			<Navlinks />

			<div className="flex flex-col gap-[2rem]">
				<Input
					label="Type something nice:"
					name="text"
					value={text}
					placeholder="There was once a student who participated in the Fundamentals of Next.js course ..."
					multiline
					onChange={setText}
					w="w-[60%]"
				/>

				<div>
					<p> Press one of the buttons to edit or clear your text: </p>

					<div className="flex gap-[1rem]">
						{buttons.map((btn) => (
							<Button key={btn.text} btnText={btn.text} onClick={btn.edit} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Editor;
