/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#f1e5b1",
                text: "#4e3b31",
                light: "#eeecdd",
                accent: "#87bcc7",
                dark: "#23596d",
            },
        },
    },
    plugins: [],
};
