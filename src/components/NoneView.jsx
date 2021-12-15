export default function NoneView({ name }) {
  return (
    <div className="no-select">
      <h1>
        Elegí {name} para ver su informacion <span>acá</span>
      </h1>
      <img
        alt="reclutador no seleccionado"
        src="https://www.bumeran.com.ar/candidate/static/media/empty-state-avisos.3a4129ba.svg"
      />
    </div>
  );
}
