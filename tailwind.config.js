/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FDD46B',
                secondary: '#FCA775',
                third: '#E37347',
            },

        },
    },
    plugins: [],
}
