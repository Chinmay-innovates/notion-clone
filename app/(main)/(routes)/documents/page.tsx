"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "react-hot-toast";

const DocsPage = () => {
	const create = useMutation(api.documents.create);

	const onCreate = () => {
		const promise = create({ title: "Untitled" });
		toast.promise(
			promise,
			{
				loading: "Creating a new note...",
				success: "New note created!",
				error: "Failed to create note.",
			},
			{
				duration: 3000,
			}
		);
	};

	const { user } = useUser();
	return (
		<div className="h-full flex flex-col items-center justify-center space-y-4">
			<Image
				src="/boy.png"
				alt="Boy"
				width={350}
				height={350}
				className="dark:hidden"
			/>
			<Image
				src="/boy-dark.png"
				alt="Boy Dark"
				width={350}
				height={350}
				className="hidden dark:block"
			/>
			<h2 className="text-lg font-medium">
				Welcome to {user?.firstName}&apos;s Notion.
			</h2>
			<Button onClick={onCreate}>
				<PlusCircleIcon className="icon-r" />
				Create a note
			</Button>
		</div>
	);
};

export default DocsPage;
