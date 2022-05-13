// import React, { useEffect } from "react";
// import Card from "./Card";
// import { getTop } from "../actions";
// import { useDispatch, useSelector } from "react-redux";


// export default function Top5(){
//     const dispatch = useDispatch();
//     const recipesTop = useSelector(state => state.recipesTop)
    
//     async function getfilter(){
//         await dispatch(getTop("ok"));
//     }

//     useEffect(() => {
//         getfilter();
//       }, [dispatch]);


    
//     return(
//         <div class="content">
//         {recipesTop.length? recipesTop.map((r, id) => (
//           <Card
//             id={r.id}
//             key={id}
//             title={r.title}
//             image={r.image}
//             diets={r.diets}
//             score={r.score}
//           />
//         )):(
//           <div>
//             <br />
//             <b>"No se encontraron recetas"</b>
//           </div>
          
//         )}
//       </div>

//     )

// }