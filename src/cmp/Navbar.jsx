import { UserCircle } from "lucide-react";


const Navbar = () => {
    return (
        <>
            <div className="w-full h-[4rem] bg-stone-50">


                <div className="w-full h-[4rem] bg-slate-600 flex flex-row  shadow-slate-600 ">
                    <div className="p-5 text-white font-bold w-1/2">
                        <h1>KISHORE.L</h1>
                    </div>
                    <ul className="bg-slate-600 font-bold  text-white w-1/2  flex flex-row justify-end  m-6">
                    <li className="hover:text-blue-400 m-1"><a href="/">Profile</a></li>
                    <li className="hover:text-blue-400 m-1"><a href="/projects">Projects</a></li>
                    <li className="hover:text-blue-400 m-1"><a href="/contact">Contact</a></li>
<li>

                    <UserCircle className="h-7 w-7  m-1  hover:text-blue-400" />
</li>
                    </ul> 



                </div>
                <div className=""></div>

            </div>
            {/* <div className="bg-black">hi</div> */}


        </>
    )
}
export default Navbar;