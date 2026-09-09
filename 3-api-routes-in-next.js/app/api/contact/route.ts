export const POST = async (request: Request) => {
	const { name, message }: { name: string; message: string } =
		await request.json();

	return Response.json({
		success: true,
		message: `Thank you for sending me a message!`,
		data: { name, message },
	});
};
