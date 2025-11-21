export default function Heading() {
    return (
        <main className="text-white bg-black/20 p-4 sm:p-6 md:p-8 lg:p-10 mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-6 sm:my-8 md:my-10 py-16 sm:py-20 md:py-24 lg:py-28 rounded-xl sm:rounded-2xl" id="about">
            <img 
                src="logo/full-logo.png" 
                alt="Logo" 
                className="max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] w-full mx-auto"
            />
            

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-6 sm:mt-8 px-2">
                Кодим так, что Интернет плачет
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mt-6 sm:mt-8 justify-center items-center">
                <a 
                    href="https://github.com/qualsu" 
                    className="flex flex-row items-center gap-2 transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center sm:justify-start"
                >
                    <img 
                        src="icon/github.svg" 
                        alt="GitHub" 
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                    />
                    <span className="text-lg sm:text-xl md:text-2xl hover:underline">GitHub</span>
                </a>

                <a 
                    href="https://t.me/qualsu" 
                    className="flex flex-row items-center gap-2 transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center sm:justify-start"
                >
                    <img 
                        src="icon/telegram.svg" 
                        alt="Telegram" 
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                    />
                    <span className="text-lg sm:text-xl md:text-2xl text-[#27a6e6] hover:underline">Telegram</span>
                </a>
            </div>
        </main>
    )
}