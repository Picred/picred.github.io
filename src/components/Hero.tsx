export const Hero = () => {
    return (
        <div className="hero bg-transparent min-h-screen px-4 lg:px-12 w-full h-full">
            <div className="hero-content flex-col gap-8 lg:gap-12">

                {/* Box contenuto con immagine sovrapposta */}
                <div className="relative flex flex-col text-center w-full p-6 lg:p-10 bg-base-100 rounded-3xl shadow-9xl">

                    {/* Avatar */}
                    <div className="absolute -top-16 lg:-top-20 left-1/2 transform -translate-x-1/2">
                        <img 
                            src="/propic.jpg" 
                            className="w-28 h-28 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full shadow-2xl object-cover border-4 border-base-100" 
                            alt="Profile"
                        />
                    </div>

                    {/* Contenuto con padding compensato */}
                    <div className="mt-20 sm:mt-24 lg:mt-32"> 
                        <p className="text-base text-2xl sm:text-3xl lg:text-xl mb-2">Hi, my name is</p>

                        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-base mb-8"> 
                            Andrei Stefan
                        </h1>

                        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-3 text-base">
                            Bachelor's Degree Computer Science <a href="https://www.unict.it/" className="link-hover link-success">UniCt</a>
                        </p>

                        <p className="text-lg sm:text-xl lg:text-2xl py-2 sm:py-3 text-base">
                            Currently Master's Student at <a href="https://www.polito.it/" className="link-hover link-success">PoliTo</a>
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 mt-4 justify-center">
                            <button className="btn btn-primary w-full lg:w-auto ">
                                <p className="text-primary-content">Contact Me!</p>
                            </button>

                            <button className="btn btn-primary w-full lg:w-auto">
                                <p className="text-primary-content">Browse Projects!</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
