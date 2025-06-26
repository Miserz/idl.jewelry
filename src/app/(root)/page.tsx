import { Container, CtaBlock, ProductCard, Text } from '@/components/shared'
import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			{/* Hero-блок */}
			<Container className='flex items-center justify-between gap-6'>
				{/* Левая часть */}
				<div className='flex flex-col gap-6'>
					<div className='self-start bg-brand/10 px-4 py-2 rounded-full'>
						<Text
							className='text-brand'
							text='Отличительные украшения для уникальных людей'
						/>
					</div>
					<Text
						text='Откройте для себя уникальные украшения ручной работы'
						size='h1'
						weight='bold'
					/>
					<Text
						className='text-[#737373]'
						size='subtitle'
						text='Каждое изделие от IDL JEWELRY создается с любовью и вниманием к деталям. Погрузитесь в мир уникальных украшений, которые подчеркнут вашу индивидуальность.'
					/>
					<Link href='/catalog'>
						<Button className='self-start w-50' size='lg'>
							<Text text='К покупкам' />
						</Button>
					</Link>
				</div>

				{/* Правая часть */}
				<Image
					className='max-w-147 max-h-112 min-w-147 min-h-112 object-cover rounded-3xl'
					src='/hero.svg'
					alt=''
					width={588}
					height={448}
				/>
			</Container>

			{/* Блок товаров */}
			<Container className='flex flex-col gap-10 items-center'>
				<Text text='Наши уникальные изделия' size='h1' weight='bold' />
				<div className='flex gap-6'>
					<ProductCard
						id={0}
						imageUrl='/card1.svg'
						name='Чокер черный из хрусталя и гематита'
						price={1700}
					/>
					<ProductCard
						id={1}
						imageUrl='/card2.svg'
						name='Чокер черный из хрусталя и гематита'
						price={1700}
					/>
					<ProductCard
						id={2}
						imageUrl='/card3.svg'
						name='Чокер черный из хрусталя и гематита'
						price={1700}
					/>
					<ProductCard
						id={3}
						imageUrl='/card1.svg'
						name='Чокер черный из хрусталя и гематита'
						price={1700}
					/>
				</div>
				<Link href='/catalog'>
					<Button size={'lg'} variant={'outline'}>
						<Text text='Смотреть все' size='p3' weight='medium' />
					</Button>
				</Link>
			</Container>

			{/* Преимущества */}
			<Container className='flex flex-col gap-15 py-15'>
				{/* Первый блок */}
				<div className='flex pl-5 border rounded-3xl gap-8'>
					<div className='flex flex-col justify-center w-full'>
						<Text text='Доступные цены' size='h3' weight='bold' />
						<Text
							className='text-[#737373]'
							text='Мы предлагаем украшения по разумным ценам.'
							size='p1'
						/>
					</div>
					<Image
						className='rounded-3xl'
						src='/advantage1.svg'
						alt=''
						width={584}
						height={400}
					/>
				</div>

				{/* Второй блок */}
				<div className='flex pr-5 border rounded-3xl gap-8'>
					<Image
						className='rounded-3xl'
						src='/advantage2.svg'
						alt=''
						width={584}
						height={400}
					/>
					<div className='flex flex-col justify-center w-full'>
						<Text text='Доставка по всей России' size='h3' weight='bold' />
						<Text
							className='text-[#737373]'
							text='Оперативная и надежная доставка украшений в любой уголок страны.'
							size='p1'
						/>
					</div>
				</div>
			</Container>

			{/* CTA-блок */}
			<Container>
				<CtaBlock
					title='Готовы сделать покупку?'
					description='Не упустите возможность украсить себя уникальными изделиями от IDL JEWELRY!'
					buttonText='К покупкам'
				/>
			</Container>
		</>
	)
}
