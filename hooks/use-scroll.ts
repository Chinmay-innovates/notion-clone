import { useEffect, useState } from "react";

export const useScrollTop = (threshold = 10) => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > threshold) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [threshold]);
	return scrolled;
};
