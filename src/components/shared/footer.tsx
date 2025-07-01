import React from "react"
import { Text } from "./text"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "./container"
import Link from "next/link"

interface Props {
	className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<footer className={cn("mt-40 bg-card", className)}>
			<Container className="flex justify-between py-12">
				{/* Первый столбец */}
				<ul>
					<li className="pb-4">
						<Image src="/logo.svg" alt="Logo" width={191} height={27} />
					</li>
					<li>
						<Text text="© 2025 IDL JEWELRY." size="p3" weight="medium" />
					</li>
				</ul>

				{/* Второй столбец */}
				<ul>
					<li className="pb-4">
						<Text text="Информация" size="p1" weight="medium" />
					</li>
					<li>
						<Link href="#">
							<Text text="О нас" size="p3" weight="medium" />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Text text="Контакты" size="p3" weight="medium" />
						</Link>
					</li>
				</ul>

				{/* Третий столбец */}
				<ul>
					<li className="pb-4">
						<Text text="Покупателям" size="p1" weight="medium" />
					</li>
					<li>
						<Link href="#">
							<Text text="Доставка" size="p3" weight="medium" />
						</Link>
					</li>
					<li>
						<Link href="#">
							<Text text="Пользовательское соглашение" size="p3" weight="medium" />
						</Link>
					</li>
				</ul>

				{/* Четвертый столбец */}
				<ul>
					<li className="pb-4">
						<Text text="Мы в соцсетях" size="p1" weight="medium" />
					</li>
					<li>
						<Link href="#">
							<Text text="Вконтакте" size="p3" weight="medium" />
						</Link>
					</li>
				</ul>
			</Container>
		</footer>
	);
};