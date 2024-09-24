import Navbar from '../cmp/Navbar';

const Hom = () => {
    return (
        <>
            <Navbar />
            <div className="h-[75vh] w-full bg-slate-50 flex flex-row justify-center">
                {/* Left Section: Text Content */}
                <div className="h-70vh w-1/2 pl-10 font-thin font-serif leading-loose flex items-center justify-center font-semibold">
                    <div>
                        <span className="text-red-700 font-extrabold">
                            OBJECTIVE:
                           
                            </span>
                            <br></br>
                        Motivated and detail-oriented Information Technology student with strong problem-solving and coding skills, seeking to apply academic knowledge and hands-on project experience in a challenging internship or entry-level position. Eager to contribute to team success while continuing to develop technical expertise in software development and system design.
                    </div>
                </div>
                
                {/* Right Section: Image */}
                <div className="h-80vh w-1/2 flex justify-center items-center">
                    <div className="h-[25rem] w-[20rem] flex justify-center items-center">
                        <img 
                            src="https://e0.pxfuel.com/wallpapers/412/848/desktop-wallpaper-look-face-model-profile-male-guy-for-section-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D1%8B-model-men.jpg" 
                            alt="profile" 
                            className="rounded-bl-full" 
                        />
                </div>

             </div>
          </div>
                <div className="flex flex-row justify-center pl-10 text-center p-5 gap-2 bg-slate-50 ">
        
   

            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726569019/atom_wcytoz.png" href="https://github.com/vasanthkrishnan" className="h-10 w-10 m-2">
            </img>
            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726568558/developer_g80rja.png" className="h-10 w-10 m-3 "/>
            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726739795/html_a6djri.png" className="h-10 w-10 m-3"/>
            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726739926/cascading-style-sheets_m3eb94.png" className="h-10 w-10 m-3"/>
            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726740319/java_xxqlqe.png" className="h-10 w-10 m-3"/>
            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726741241/python_tdjbi6.png" className="h-10 w-10 m-3"/>
            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1726742577/sql-server_l3olh9.png" className="h-10 w-10 m-3"/>
  
            </div>
        </>
    );
};

export default Hom;
