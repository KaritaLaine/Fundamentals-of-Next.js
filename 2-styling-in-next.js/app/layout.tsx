import "./globals.css";

const RootLayout = ({ children }: LayoutProps<"/">) => {
	return (
		<html lang="en">
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
};

export default RootLayout;
