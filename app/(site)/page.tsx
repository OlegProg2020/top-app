import { getMenu } from '@/api/menu.requests'
import { Menu } from './components/menu'

export default async function Home() {
	const menu = await getMenu(0)

	return (
		<main>
			Главная страница
			<Menu></Menu>
		</main>
	)
}
