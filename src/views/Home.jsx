import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="bg-white-100 py-8">
        <div className="md:flex md:justify-center md:space-x-8 md:px-14">
          <Link to="/vacants">
            <div className="mt-16 py-4 px-4 bg-whit w-60 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <div className="mt-4 text-black-600 text-center">
                  <h1 className="text-m font-bold">Vacantes</h1>
                  <img
                    className="w-48"
                    src="https://www.siplach.com/wp-content/uploads/2019/12/documento-check.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/recruiters">
            <div className="mt-16 py-4 px-4 bg-whit w-60 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <div className="mt-4 text-black-600 text-center">
                  <h1 className="text-m font-bold">Reclutadores</h1>
                  <img
                    className="w-48"
                    src="https://media.istockphoto.com/vectors/search-job-vacancy-icon-isolated-on-white-background-vector-vector-id1199171130?k=20&m=1199171130&s=170667a&w=0&h=B0eOIPNeTfTs1aShasSrbv6QXiQ3PY4BCrocnWoqMec="
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link to="/stadistics">
            <div className="mt-16 py-4 px-4 bg-whit w-60 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <div className="mt-4 text-black-600 text-center">
                  <h1 className="text-m font-bold">Estadisticas</h1>
                  <img
                    className="w-48"
                    src="https://static.vecteezy.com/system/resources/previews/000/422/928/non_2x/vector-statistics-icon.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
