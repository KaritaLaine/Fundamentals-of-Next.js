export const POST = async (request: Request) => {
	const { name, message }: { name?: string; message?: string } =
		await request.json();

	if (!name || !message) {
		return Response.json(
			{
				success: false,
				message: "Please provide both your name and a message and try again!",
			},
			{ status: 400 },
		);
	}

	return Response.json({
		success: true,
		message: `Thank you for sending me a message! :)`,
		data: { name, message },
	});
};
