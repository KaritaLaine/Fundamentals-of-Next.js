export const POST = async (request: Request) => {
	const { name, message }: { name?: string; message?: string } =
		await request.json();

	if (
		typeof name !== "string" ||
		typeof message !== "string" ||
		!name.trim() ||
		!message.trim()
	) {
		return Response.json(
			{
				success: false,
				message: "Please provide both your name and a message and try again!",
			},
			{ status: 400 },
		);
	}

	return Response.json(
		{
			success: true,
			message: `Thank you for sending me a beautiful message! :)`,
			data: { name, message },
		},
		{ status: 201 },
	);
};
