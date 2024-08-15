/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
   ],
   theme: {
      extend: {
         textColor: {
            skin: {
               main: 'var(--color-text-blue)'
            }
         },
         backgroundColor: {
            base: {
               primary: 'var(--color-backgrounnd-glass1)',
               second: 'var(--color-backgrounnd-glass2)'
            } 
         },
      },
   },
   plugins: [],
}

