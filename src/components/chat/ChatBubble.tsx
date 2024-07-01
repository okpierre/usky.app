// import Avatar from '../Avatar.tsx'
import type { Message } from '../../types'

const ChatBubble = (props: { message: Message }) => {
	return <div>
		<p>{props.message.content}</p>
		<p>{props.message.timestamp.toDateString()}</p>
	</div>
}

export default ChatBubble