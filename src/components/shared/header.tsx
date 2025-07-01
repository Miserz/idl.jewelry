import { cn } from '@/lib/utils'
import { Heart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { CartButton } from './cart-button'
import { Container } from './container'

interface Props {
	hasCheckout?: boolean
	className?: string
}

export const Header: React.FC<Props> = ({ hasCheckout = false, className }) => {
	return (
		<header className={cn('sticky top-0 py-2 mb-8 z-99', className)}>
			<Container className='flex items-center justify-between p-1 border rounded-full bg-card backdrop-blur-2xl h-[50px]'>
				{/* Логотип */}
				<div className='flex justify-start w-full'>
					<Link href='/'>
						<Image
							className='ml-3'
							src='/logo.svg'
							alt='Logo'
							width={191}
							height={27}
						/>
					</Link>
				</div>
				{!hasCheckout && (
					<>
						<nav className='flex gap-10 w-full justify-center'>
							<Link
								className="font-medium relative overflow-hidden after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
								href='/'
							>
								Главная
							</Link>
							<Link
								className="font-medium relative overflow-hidden after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
								href='/catalog'
							>
								Каталог
							</Link>
							<Link
								className="font-medium relative overflow-hidden after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
								href='#'
							>
								О нас
							</Link>
						</nav>
						<div className='flex justify-end gap-3 w-full'>
							<Button className='size-10' variant='ghost' size='icon'>
								<Heart className='size-6' />
							</Button>
							<CartButton />
							<Button className='size-10' variant='ghost' size='icon'>
								<User className='size-6' />
							</Button>
						</div>
					</>
				)}
			</Container>
		</header>
	)
}
