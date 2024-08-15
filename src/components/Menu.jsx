import { Outlet, Link } from "react-router-dom";

export function Menu() {
   return (
      <>
         <div className="w-[67vw] h-[42rem] flex flex-col justify-between bg-base-primary backdrop-blur-sm rounded-2xl border-[1.1px] border-slate-300">
            <Outlet/>
            <nav className="flex justify-center items-center rounded-xl w-[66.8vw] h-[5rem] bg-base-second backdrop-blur-2xl">
               <ul className="flex justify-around w-full text-skin-main">
                  <Link to={'/'}><il><i className="bi bi-house-door-fill"></i></il></Link>
                  <Link to={'/About'}><il><i className="bi bi-file-earmark-person-fill"></i></il></Link>
                  <il><i className="bi bi-clipboard-check-fill"></i></il>
                  <il><i className="bi bi-suitcase-lg-fill"></i></il>
                  <il><i className="bi bi-telephone-fill"></i></il>
               </ul>
            </nav>
         </div>
      </>
   )
}