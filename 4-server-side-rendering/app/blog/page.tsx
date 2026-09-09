import { posts } from "@/app/data/posts";

export const revalidate = 10;

const BlogPage = async () => {
	console.log("Rendering blog on server");

	const lastUpdated = new Date().toLocaleString();
	const displayPostId = posts[Math.floor(Math.random() * posts.length)]?.id;

	return (
		<div className="flex flex-col min-h-screen items-center justify-center">
			<div className="flex flex-col gap-[1rem]">
				<h1 className="text-3xl font-semibold">My posts:</h1>
				<p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>

				<ul className="flex flex-col text-lg list-['>_'] list-inside gap-[1rem]">
					{posts.map((post) => {
						const isDisplayed = post.id === displayPostId;

						return (
							<li key={post.id} className="max-w-[25rem]">
								<span
									className={`font-medium ${isDisplayed ? "text-violet-300" : ""}`}
								>
									{post.title}
								</span>

								{isDisplayed && (
									<p className="ml-[1.5rem] mt-[0.25rem] text-sm">
										{post.content}
									</p>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default BlogPage;
