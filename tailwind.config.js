/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "320px",
            },
            fontFamily: {
                monstserrat: ['"Montserrat"', "cursive"],
                poppins: ['"Poppins"'],
                calistoga: ['"Calistoga"'],
            },
        },
    },
    plugins: [],
};
