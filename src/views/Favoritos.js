import Context from '../Context'
import { useContext } from 'react'

export default function Favoritos() {
  const { imagenes } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {imagenes.filter((e) => e.liked).map((e, i) => (
          <div className="galeriafavoritos" style={{ backgroundImage: `url(${e.origen})` }} key={i}>
            <p>{e.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};