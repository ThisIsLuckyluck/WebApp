import Image from "next/image";

export default function Footer() {

    /*NEED IMAGE HERE, LOGO AND OTHER*/

    return (
            <footer className="max-w-6xl mx-auto dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="http://github.com/FAST-SUSHI-NEXTECH" className="flex items-center">
                                <Image width={"50"} height={"80"} src={"/logo_blanc.png"} className="h-10 me-3"
                                     alt="Fast sushi Logo"/>
                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap text-white">Fast sushi</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Informations</h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/story" className="hover:underline">Notre histoire</a>
                                    </li>
                                </ul>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/help"
                                           className="hover:underline ">Aide</a>
                                    </li>
                                </ul>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/starter"
                                           className="hover:underline ">Nos produits</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Suivez-nous</h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                        <a href="https://github.com/FAST-SUSHI-NEXTECH"
                                           className="hover:underline ">Github</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Mentions
                                    Légales</h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="./legal" className="hover:underline">Politique privée</a>
                                    </li>
                                    <li>
                                        <a href="./legal" className="hover:underline">Termes et conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a
              href="/" className="hover:underline">Fast Sushi™</a>. Tous droits réservés.
          </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="http://github.com/FAST-SUSHI-NEXTECH" className="text-white hover:text-gray-300 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://discord.com/" className="text-white hover:text-gray-300 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 21 16">
                                    <path
                                        d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}