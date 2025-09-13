import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="footer bg-gradient-to-r from-base-200 to-base-300 text-base-content items-center lg:justify-between justify-center gap-4 p-6 border-t border-base-content/10">
            <aside className="flex flex-col lg:flex-row lg:grid-flow-col items-center font-bold text-md lg:text-lg gap-2">
                <p className="text-base-content">Made with ❤️ by Andrei Stefan</p>
                <motion.a 
                    whileHover={{ scale: 1.05, color: "hsl(var(--s))" }}
                    href="https://github.com/Picred/picred.github.io" 
                    className="link link-secondary font-semibold"
                >
                    Code on GitHub
                </motion.a>
            </aside>

            <nav className="grid-flow-col gap-4 lg:gap-6 place-self-center lg:justify-self-end">
                {/* LinkedIn */}
                <motion.a 
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/andreistefand/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                    aria-label="LinkedIn"
                >
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24">
                        <path fill="currentColor" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032s1.032.466 1.032 1.032c0 .565-.466 1.031-1.032 1.031zm.89 6.51H3.78V6.498h1.781v5.727zM14.448 0H1.552A1.552 1.552 0 000 1.552v12.896A1.552 1.552 0 001.552 16h12.896A1.552 1.552 0 0016 14.448V1.552A1.552 1.552 0 0014.448 0z" />
                    </svg>
                </motion.a>

                {/* GitHub */}
                <motion.a 
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Picred" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle text-purple-600 hover:text-purple-700 hover:bg-purple-100"
                    aria-label="GitHub"
                >
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24">
                        <path fill="currentColor" d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z" ></path>
                    </svg>
                </motion.a>

                {/* Telegram */}
                <motion.a 
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://t.me/picred1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle text-sky-600 hover:text-sky-700 hover:bg-sky-100"
                    aria-label="Telegram"
                >
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24">
                        <circle cx="16" cy="16" r="14" fill="currentColor"></circle>
                        <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"></path>
                    </svg>
                </motion.a>
            </nav>
        </footer>
    );
};