import { JSXElement } from 'solid-js'

export const Button = (props: { href?: string, class: string, disabled?: boolean, onClick?: () => void, children: JSXElement }) =>
	<button class={props.class} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>

export default Button