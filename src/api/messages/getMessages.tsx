import { cache } from '@solidjs/router'
import { MESSAGING_SERVICE_BASE_URL } from '../../constants'
import type { Message } from '../../types'

const fetchMessages = async (user: string): Promise<{
	messages: {
		actor: string,
		content: Message[]
	}[]
}> => {
	const request = new Request(
		`${MESSAGING_SERVICE_BASE_URL}/${user}`,
		{
			method: 'GET'
			// headers: {
			// 	Authorization: 'Bearer ' + accessJwt
			// }
		}
	)
	
	const response = await fetch(request)
	return await response.json()
}

export const getMessages = cache(async (user: string) => await fetchMessages(user), "messages")

export default getMessages
