import { createSignal, Suspense, For, ErrorBoundary } from 'solid-js'
import ChatBubble from '../../../components/chat/ChatBubble'
import Spinner from '../../../components/Spinner'
import type { Message } from '../../../types'

const messages: Message[] = []

const MessageInput = () => {
	const [message, setMessage] = createSignal('')
	return <div>
		<input placeholder="Write a message" value={message()} onChange={(event) => setMessage(event.target.value)} />
		<button>Submit</button>
	</div>
}


const ConversationHistory = () => {
	return <div>
		<For each={messages}>
			{(message) => <ChatBubble message={message} />}
		</For>
	</div>
}

const Fallback = (props: { error: Error, reset: () => void }) => <>
	<h2>Something went wrong</h2>
	<p>We couldn't load this conversation</p>
	<button onClick={props.reset}>Retry</button>
	<button>Go back</button>
</>

// Check if we can use FallbackPage without using => and manually passing props if they have the same signature

const Message = () => {
	return <Suspense fallback={<Spinner />}>
		<ErrorBoundary fallback={(error, reset,) => <Fallback error={error} reset={reset} />}>
			<ConversationHistory />
			<MessageInput />
		</ErrorBoundary>
	</Suspense>
}

export default Message