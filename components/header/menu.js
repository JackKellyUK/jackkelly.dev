import ScrollspyNav from "react-scrollspy-nav";
import Script from "next/script";

const Menu = (props) => {
  const hasSubmenu = props.submenu ? Object.keys(props.submenu).length > 0 : false;
  const scrollTargetIds = hasSubmenu ? Object.keys(props.submenu).map(x => {
    return x.replace('#', '');
  }) : [];

  return (
      <div>
          <ul id="menu" className="bg-neutral-900 flex flex-col justify-end items-center gap-3 absolute w-full left-0 pb-4 z-[-1] opacity-0 top-[-400px] transition-all ease-in duration-500 md:gap-6 md:flex-row md:items-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100">
            <li><a href="/posts" className="global-underline">Blog</a></li>
            <li><a href="/toolbox" className="global-underline">Toolbox</a></li>
          </ul>

          {(hasSubmenu) &&
            <>
              <ScrollspyNav
                scrollTargetIds={scrollTargetIds}
                offset={-30}
                activeNavClass="is-active"
                scrollDuration="700"
                headerBackground="true"
              >
                  <ul id="menu" className="hidden bg-neutral-900 items-center gap-6 flex-row items-center py-0 pl-0 md:flex">
                    {Object.entries(props.submenu).map(([key, value]) => (
                      <li key={key}><a href={key} className="global-underline-small text-xs">{value}</a></li>
                    ))}
                  </ul>
              </ScrollspyNav>

              <Script>
                  {`var menu = document.querySelector('#menu');
                  var menuButton = document.querySelector('#menu-button');

                  menuButton.addEventListener('click',() => {
                      if (menu.classList.contains('top-[75px]')) {
                          menu.classList.remove('top-[75px]');
                          menu.classList.remove('opacity-100');
                      } else {
                          menu.classList.add('top-[75px]');
                          menu.classList.add('opacity-100');
                      }
                  });
                  
                  document.querySelectorAll('#menu a').forEach((link) => {
                      link.addEventListener('click', () => {
                          menu.classList.remove('top-[75px]');
                          menu.classList.remove('opacity-100');
                      })
                  })`}
              </Script>
            </>
          }
      </div>
  )
}

export default Menu;