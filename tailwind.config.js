/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: "Poppins, sans-serif",
                league: "League Spartan, sans-serif",
            },
            colors: {
                transparent: "transparent",
                black: "#131313",
                white: "#fff",
                primaryYellow: "#e2a646",
                siteGray: {
                    100: "#eee",
                    200: "#222",
                    400: "#111",
                },
                // ...
            },
            keyframes: {
                wiggle: {
                    "0%": {
                        transform: "translateX(0)",
                    },
                    "25%": {
                        transform: "translateX(-2px)",
                    },
                    "50%": {
                        transform: "translateX(2px)",
                    },
                    "75%": {
                        transform: "translateX(-2px)",
                    },
                    "100%": {
                        transform: "translateX(0)",
                    },
                },
            },
        },
    },
    plugins: [],
};
