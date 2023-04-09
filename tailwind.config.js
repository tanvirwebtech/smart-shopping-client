/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                black: "#000",
                white: "#fff",
                primaryYellow: "#e2a646",
                siteGray: {
                    100: "#eee",
                    200: "#222",
                    400: "#111",
                },
                // ...
            },
        },
    },
    plugins: [],
};
