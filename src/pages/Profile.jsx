import Navbar from '../cmp/Navbar'

const Hom = () => {
    return (
        <>
        <Navbar />
            <div className="h-[95vh] w-full bg-slate-50 flex flex-row justify-center">
                <div className=" h-screen w-1/2 pl-10 font-thin font-serif  leading-loose place-items-center flex justify-center ">
                    OBJECTIVE:
                    <br>
                    </br>
                    Motivated and detail-oriented Information Technology student with strong problem-solving and coding skills, seeking to apply academic knowledge and hands-on project experience in a challenging internship or entry-level position. Eager to contribute to team success while continuing to develop technical expertise in software development and system design.</div>
                <div className="h-screen w-1/2  flex justify-center items-center">
                    <div className="h-[25rem] w-[25rem]  ">

                        <img src="https://e0.pxfuel.com/wallpapers/412/848/desktop-wallpaper-look-face-model-profile-male-guy-for-section-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D1%8B-model-men.jpg" alt="hi" className=" rounded-[90%]" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hom;