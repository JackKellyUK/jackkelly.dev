import Script from "next/script";

export default function({ id, children, alignment = 'items-center' }) {
    return (
        <>
          <section id={id} className="min-h-80vh flex py-24 animate-hide">
            <div className={`max-w-4xl w-full m-auto bg-gray-800 rounded-lg flex flex-col ${alignment} justify-center p-8`}>
              {children}
            </div>
          </section>
          <Script>
          {`var observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                entry.target.classList.toggle('animate-show', entry.isIntersecting);
              });
            });

            var hiddenElements = document.querySelectorAll('.animate-hide');
            hiddenElements.forEach((el) => observer.observe(el));`}
          </Script>
        </>
    )
}