"use client";
import { useSidebar } from "@/hooks/use-sidebar";
import { useEffect } from "react";

const toggle = useSidebar((store) => store.toggle);
const isOpen = useSidebar((store) => store.isOpen);
const onClose = useSidebar((store) => store.onClose);

useEffect(() => {
	const down = (e: KeyboardEvent) => {
		if (e.key.toLowerCase() === "\\" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			toggle();
		}
	};

	document.addEventListener("keydown", down);
	return () => document.removeEventListener("keydown", down);
}, [toggle]);

export const SidebarCommand = () => {
	return <div>SidebarCommand</div>;
};
