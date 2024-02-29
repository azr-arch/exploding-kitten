/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkRed: "#82151b",
                softRed: "#d42835",
                yellow: "#f4922f",
                black_1: "#231f20",
                gray: "#e4e3e3",
            },
        },
    },
    plugins: [],
};
