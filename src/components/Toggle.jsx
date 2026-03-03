// import React, { useState } from "react";

// function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <div style={{ background: isDark ? "black" : "white", color: isDark ? "white" : "black" , height:"100vh"}}>
//       <h1>{isDark ? "Dark" : "Light"}</h1>

//       <button onClick={() => setIsDark(!isDark)}>
//         Toggle
//       </button>
//     </div>
//   );
// }

// export default ThemeToggle;




import React, { useState } from "react";
const ThemeToggle = () => {
const[isDark, setIsDark] = useState(false);                   

    return(
        <div  style={{background: isDark ? "black" :"white", color: isDark ? "white" : "black", height:"100vh"}}>
            <h1>{isDark ? "Dark" : "Light"}</h1>

            <button onClick={() => setIsDark(!isDark)}>Toggle</button>
        </div>
    )
}

export default ThemeToggle;