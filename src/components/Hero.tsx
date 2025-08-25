export const Hero = () => {
    return (
        <div className="hero bg-transparent min-h-screen px-4 lg:px-12 w-full h-full">
            <div className="hero-content flex flex-col items-center gap-8">

                <div className="relative flex flex-col text-center w-full max-w-3xl p-6 lg:p-10 bg-base-100 rounded-3xl shadow-9xl">

                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                        <img src="/propic.jpg" className="w-28 h-28 lg:w-48 lg:h-48 rounded-full shadow-2xl object-cover border-4 border-base-100" alt="Profile"/>
                    </div>

                    <div className="mt-20 lg:mt-32"> 
                        <p className="text-lg lg:text-3xl mb-2">Hi, my name is</p>

                        <h1 className="text-3xl lg:text-6xl font-bold mb-6 lg:mb-8 text-secondary"> 
                            Andrei Stefan
                        </h1>

                        <p className="text-base lg:text-2xl py-2">
                            Bachelor's Degree Computer Science <a href="https://www.unict.it/" className="link-hover link-success">UniCt</a>
                        </p>

                        <p className="text-base lg:text-2xl py-2">
                            Currently Master's Student at <a href="https://www.polito.it/" className="link-hover link-success">PoliTo</a>
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 mt-6 justify-center">
                            <button className="btn btn-primary w-full lg:w-auto">
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
