import { getMenu } from '@/api/menu.requests'

export async function Menu(): Promise<JSX.Element> {
	const menu = await getMenu(0)

	return (
		<div>
			<div>{menu.length}</div>
			<div>{JSON.stringify(menu)}</div>
		</div>
	)
}
