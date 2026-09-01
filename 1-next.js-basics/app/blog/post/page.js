import Navigation from "../../components/navigation";

const PostPage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-10">
			<Navigation pathname="/blog/post" />

			<div className="flex flex-col items-center gap-5">
				<h1 className="text-4xl font-bold text-[#DB7093]">Blog post -page</h1>
				<p className="text-xl text-gray-300">
					This page was created for task 6!
				</p>
			</div>
		</div>
	);
};

export default PostPage;
