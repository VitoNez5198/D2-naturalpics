import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react"
import Context from "../Context"

export default function Galeria() {
  const { imagenes, setImagenes } = useContext(Context); 
  const creaFavoritos = (id) => {
    const galeriaImagenes = imagenes.findIndex((e) => e.id === id);
    imagenes[galeriaImagenes].liked = !imagenes[galeriaImagenes].liked; 
    setImagenes([...imagenes]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {imagenes.map((e, i) => (
        <div onClick={() => creaFavoritos(e.id)} className="foto" style={{ backgroundImage: `url(${e.origen})` }} key={i}>
          <Heart filled={e.liked} />
          <p>{e.descripcion}</p>  {}
        </div>
      ))}
    </div>
  );
}