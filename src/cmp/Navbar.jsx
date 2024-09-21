import { UserCircle } from "lucide-react";


const Nav=()=>
{
return(
<>
     <div className="w-full h-[4rem] bg-stone-50">
       

      <div className="w-full h-[4rem] bg-slate-600 flex flex-row  shadow-slate-600 ">
        <div className="p-5 text-white font-bold w-1/2">
         <h1>KISHORE.L</h1>
            </div> 
            <div className=" bg-slate-600 font-bold  text-white w-1/2  flex flex-row justify-end  m-6 ">
            <h1 className=" text-blue-400 m-1">
                HOME
            </h1>
            <h1 className=" hover:text-blue-400 m-1">
                             PROJECT
            </h1>
            <h1 className=" hover:text-blue-400 m-1">
                             CONTACT
            </h1>
           
            <UserCircle  className="h-7 w-7  m-1  hover:text-blue-400"/>
            </div>

            </div>
            <div className=""></div>

        </div> 
        {/* <div className="bg-black">hi</div> */}

    
</>
    )
}
 export default Nav;