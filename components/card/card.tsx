import { Badge } from '@/components/badge/badge'
import { Video } from '@/components/video/video'

import { WebLink } from '../web-link/web-link'
import { CardBody } from './card-body'
import { CardTitle } from './card-title'
import { CardItem } from './card-types'

type CardProps = {
	item: CardItem
}

export const Card = ({ item }: CardProps) => {
	const {
		cover,
		imgPlaceholder,
		titleCard,
		infoExtra,
		links,
		videos,
		createdAt,
		updatedAt,
	} = item

	return (
		<div className='card p-4 ring-1 bg-base-100 shadow-lg h-auto'>
			<Badge
				className='absolute top-0 right-0 m-2'
				createdAt={createdAt}
				updatedAt={updatedAt}
			/>
			<CardBody cover={cover} imgPlaceholder={imgPlaceholder} />
			<>
				<div className='divider m-0 p-0'></div>
				<CardTitle title={titleCard} infoExtra={infoExtra} />
				<div className='flex flex-wrap gap-2 pt-1'>
					{links?.map(({ url, type }, index) => (
						<WebLink
							key={index}
							className='btn btn-sm btn-outline btn-accent'
							href={url}>
							{type}
						</WebLink>
					))}
					{videos?.map((video, index) => <Video key={index} video={video} />)}
				</div>
			</>
		</div>
	)
}
