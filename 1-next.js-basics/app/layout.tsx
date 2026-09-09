import "./globals.css";

const RootLayout = ({ children }: LayoutProps<"/">) => {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
};

export default RootLayout;
