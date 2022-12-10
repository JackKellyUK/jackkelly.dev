export default function Container({ className, children }) {
  return <div className={className + " container mx-auto px-5"}>{children}</div>
}
