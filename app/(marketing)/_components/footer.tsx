import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
	return (
		<div className="flex items-center w-full bg-background z-50 dark:[#1F1F1F]">
			<Logo />
			<div className="md:ml-auto h-[25px] w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground my-auto">
				<Button variant="ghost" size="sm">
					Privacy Policy
				</Button>
				<Button variant="ghost" size="sm">
					Terms & Conditions
				</Button>
			</div>
		</div>
	);
};
