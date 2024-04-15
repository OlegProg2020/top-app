'use client'

import { Button } from '@/components/Button/Button'
import { Htag } from '@/components/Htag/Htag'
import { P } from '@/components/P/P'
import { Tag } from '@/components/Tag/Tag'
import { useEffect, useState } from 'react'
import Logo from '../public/vercel.svg'

export default function Home() {
	const [counter, setCounter] = useState<number>(0)

	useEffect(() => {
		console.log('счетчик: ' + counter)

		return function cleanup() {
			console.log('unmount')
		}
	})

	useEffect(() => {
		console.log('mounted')
	}, [])

	return (
		<div>
			<Logo></Logo>
			<Htag tag='h1'>Счетчик: {counter}</Htag>
			<P>Текст абзаца</P>
			<Button appearance='primary' onClick={() => setCounter((x) => x + 1)}>
				Увеличить счетчик
			</Button>
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
