import { useRef } from 'react';
import Navbar from '../cmp/Navbar';


const Contact = () => {
    const firstname = useRef(null);
    const mail = useRef(null);
    const age = useRef(null);
    const number = useRef(null);

    const contacts = (e) => {
        e.preventDefault();
        console.log(firstname.current.value);
        console.log(mail.current.value);
        console.log(age.current.value);
        console.log(number.current.value);
    };

    return (
        <>
       <Navbar />
            <div className="h-screen w-screen flex flex-col justify-center">
                <div className="h-screen w-screen flex justify-center items-center bg-slate-50">
                    <div className="h-[60vh] w-[30%] flex justify-center items-center rounded-xl bg-slate-600">
                        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={contacts}>
                            <input 
                                ref={firstname} 
                                type="text" 
                                placeholder="ENTER YOUR NAME" 
                                className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-400 focus:border-b-2"
                            />
                            <input 
                                ref={mail} 
                                type="email" 
                                placeholder="ENTER YOUR MAIL" 
                                className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-400 focus:border-b-2"
                            />
                            <input 
                                ref={age} 
                                type="number" 
                                placeholder="ENTER YOUR AGE" 
                                className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-400 focus:border-b-2"
                            />
                            <input 
                                ref={number} 
                                type="tel" 
                                placeholder="ENTER YOUR MOBILE NUMBER" 
                                className="p-3 bg-[#f8f8f8] w-full font-bold outline-none hover:border-purple-400 focus:border-b-2"
                            />
                            <input 
                                type="submit" 
                                className="p-3 bg-white w-full h-20 text-black font-extrabold font-sans outline-none rounded-lg cursor-pointer" 
                                value="SUBMIT"
                            />
                        </form>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default Contact;
