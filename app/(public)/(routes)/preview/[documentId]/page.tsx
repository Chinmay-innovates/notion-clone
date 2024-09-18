"use client";

import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
	params: { documentId: Id<"documents"> };
}
const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
	const Editor = useMemo(
		() => dynamic(() => import("@/components/editor"), { ssr: false }),
		[]
	);
	const document = useQuery(api.documents.getById, {
		documentId: params.documentId,
	});
	const update = useMutation(api.documents.update);

	const onChange = () => {
		update({
			id: params.documentId,
		});
	};

	if (document === undefined) {
		return (
			<div>
				<Cover.Skeleton />
				<div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
					<div className="space-y-4 pl-8 pt-8">
						<Skeleton className="h-14 w-[50%]" />
						<Skeleton className="h-4 w-[80%]" />
						<Skeleton className="h-4 w-[40%]" />
						<Skeleton className="h-4 w-[60%]" />
					</div>
				</div>
			</div>
		);
	}

	if (document === null) return <div>Not found</div>;

	return (
		<div className="pb-40">
			<Cover url={document.coverImage} preview />
			<div className="md:max-w-3xl lg:max-w-4xl mx-auto">
				<Toolbar initialData={document} preview />
				<Editor
					onChange={onChange}
					initialContent={document.content}
					editable={false}
				/>
			</div>
		</div>
	);
};

export default DocumentIdPage;
