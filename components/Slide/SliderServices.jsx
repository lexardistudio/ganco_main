import React from "react";

function SliderServices() {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 px-6 py-12 md:py-24 md:gap-20 md:grid-cols-3 md:mx-auto bg-slate-50">
        <div className="items-center w-full px-4 py-4 rounded-lg shadow-xl bg-slate-50 md:h-48">
          <h1 className="pb-4 text-xl font-normal text-center text-gray-700 md:text-2xl font-mont">
            Industria siderurgica
          </h1>
          <p className="text-sm leading-6 text-center text-gray-500 font-mont md:text-lg">
            Somos proveedores estrategicos de la principal Industria
            Siderurgica. Distribuimos y vendemos lanzas térmicas de primera
            calidad.
          </p>
        </div>
        <div className="items-center w-full px-4 py-4 rounded-lg shadow-xl bg-slate-50">
          <h1 className="pb-4 text-xl font-normal text-center text-gray-700 md:text-2xl font-mont">
            Recuperación de metales
          </h1>
          <p className="text-sm leading-6 text-center text-gray-500 md:text-lg font-mont">
            Distribuimos nuestros materiales a los principales empresas de
            recuperacion tanto a nivel nacional como europeo.
          </p>
        </div>
        <div className="items-center w-full px-4 py-4 rounded-lg shadow-xl bg-slate-50">
          <h1 className="pb-4 text-xl font-normal text-center text-gray-700 md:text-2xl md: font-mont">
            Demolición Industrial y Civil
          </h1>
          <p className="text-sm leading-6 text-center text-gray-500 md:text-lg font-mont">
            Contribuimos y proveemos de nuestros productos a las principales
            industrias del sector en trabajos de demolición industrial y civil.
          </p>
        </div>
      </div>
    </>
  );
}

export default SliderServices;
