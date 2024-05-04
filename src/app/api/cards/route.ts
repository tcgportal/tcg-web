export async function GET() {
	const res = await fetch('', {
		headers: {
			'Content-Type': 'application/json',
			'API-KEY': process.env.API_KEY,
		} as any,
		next: { revalidate: 60 * 5 }, // revalidate use seconds and not ms
	});

	const data = await res.json();

	return Response.json({ data });
}
