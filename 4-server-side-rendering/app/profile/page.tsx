import type { User } from "@/app/types/user";

const ProfilePage = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user`, {
		cache: "no-store",
	});
	const user: User = await response.json();

	return (
		<div className="flex flex-col min-h-screen items-center justify-center gap-[0.5rem]">
			<h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
			<p className="text-gray-500"> or someone else, who knows?</p>
		</div>
	);
};

export default ProfilePage;
