/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

type SliderProps = {
	className?: string;
	min: number;
	max: number;
	step: number;
	formatLabel?: (value: number) => string;
	value?: number[] | readonly number[];
	onValueChange?: (values: number[]) => void;
};

const RangeSlider = React.forwardRef(
	(
		{ className, min, max, step, formatLabel, value, onValueChange, ...props }: SliderProps,
		ref,
	) => {
		const initialValue = Array.isArray(value) ? value : [min, max];
		const [localValues, setLocalValues] = React.useState(initialValue);

		React.useEffect(() =>{
			setLocalValues(Array.isArray(value) ? value : [min, max]);
		}, [min, max, value]);

		const handleValueChange = (newValues: number[]) => {
			setLocalValues(newValues);
			if (onValueChange) {
				onValueChange(newValues);
			}
		};

		return (
			<SliderPrimitive.Root
				ref={ref as React.RefObject<HTMLDivElement>}
				min={min}
				max={max}
				step={step}
				value={localValues}
				onValueChange={handleValueChange}
				className={cn("relative flex w-full touch-none select-none mb-6 items-center", className)}
				{...props}>
				<SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20">
					<SliderPrimitive.Range className="absolute h-full bg-primary" />
				</SliderPrimitive.Track>
				{localValues.map((value, index) => (
					<React.Fragment key={index}>
						<SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-black shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
					</React.Fragment>
				))}
			</SliderPrimitive.Root>
		);
	},
);

RangeSlider.displayName = SliderPrimitive.Root.displayName;

export { RangeSlider };