import Pokeball from "../icons/pokeball-icon.png";

function ListItem(props) {
  return (
    <div className="ListItem bg-gray-600 my-5 text-white py-4 px-6 flex flex-row justify-start items-center gap-4 rounded-full cursor-pointer hover:bg-gray-500 hover:-translate-y-1 transition">
        <img src={Pokeball} className="w-8"></img>
        <p className="text-xl font-semibold uppercased">{props.pokemonName}</p>
        <div className="w-full flex flex-row justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
    </div>
  );
}

export default ListItem;
