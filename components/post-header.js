import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-4">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="text-lg mb-6">
        <DateComponent dateString={date} />
      </div>
    </>
  )
}
