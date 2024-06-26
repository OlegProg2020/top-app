import classNames from 'classnames'
import styles from './Tag.module.css'
import { TagProps } from './Tag.props'

export const Tag = ({
	size = 's',
	color = 'ghost',
	href = '',
	className,
	children,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={classNames(
				className,
				styles.tag,
				{ [styles.s]: size == 's', [styles.m]: size == 'm' },
				{
					[styles.ghost]: color == 'ghost',
					[styles.red]: color == 'red',
					[styles.gray]: color == 'gray',
					[styles.green]: color == 'green',
					[styles.primary]: color == 'primary',
				}
			)}
			{...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}
