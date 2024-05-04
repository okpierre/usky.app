import { ErrorBoundary, For } from 'solid-js'
import { cache, createAsync } from '@solidjs/router'
import { Link, Meta, Title } from '@solidjs/meta'
import Entry from '../../components/Entry'
import Spinner from '../../components/Spinner'
import getPopularFeedGenerators from '../../api/unspecced/getPopularFeedGenerators'
import { id } from '../../utils'

export const getPopularFeeds = cache(async () => await getPopularFeedGenerators(), "feeds")

const Feeds = () => {
	const feeds = createAsync(() => getPopularFeeds())
	const title = 'Feeds - Bluesky (usky.app)'
	const description = 'Popular feeds on Bluesky'
	const url = 'https://usky.app/feeds'
	return <>
		<ErrorBoundary fallback={<Title>{title}</Title>}>
			<Title>{title}</Title>
			<Meta name='description' content={description} />
			<Meta property='og:title' content={title} />
			<Meta property='og:description' content={description} />
			<Meta property='og:url' content={url} />
			<Meta name='twitter:title' content={title} />
			<Meta name='twitter:description' content={description} />
			<Meta property='twitter:url' content={url} />
			<Link rel='canonical' href={url} />
		</ErrorBoundary>
		<For each={feeds()?.feeds} fallback={<Spinner />} >
			{(feed) => <Entry
				type='creator'
				displayName={feed.displayName}
				description={feed.description}
				avatar={feed.avatar ?? '/feed.svg'}
				href={`/profile/${feed.creator.did}/feed/${id(feed.uri)}`}
			/>}
		</For>
	</>
}

export default Feeds