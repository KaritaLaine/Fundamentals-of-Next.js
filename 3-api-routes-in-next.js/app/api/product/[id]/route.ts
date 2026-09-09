export const GET = async (
	_request: Request,
	{ params }: { params: Promise<{ id: string }> },
) => {
	const { id } = await params;

	return Response.json({
		id,
		name: `Product ${id}`,
		price: `5.00 €`,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	});
};
