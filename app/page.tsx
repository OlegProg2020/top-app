import { Button } from '@/components/Button/Button'
import { Htag } from '@/components/Htag/Htag'
import { P } from '@/components/P/P'
import Logo from '../public/vercel.svg'

export default function Home() {
	return (
		<div>
			<Logo></Logo>
			<Htag tag='h1'>Заголовок</Htag>
			<P>Текст абзаца</P>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
		</div>
	)
}
