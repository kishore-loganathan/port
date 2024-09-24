import { UserCircle, XCircle } from "lucide-react";
import { useRef, useState } from "react";

const Navbar = () => {
    const name = useRef(null);
    const pass = useRef(null);
    
    const login = (e) => {
        e.preventDefault();  // Prevent the form from refreshing the page
        console.log(name.current.value, pass.current.value);
    };

    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="w-full h-[4rem] bg-stone-50">
                <div className="w-full h-[4rem] bg-slate-600 flex flex-row shadow-slate-600">
                    <div className="p-5 text-white font-bold w-1/2">
                        <h1>KISHORE.L</h1>
                    </div>
                    <ul className="bg-slate-600 font-bold text-white w-1/2 flex flex-row justify-end m-6">
                        <li className="hover:text-blue-400 m-1">
                            <a href="/">Profile</a>
                        </li>
                        <li className="hover:text-blue-400 m-1">
                            <a href="/projects">Projects</a>
                        </li>
                        <li className="hover:text-blue-400 m-1">
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <UserCircle className="h-7 w-7 m-1 hover:text-blue-400" onClick={() => setVisible(true)} />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal for login */}
            {visible && (
                <div className="h-full w-full flex flex-col justify-center absolute top-0  ">
                    <div className="h-screen w-screen flex justify-center items-center bg-slate-600/60 ">
                        <div className="h-[50vh] w-[30%] flex justify-center items-center rounded-xl bg-slate-600">
                            <form className="w-[80%] h-[90%] flex flex-col justify-center items-center gap-4  " onSubmit={login}>
                                <div className="flex justify-end w-full">
                                    <XCircle className="hover:cursor-pointer" onClick={() => setVisible(false)} />
                                </div>
                                <input
                                    ref={name}
                                    type="text"
                                    placeholder="ENTER YOUR NAME"
                                    className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-400 focus:border-b-2"
                                />
                                <input
                                    ref={pass}
                                    type="password"
                                    placeholder="ENTER YOUR PASSWORD"
                                    className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-400 focus:border-b-2"
                                />
                                <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
