export default function({ children }) {
    return (
        <section className="h-80vh flex items-center">
          <div className="max-w-4xl w-full m-auto bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg flex flex-col items-center justify-center p-8 shadow-white">
            {children}
          </div>
        </section>
    )
}