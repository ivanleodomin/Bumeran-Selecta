import logoSumar from "../assets/add.png";
import "../styles/filter.css"


const HeaderRecruiters = () => {
  return (
    <div className="filters">
      <div>
        <i className="fas fa-search"></i>
      </div>
      <div id="1" className="dropdown">
        <div className="dropdown-button">
          <span className="name">Área</span>
          <span className="arrow-dropdown">
            <i className="fas fa-angle-down"></i>
          </span>
        </div>
        <div>
          <ul>
            <li className="item">
              <span>Administracion</span>
            </li>
            <li className="item">
              <span>Derecho</span>
            </li>
            <li className="item">
              <span>Diseño</span>
            </li>
            <li className="item">
              <span>Ingenieria</span>
            </li>
            <li className="item">
              <span>Gastronomia</span>
            </li>
            <li className="item">
              <span>Marketing</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="2" className="dropdown">
        <div className="dropdown-button">
          <span className="name">Nivel</span>
          <span className="arrow-dropdown">
            <i className="fas fa-angle-down"></i>
          </span>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
      <div id="3" className="dropdown">
        <div className="dropdown-button">
          <span className="name">País</span>
          <span className="arrow-dropdown">
            <i className="fas fa-angle-down"></i>
          </span>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
      <div>
        <i className="far fa-trash-alt trash"></i>
      </div>
      <div className="newRecruiter">
        <i className="fas fa-plus-circle"></i>
        <span>Nuevo</span>
      </div>
    </div>
  );
};

export default HeaderRecruiters;
