export default function({ id, children }) {
    return (
        <section id={id} className="min-h-80vh flex items-center py-24">
          <div className="max-w-4xl w-full m-auto global-gradient rounded-lg flex flex-col items-center justify-center p-8 shadow-white">
            {children}
          </div>
        </section>
    )
}