import ContentfulImage from './contentful-image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage
          src={picture.url}
          className="rounded-full"
          alt={name}
          width="100"
          height="100"
        />
      </div>
      <div className="text-xl font-semibold">{name}</div>
    </div>
  )
}
