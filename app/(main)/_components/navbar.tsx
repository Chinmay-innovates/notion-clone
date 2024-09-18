"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { ChevronsRightIcon } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Title } from "./title";
import { Banner } from "./banner";
import { Menu } from "./menu";
import { Publish } from "./publish";
import { useSidebar } from "@/hooks/use-sidebar";

interface NavbarProps {
	isCollapsed: boolean;
	onResetWidth: () => void;
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
	const params = useParams();
	const sidebar = useSidebar();

	const document = useQuery(api.documents.getById, {
		documentId: params.documentId as Id<"documents">,
	});

	if (document === undefined) {
		return (
			<nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center justify-between">
				<Title.Skeleton />
				<div className="flex items-center gap-x-2">
					<Menu.Skeleton />
				</div>
			</nav>
		);
	}

	if (document === null) return null;

	return (
		<>
			<nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4 dark:text-white">
				{isCollapsed && !sidebar.isOpen && (
					<ChevronsRightIcon
						role="button"
						onClick={onResetWidth}
						className={
							"size-7 bg-[#1f1f1f] hover:bg-[#525252] text-muted-foreground rounded-sm"
						}
					/>
				)}

				<div className="flex items-center justify-between w-full">
					<Title initialData={document} />
					<div className="flex items-center gap-x-2">
						<Publish data={document} />
						<Menu documentId={document._id} />
					</div>
				</div>
			</nav>
			{document.isArchived && <Banner documentId={document._id} />}
		</>
	);
};
