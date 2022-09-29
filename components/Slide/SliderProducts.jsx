import Image from "next/image";
function SliderProducts() {
  return (
    <>
      <div className="grid md:px-24 grid-col-1 md:grid-cols-3 md:gap-12 bg-slate-50">
        <div className="px-2 pt-6 shadow-xl bg-slate-50">
          <h1 className="pb-4 text-3xl border-b border-gray-700 font-mont">
            Lanzas Térmicas
          </h1>
          <p className="py-4 text-gray-500 font-mont md:text-lg md:px-4">
            Las lanzas térmicas se utilizan para el corte de acero inoxidable y
            metal no ferroso, chapa de corte o pila de tubería y cualquier otro
            acero especial, corte de hierro fundido mezclado con escoria, corte
            de ladrillo refractario etc. Nuestras lanzas térmicas están
            constituidas por una vaina tubular rellena de filamentos especiales
            que reaccionan al calor produciendo una reacción exotérmica en
            cadena, por oxidación enérgica. Esta reacción permite a la lanza
            térmica alcanzar temperaturas superiores a los 5000ºC, lo que le
            permite fundir y cortar materiales altamente resistentes.
          </p>
        </div>
        <div className="px-2 pt-6 shadow-xl md:grid md:justify-center bg-slate-50">
          <Image
            src="/products/lanza16mm.png"
            alt="Lanza Térmica 16 mm"
            width={400}
            height={400}
          />
          <h1 className="py-4 text-lg text-center text-gray-500 font-mont">
            Lanza Térmica 16 mm
          </h1>
        </div>
        <div className="px-2 pt-6 shadow-xl md:grid md:justify-center bg-slate-50">
          <Image
            src="/products/lanza17mm.png"
            alt="Lanza Térmica 16 mm"
            width={400}
            height={400}
          />
          <h1 className="py-4 text-lg text-center text-gray-500 font-mont">
            Lanza Térmica 17 mm
          </h1>
        </div>
        <div className="px-2 pt-6 shadow-xl md:grid md:justify-center bg-slate-50">
          <Image
            src="/products/lanza1012.png"
            alt="Lanza Térmica 16 mm"
            width={400}
            height={400}
          />
          <h1 className="py-4 text-lg text-center text-gray-500 font-mont">
            Lanza Térmica 10/12 mm
          </h1>
        </div>
        <div className="px-2 pt-6 shadow-xl md:grid md:justify-center bg-slate-50">
          <Image
            src="/products/portalanzas.png"
            alt="Lanza Térmica 16 mm"
            width={400}
            height={400}
          />
          <h1 className="py-4 text-lg text-center text-gray-500 font-mont">
            Porta Lanzas
          </h1>
        </div>
        <div className="px-2 pt-6 shadow-xl md:grid md:justify-center bg-slate-50">
          <Image
            src="/products/ceramizada.png"
            alt="Lanza Térmica 16 mm"
            width={400}
            height={400}
          />
          <h1 className="py-4 text-lg text-center text-gray-500 font-mont">
            Lanzas Ceramizadas / Calorizadas
          </h1>
        </div>
      </div>
    </>
  );
}

export default SliderProducts;
