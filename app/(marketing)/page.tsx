import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heros } from "./_components/heros";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-4 flex-1 px-6">
				<Heading />
				<Heros />
			</div>
			<Footer />
		</div>
	);
}
