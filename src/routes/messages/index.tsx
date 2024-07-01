import { getMessages } from '../../api/messages/getMessages'
import { For, ErrorBoundary } from 'solid-js'
import { createAsync } from '@solidjs/router'
import Fallback from '../../components/FallbackPage'

const MessagesEntry = () => {
	return <></>
}

const Messages = () => {
	const messages = createAsync(() => getMessages('asd'))
	return <div>
		<ErrorBoundary fallback={<Fallback message="Unable to display messages" />}>
			<For each={messages()?.messages}>
				{(_) => <MessagesEntry/>}
			</For>
		</ErrorBoundary>
	</div>
}

export default Messages