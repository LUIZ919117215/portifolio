import { Outlet, Link } from "react-router-dom";

export function Menu() {
   return (
      <>
         <section className="h-[94vh] w-[67vw] flex flex-col justify-between bg-base-primary backdrop-blur-sm rounded-md border-[1.1px] border-slate-300 shadow-main md:flex-row-reverse animate-contain-drop">
            <Outlet/>
            <nav className="flex justify-center items-center rounded-md w-[66.8vw] h-[5rem] bg-base-second backdrop-blur-2xl text-2xl md:rounded-r-none md:flex-col md:w-[45rem] md:h-[94vh]">
               <div className="hidden h-10 md:flex md:h-[15rem] portrait:hidden">sdfg</div>
               <ul className="flex justify-around w-full rounded-md text-mono text-skin-main md:h-full md:rounded-r-none md:flex-col md:items-center">

                  <Link to={'/'}>
                     <il className="flex flex-row transition ease-linear duration-75 hover:scale-125 active:animate-click-btn">
                        <i className="bi bi-house-door-fill"></i>
                        <p className="hidden lg:flex">Home</p>
                     </il>
                  </Link>

                  <Link to={'/About'}>
                     <il className="flex flex-row transition ease-linear duration-75 hover:scale-125 active:animate-click-btn">
                        <i className="bi bi-file-earmark-person-fill"></i>
                        <p className="hidden lg:flex">About</p>
                     </il>
                  </Link>

                  <Link to={'/Skill'}>
                     <il className="flex flex-row transition ease-linear duration-75 hover:scale-125 active:animate-click-btn">
                        <i className="bi bi-clipboard-check-fill"></i>
                        <p className="hidden lg:flex">Skills</p>
                     </il>
                  </Link>
                  
                  <Link to={'/Project'}>
                     <il className="flex flex-row transition ease-linear duration-75 hover:scale-125 active:animate-click-btn">
                        <i className="bi bi-suitcase-lg-fill"></i>
                        <p className="hidden lg:flex">Project</p>
                     </il>
                  </Link>

                  <Link to={'/Contact'}>
                     <il className="flex flex-row transition ease-linear duration-75 hover:scale-125 active:animate-click-btn">
                        <i className="bi bi-telephone-fill"></i>
                        <p className="hidden lg:flex">Contact</p>
                     </il>
                  </Link>
               </ul>
            </nav>
         </section>
      </>
   )
}