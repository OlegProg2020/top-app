import cn from 'classnames'
import styles from './Button.module.css'
import { ButtonProps } from './Button.props'

export const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(
				styles.button,
				{ [styles.primary]: appearance == 'primary' },
				{ [styles.ghost]: appearance == 'ghost' }
			)}>
			{children}
		</button>
	)
}
