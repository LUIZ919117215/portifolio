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
         keyframes: {
            initDrop: {
               "0%": {
                  transform: "translateY(17px)", opacity: "0"
               },
               "100%": {
                  transform: "translateY(0px)", opacity: "1"
               }
            },

            containDrop: {
               "0%":  {opacity: "0"},
               "100%":  {opacity: "1"}
            },
            clickBtn: {
               "0%":  {opacity: "1"},
               "50%":  {opacity: "0"},
               "100%":  {opacity: "1"}
            },
         },
         animation: {
            "init-drop": "initDrop 1s ease-in-out",
            "contain-drop": "containDrop 2s linear",
            "click-btn": " clickBtn .2s linear",
         }
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