import Alert from '../components/alert'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-neutral-900 bg-grid text-white">
        <main>{children}</main>
      </div>
    </>
  )
}
