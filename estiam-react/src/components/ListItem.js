
import { Link } from "react-router-dom";

function ListItem(props) {
  const route = "/pokemon/" + props.id;
  const imageName = "/ressources/" + props.id.toString().padStart(3, "0") + ".png";
  return (
     <Link to={route}>
        <div className="bg-gray-600 text-white py-4 px-6 flex flex-row justify-start items-center gap-4 rounded-full cursor-pointer hover:bg-gray-500 hover:-translate-y-1 transition">
            <img src={imageName} className="w-8" loading="lazy" onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="/logo192.png";
                }}></img>
            <div className="flex flex-col justify-start items-start w-full">
                <p className="text-xl font-semibold uppercased">{props.pokemonName}</p>
                <p className="text-sm font-semibold uppercased text-gray-300">Types: {props.types}</p>
            </div>
            <div className="w-full flex flex-row justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
        </div>
    </Link>
  );
}

export default ListItem;
