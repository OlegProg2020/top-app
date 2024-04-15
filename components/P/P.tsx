import classNames from 'classnames'
import styles from './P.module.css'
import { PProps } from './P.props'

export const P = ({
	size = 'm',
	className,
	children,
	...props
}: PProps): JSX.Element => {
	return (
		<p
			className={classNames(className, styles.p, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
			{...props}>
			{children}
		</p>
	)
}
