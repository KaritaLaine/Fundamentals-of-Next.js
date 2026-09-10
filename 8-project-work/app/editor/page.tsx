"use client";

import { useState } from "react";
import Button from "../components/button/button";
import Input from "../components/input/input";
import PageLayout from "../components/page-layout/page-layout";

const Editor = () => {
	const [text, setText] = useState("");
	const buttons = [
		{ text: "UPPERCASE", edit: () => setText(text.toUpperCase()) },
		{ text: "lowercase", edit: () => setText(text.toLowerCase()) },
		{ text: "Clear", edit: () => setText("") },
	];

	return (
		<PageLayout title="Text editor">
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
		</PageLayout>
	);
};

export default Editor;
