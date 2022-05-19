
import Functions from "../utilities/functions.js";

function TypeComponent(props) {
    return (
        <div className="flex flex-row justify-center">
            <div className="text-white px-4 py-0 rounded-full border border-white" style={{backgroundColor: Functions.getBackgroundColor(props.type)}}>
                <p className="text-center font-bold text-base">{props.type}</p>
            </div>
        </div>
    );
  }

//   function getBackgroundColor(type) {
//     switch (type) {
//         case "Fairy":
//             return "#FFA9C3";
//         case "Fire":
//             return "#F08030";
//         case "Normal":
//             return "#A8A878";
//         case "Poison":
//             return "#A040A0";
//         case "Flying":
//             return "#A890F0";
//         case "Grass":
//             return "#78C850";
//         case "Bug":
//             return "#A8B820";
//         case "Ground":
//             return "#E0C068";
//         case "Water":
//             return "#6890F0";
//         case "Electric":
//             return "#F8D030";
//         case "Ice":
//             return "#98D8D8";
//         case "Fighting":
//             return "#C03028";
//         case "Psychic":
//             return "#F85888";
//         case "Rock":
//             return "#B8A038";
//         case "Ghost":
//             return "#705898";
//         case "Dragon":
//             return "#7038F8";
//         case "Dark":
//             return "#705848";
//         default:
//             return "#A2A2A2";
//     }
//   }
  
  export default TypeComponent;