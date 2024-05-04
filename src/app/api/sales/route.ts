import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	const ssid = request.cookies.get('ssid');
	// const headerList = new Headers(request.headers);

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
