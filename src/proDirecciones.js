import { useState } from "react";

const ProDirecciones = () => {
  const [direccion, setdireccion] = useState('');
  const [convertirDireccion, setConvertirDireccion] = useState('');

  const procesarDireccion = () => {
    let procesarDireccion = direccion;
    procesarDireccion = procesarDireccion.replace(/\b(calle|CL|clle|cll|alle|CALLE)\b/gi,"Calle");
    procesarDireccion = procesarDireccion.replace(/(\d+{a-z})/gi, match=> match.toUpperCase());
    procesarDireccion = procesarDireccion.replace(/\b(numero|Nro|Numero)\b/gi,"#");
    procesarDireccion = procesarDireccion.replace(/\b(Cra|KR|kra|Cr)\b/gi, "Carrera")
    procesarDireccion = procesarDireccion.replace(/\b(tran|trvs|TV|trans|trvs)\b/gi,"Transversal")
    procesarDireccion = procesarDireccion.replace(/\b(DG|dia|diag)\b/gi, "Diagonal")

    setConvertirDireccion(procesarDireccion)
  };

  return (
    <div>
      <label> direccion </label>
      <input id="direccioninput" type="text" value={direccion} onChange={e => setdireccion(e.target.value)} />
      <button onClick={procesarDireccion}>procesar direccion</button>
      <label> resultado </label>
      <label>{convertirDireccion}</label>
      </div>
  );
}
export default ProDirecciones;
