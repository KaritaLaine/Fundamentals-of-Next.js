"use client";

import { useState } from "react";
import Alert from "../alert-modal/alert-modal";
import Button from "../button/button";
import Input from "../input/input";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [result, setResult] = useState<{
		success: boolean;
		message: string;
	} | null>(null);

	const sendMessage = async () => {
		const response = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, message }),
		});

		const data = await response.json();
		setResult(data);

		if (data.success) {
			setName("");
			setMessage("");
		}
	};

	return (
		<>
			<form
				className="flex w-[20rem] flex-col gap-[1rem]"
				onSubmit={(e) => {
					e.preventDefault();
					sendMessage();
				}}
			>
				<Input
					label="Name"
					name="name"
					value={name}
					placeholder="Anonymous"
					onChange={setName}
				/>

				<Input
					label="Message"
					name="message"
					value={message}
					placeholder="Good luck finishing this course!"
					multiline
					onChange={setMessage}
				/>

				<Button btnText="Send" />
			</form>

			{result && (
				<Alert
					message={result.message}
					variant={result.success ? "success" : "error"}
					onClose={() => setResult(null)}
				/>
			)}
		</>
	);
};

export default ContactForm;
