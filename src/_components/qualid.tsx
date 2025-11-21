export default function QualID() {
    return (
        <main className="text-white bg-black/20 p-4 sm:p-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-6 sm:my-8 md:my-10 rounded-xl sm:rounded-2xl flex flex-col md:flex-row justify-between gap-6 sm:gap-8 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
            <div className="flex flex-col items-start gap-3 sm:gap-4 flex-1 h-full justify-between" id="qual-id">
                <div className="flex flex-col gap-3 sm:gap-4">
                    <img src="logo/qual-id-logo.svg" alt="Logo" className="max-w-[250px] sm:max-w-[280px] md:max-w-[300px] w-full"/>
                    <h1 className="text-xl sm:text-2xl mt-1 sm:mt-2">Единая система аккаунтов которую мы используем почти во всех наших проектах</h1>
                </div>

                <a href="https://id.qual.su" className="hidden md:block">
                    <button className="border-2 hover:border-white/80 hover:text-white/80 transition-all duration-200 hover:underline rounded-lg py-2 px-4 sm:py-2 sm:px-5 text-base sm:text-lg mt-2 sm:mt-3 md:mt-64">
                        Перейти
                    </button>
                </a>
            </div>
            
            <div className="flex-1 flex justify-center md:justify-end items-center">
                <img src="/banner.png" alt="" className="max-w-[600px] sm:max-w-[700px] md:max-w-[800px] w-full h-auto" />
            </div>

            <div className="md:hidden flex justify-center mt-4">
                <a href="https://id.qual.su" className="w-full ">
                    <button className="w-full border-2 hover:border-white/80 hover:text-white/80 transition-all duration-200 hover:underline rounded-lg py-2 px-4 text-base">
                        Перейти
                    </button>
                </a>
            </div>
        </main>
    )
}