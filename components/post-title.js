export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
    </h1>
  )
}
