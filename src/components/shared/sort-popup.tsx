import { cn } from "@/lib/utils"
import { ArrowUpDown } from "lucide-react"
import React from "react";
import { Text } from "./text"

interface Props {
	className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(
			"inline-flex items-center gap-1 bg-card px-5 h-10 rounded-full cursor-pointer border",
			className,
			)}>
			<ArrowUpDown size={16} />
			<Text text="Сортировка:" />
			<Text text="популярное" />
		</div>
	);
};