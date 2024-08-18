/** @type {import('tailwindcss').Config} */
module.exports= {
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
   plugins: [
      function ({addUtilities}) {
         const newUtilities = {
            ".scrollbar-webkit": {
               "&::-webkit-scrollbar": {
                  width: "7.3px",
               },
               "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#250178",
                  borderRadius: "20px",

               }
            }
         } 

         addUtilities(newUtilities, ["reponsive, hover"])
      }
   ],
}