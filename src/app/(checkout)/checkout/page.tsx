import { Card, CheckoutBlock, Container, Text } from '@/components/shared'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
	Input,
	Separator,
} from '@/components/ui'

export default function Checkout() {
	return (
		<Container className='flex gap-6'>
			{/* Правая часть */}
			<Card className='flex flex-col gap-6 w-7/12 px-6 h-fit'>
				<Text text='Оформление заказа' size='h3' weight='bold' />
				<CheckoutBlock
					contentClassName='grid grid-cols-2 gap-4'
					title='1. Данные получателя'
				>
					<Input name='firstName' placeholder='Имя' />
					<Input name='lastName' placeholder='Фамилия' />
					<Input name='email' placeholder='Электронная почта' />
					<Input name='phone' placeholder='Номер телефона' />
				</CheckoutBlock>
			</Card>

			{/* Левая часть */}
			<div className='flex flex-col gap-4 w-5/12 h-fit'>
				<Card className='flex flex-col gap-4 px-6'>
					<div className='flex justify-between'>
						<Text className='text-[#737373]' text='Товары (N)' size='p2' />
						<Text text='2000₽' size='p2' weight='bold' />
					</div>
					<div className='flex justify-between'>
						<Text className='text-[#737373]' text='Скидка' size='p2' />
						<Text
							className='text-[#FF3333]'
							text='-600₽'
							size='p2'
							weight='bold'
						/>
					</div>
					<div className='flex justify-between'>
						<Text className='text-[#737373]' text='Доставка' size='p2' />
						<Text text='250₽' size='p2' weight='bold' />
					</div>
					<Separator />
					<div className='flex justify-between'>
						<Text text='Итого' size='p1' weight='bold' />
						<Text text='1650₽' size='p1' weight='bold' />
					</div>
					<Button size='lg'>
						<Text text='Оформить заказ' />
					</Button>
				</Card>
				<Card>
					<Accordion type='single' collapsible>
						<AccordionItem value='promo'>
							<AccordionTrigger className='p-0 cursor-pointer'>
								<Text text='Промокод или сертификат' />
							</AccordionTrigger>
							<AccordionContent className='mt-4 p-1'>
								<Input
									className='mb-4'
									name='promo'
									placeholder='Введите код'
								/>
								<Button className='w-full' size='lg'>
									<Text text='Применить промокод' />
								</Button>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</Card>
			</div>
		</Container>
	)
}
