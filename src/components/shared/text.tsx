import clsx from 'clsx'
import React from 'react'

type TitleSize =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'subtitle'
	| 'p1'
	| 'p2'
	| 'p3'
	| 'caption'
	| 'badge'

type Weight = 'regular' | 'medium' | 'bold'

interface Props {
	size?: TitleSize
	weight?: Weight
	className?: string
	text: string
}

export const Text: React.FC<Props> = ({
	text,
	size = 'p3',
	weight = 'medium',
	className,
}) => {
	const mapTagBySize = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		subtitle: 'p',
		p1: 'p',
		p2: 'p',
		p3: 'p',
		caption: 'p',
		badge: 'p',
	} as const

	const mapClassNameBySize = {
		h1: 'text-[48px] leading-[56px]',
		h2: 'text-[36px] leading-[48px]',
		h3: 'text-[32px] leading-[42px]',
		h4: 'text-[24px] leading-[36px]',
		subtitle: 'text-[20px] leading-[32px]',
		p1: 'text-[20px] leading-[28px]',
		p2: 'text-[18px] leading-[28px]',
		p3: 'text-[16px] leading-[26px]',
		caption: 'text-[14px] leading-[20px]',
		badge: 'text-[12px] leading-[16px]',
	} as const

	const mapClassNameByWeight = {
		regular: 'font-regular',
		medium: 'font-medium',
		bold: 'font-bold',
	} as const

	return React.createElement(
		mapTagBySize[size],
		{
			className: clsx(
				mapClassNameBySize[size],
				mapClassNameByWeight[weight],
				className
			),
		},
		text
	)
}
