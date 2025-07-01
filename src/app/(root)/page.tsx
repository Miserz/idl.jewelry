import {
	Card,
	Container,
	CtaBlock,
	ProductCard,
	Text,
} from '@/components/shared'
import { Button } from '@/components/ui'
import { Medal, PaintBucket, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			{/* Hero-блок */}
			<Container>
				<Card className='flex gap-6 justify-between'>
					{/* Левая часть */}
					<div className='flex flex-col gap-6 flex-6/12'>
						<div className='self-start bg-slogan/10 px-4 py-2 rounded-full'>
							<Text
								className='text-slogan'
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
						className='flex-6/12 h-[416px] object-cover rounded-xl'
						src='/hero.svg'
						alt=''
						width={556}
						height={416}
					/>
				</Card>
			</Container>

			{/* Блок товаров */}
			<Container>
				<Card className='flex flex-col gap-10 items-center'>
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
				</Card>
			</Container>

			{/* Преимущества */}
			<Container>
				<Card className='flex gap-15'>
					{/* Картинка */}
					<Image
						className='rounded-xl'
						src='/advantage.svg'
						alt=''
						width={540}
						height={732}
					/>

					{/* Информация */}
					<div className='flex flex-col justify-center gap-5'>
						<Text text='Почему выбирают нас' size='h2' weight='bold' />
						<div className='flex gap-2'>
							<div className='self-start bg-slogan/10 p-1 rounded-full w-fit'>
								<Medal className='text-slogan' />
							</div>
							<div>
								<Text text='Качественные материалы' size='h4' weight='bold' />
								<Text
									className='text-[#737373]'
									text='Мы используем только высококачественные материалы для создания наших украшений, обеспечивая долговечность и комфорт при носке.'
									size='p1'
								/>
							</div>
						</div>
						<div className='flex gap-2'>
							<div className='self-start bg-slogan/10 p-1 rounded-full w-fit'>
								<PaintBucket className='text-slogan' />
							</div>
							<div>
								<Text text='Уникальный дизайн' size='h4' weight='bold' />
								<Text
									className='text-[#737373]'
									text='Каждое украшение создается с вниманием к деталям и уникальным дизайном, который подчеркнет вашу индивидуальность.'
									size='p1'
								/>
							</div>
						</div>
						<div className='flex gap-2'>
							<div className='self-start bg-slogan/10 p-1 rounded-full w-fit'>
								<Truck className='text-slogan' />
							</div>
							<div>
								<Text text='Быстрая доставка' size='h4' weight='bold' />
								<Text
									className='text-[#737373]'
									text='Мы осуществляем доставку по всей России в кратчайшие сроки, чтобы вы могли как можно скорее насладиться своими новыми украшениями.'
									size='p1'
								/>
							</div>
						</div>
					</div>
				</Card>
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
