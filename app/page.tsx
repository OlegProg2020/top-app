import { Button } from '@/components/Button/Button'
import { Htag } from '@/components/Htag/Htag'
import Logo from '../public/vercel.svg'

export default function Home() {
	return (
		<div>
			<Logo></Logo>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
		</div>
	)
}
