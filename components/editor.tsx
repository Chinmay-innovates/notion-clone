// "use client";

// // import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
// // import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
// // import { useTheme } from "next-themes";
// // import { useEdgeStore } from "@/lib/edgestore";
// // import "@blocknote/react/style.css";

interface EditorProps {
	onChange: () => void;
	initialContent?: string;
	editable?: boolean;
}

// // const Editor = ({ onChange, editable, initialContent }: EditorProps) => {
// // 	const { resolvedTheme } = useTheme();
// // 	const { edgestore } = useEdgeStore();
// // 	const handleUpload = async (file: File) => {
// // 		const response = await edgestore.publicFiles.upload({
// // 			file,
// // 		});
// // 		return response.url;
// // 	};
// // 	let parsedContent;
// // 	try {
// // 		parsedContent = initialContent
// // 			? (JSON.parse(initialContent) as PartialBlock[])
// // 			: undefined;
// // 	} catch (error) {
// // 		console.error("Error parsing initial content:", error);
// // 		parsedContent = undefined;
// // 	}

// // 	// const editor: BlockNoteEditor = useCreateBlockNote({
// // 	// 	initialContent: parsedContent,
// // 	// 	uploadFile: handleUpload,
// // 	// });

// // 	return (
// // 		<div>
// // 			{/* <BlockNoteView
// // 				theme={resolvedTheme === "dark" ? "dark" : "light"}
// // 				editor={editor}
// // 				editable={editable}
// // 				onChange={onChange}
// // 			/> */}
// // 			Editor
// // 		</div>
// // 	);
// // };

// import React, { useEffect, useRef, useState } from "react";
// import EditorJS from "@editorjs/editorjs";
// // import CheckList from "@editorjs/checklist";
// // import Code from "@editorjs/code";
// // import Delimiter from "@editorjs/delimiter";
// // import Embed from "@editorjs/embed";
// // import Image from "@editorjs/image";
// // import InlineCode from "@editorjs/inline-code";
// // import List from "@editorjs/list";
// // import Quote from "@editorjs/quote";
// // import Table from "@editorjs/table";
// // import SimpleImage from "@editorjs/simple-image";
// // import Paragraph from "@editorjs/paragraph";
// // import Header from "@editorjs/header";
// // import Raw from "@editorjs/raw";

// // const EDITOR_TOOLS = {
// // 	code: Code,
// // 	header: {
// // 		class: Header,
// // 		shortcut: "CMD+H",
// // 		inlineToolbar: true,
// // 		config: {
// // 			placeholder: "Enter a Header",
// // 			levels: [2, 3, 4],
// // 			defaultLevel: 2,
// // 		},
// // 	},
// // 	paragraph: {
// // 		class: Paragraph,
// // 		// shortcut: 'CMD+P',
// // 		inlineToolbar: true,
// // 	},
// // 	checklist: CheckList,
// // 	inlineCode: InlineCode,
// // 	table: Table,
// // 	list: List,
// // 	quote: Quote,
// // 	delimiter: Delimiter,
// // 	raw: Raw,
// // };
// const Editor = ({ editable, onChange, initialContent }: EditorProps) => {
// 	//add a reference to editor
// 	const ref = useRef();
// 	//initialize editorjs
// 	useEffect(() => {
// 		//initialize editor if we don't have a reference
// 		if (!ref.current) {
// 			const editor = new EditorJS({
// 				// holder: holder,
// 				placeholder: "Start writting here..",
// 				// tools: EDITOR_TOOLS,
// 				initialContent,
// 				async onChange(api, event) {
// 					const content = await api.saver.save();
// 					// console.log(content, "sdfb");
// 					onChange(content);
// 				},
// 			});
// 			// ref.current = editor;
// 		}

// 		//add a return function handle cleanup
// 		// return () => {
// 		// 	if (ref.current && ref.current.destroy) {
// 		// 		ref.current.destroy();
// 		// 	}
// 		// };
// 	}, []);

// 	return (
// 		<>
// 			<div
// 				id={holder}
// 				style={{
// 					width: "100%",
// 					minHeight: 500,
// 					borderRadius: " 7px",
// 					background: "fff",
// 				}}
// 			/>
// 		</>
// 	);
// };

// export default Editor;

import React from "react";

const Editor = ({}: EditorProps) => {
	return <div>Editor</div>;
};

export default Editor;
