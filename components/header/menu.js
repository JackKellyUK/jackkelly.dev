import ScrollspyNav from "react-scrollspy-nav";
import Script from "next/script";

const Menu = (props) => {
  const hasSubmenu = props.submenu ? Object.keys(props.submenu).length > 0 : false;
  const scrollTargetIds = hasSubmenu ? Object.keys(props.submenu).map(x => {
    return x.replace('#', '');
  }) : [];

  return (
      <div>
          <div id="menu" className="grid grid-rows-[0fr] bg-neutral-900 items-center overflow-hidden absolute w-full left-0 pb-4 z-[-1] top-[75px] transition-all ease-in-out duration-500 md:z-auto md:static md:overflow-visible md:justify-end md:pb-2">
            <ul className="grid gap-3 place-items-center min-h-0 invisible transition-opacity ease-in-out duration-500 md:gap-6 md:flex md:flex-row md:items-center md:w-auto md:py-0 md:pl-0 md:visible">
              <li><a href="/posts" className="global-underline">Blog</a></li>
              <li><a href="/tools" className="global-underline">Tools</a></li>
            </ul>
          </div>

          {(hasSubmenu) &&
            <>
              <ScrollspyNav
                scrollTargetIds={scrollTargetIds}
                offset={-30}
                activeNavClass="is-active"
                scrollDuration="700"
                headerBackground="true"
              >
                  <ul id="submenu" className="hidden bg-neutral-900 gap-6 flex-row items-center py-0 pl-0 md:flex">
                    {Object.entries(props.submenu).map(([key, value]) => (
                      <li key={key}><a href={key} className="global-underline-small text-xs">{value}</a></li>
                    ))}
                  </ul>
              </ScrollspyNav>
            </>
          }

           <Script>
              {`var menu = document.querySelector('#menu');
              var menuButton = document.querySelector('#menu-button');

              menuButton.addEventListener('click',() => {
                  if (menu.classList.contains('grid-rows-[1fr]')) {
                      menu.classList.remove('grid-rows-[1fr]');
                      menu.classList.add('grid-rows-[0fr]');
                      menu.querySelector('ul').classList.remove('visible');
                      menu.querySelector('ul').classList.add('invisible');
                    } else {
                      menu.classList.remove('grid-rows-[0fr]');
                      menu.classList.add('grid-rows-[1fr]');
                      menu.querySelector('ul').classList.remove('invisible');
                      menu.querySelector('ul').classList.add('visible');
                  }
              });`}
            </Script>
      </div>
  )
}

export default Menu;