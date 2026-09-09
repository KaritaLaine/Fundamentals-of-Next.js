import type { Post } from "@/app/types/posts";

const BlogPage = async () => {
	const getPosts = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
	const posts: Post[] = await getPosts.json();

	return (
		<div className="flex flex-col min-h-screen items-center justify-center">
			<div className="flex flex-col gap-[1rem]">
				<h1 className="text-3xl font-bold">My posts:</h1>

				<ul className="flex flex-col text-lg list-['>_'] list-inside gap-[0.5rem]">
					{posts.map((post) => (
						<li key={post.id} className="text-lg max-w-[25rem]">
							{post.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogPage;
