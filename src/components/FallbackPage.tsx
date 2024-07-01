import { Show } from 'solid-js'
import { useLocation } from '@solidjs/router'
import Button from './Button'
import styles from './FallbackPage.module.css'

export const FallbackPage = (props: { message: string }, error: unknown, reset: () => void) => {
	const location = useLocation()
	const debugMode = Boolean(location.query.debug)
	return (
		<div class={styles.container}>
			<h2 class={styles.title}>Something went wrong</h2>
			<p>{props.message ?? "Unable to display content"}</p>
			<Show when={debugMode}>
				<code>
					<pre>{JSON.stringify(error)}</pre>
				</code>
			</Show>
			<div class={styles.actions}>
				<Button class={styles.button} onClick={reset}>Retry</Button>
				<Button class={styles.button}>Go back</Button>
			</div>
		</div>
	)
}

export default FallbackPage