import { useDispatch, useSelector } from "react-redux";
import { removeList } from "../actions/favActions";

export default function FavMovie({ title, id }) {
  const favMovie = useSelector((store) => store.favReducer.watchList);
  const dispatch = useDispatch();
  const handleRemoveFav = () => {
    dispatch(removeList(id));
  };
  console.log(favMovie);
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button
        onClick={handleRemoveFav}
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}
