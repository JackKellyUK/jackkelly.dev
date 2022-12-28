export default function({ id, children }) {
    return (
        <section id={id} className="min-h-80vh flex items-center py-24">
          <div className="max-w-4xl w-full m-auto bg-gray-800 rounded-lg flex flex-col items-center justify-center p-8">
            {children}
          </div>
        </section>
    )
}