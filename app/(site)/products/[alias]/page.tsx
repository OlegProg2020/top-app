import { Menu } from '../../components/menu'

export default function ProductsPage({params}: {params: {alias: string}}) {
	return (
		<main>
			Страница продукта с alias = {params.alias}
			<Menu></Menu>
		</main>
	)
}
