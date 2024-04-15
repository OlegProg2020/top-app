import { Button } from '@/components/Button/Button'
import { Htag } from '@/components/Htag/Htag'
import { P } from '@/components/P/P'
import { Tag } from '@/components/Tag/Tag'
import Logo from '../public/vercel.svg'

export default function Home() {
	return (
		<div>
			<Logo></Logo>
			<Htag tag='h1'>Заголовок</Htag>
			<P>Текст абзаца</P>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
			<Tag>Hello</Tag>
			<Tag size='m'>Hello</Tag>
			<Tag size='m' color='red' href='#hello'>
				Hello
			</Tag>
			<Tag size='m' color='primary' href='#hello'>
				Hello
			</Tag>
		</div>
	)
}
