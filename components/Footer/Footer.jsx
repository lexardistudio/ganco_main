import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 px-12 pt-4 shadow-xl bg-slate-100 md:grid-cols-3">
        <div className="md:py-12">
          <div className="">
            <p className="text-xl font-normal text-gray-600 capitalize font-mont">
              Contacto
            </p>
          </div>
          <div className="w-full border-b border-gray-600"></div>
          <div className="pt-4">
            <p className="text-lg font-normal text-gray-600 capitalize font-mont">
              Teléfono
            </p>
            <p className="font-light text-gray-400 font-mont">
              +34 678 21 16 77
            </p>
          </div>
          <div className="pt-4">
            <p className="text-lg font-normal text-gray-600 capitalize font-mont">
              Email
            </p>
            <p className="font-light text-gray-400 font-mont">
              administracion@gancotrading.com
            </p>
          </div>
          <div className="w-12 h-12 pt-4">
            <span className="flex">
              <Image src="/instagram.png" alt="" width={48} height={48} />
              &nbsp;
              <Image src="/linkedin.png" alt="" width={48} height={48} />
            </span>
          </div>
        </div>
        <div className="md:py-12">
          <div>
            <p className="text-xl font-normal text-gray-600 capitalize font-mont">
              Dirección
            </p>
            <div className="w-full border-b border-gray-600"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="pt-4 md:border-r">
              <h1 className="text-lg font-normal text-gray-600 capitalize md:pl-12 font-mont">
                Oficina
              </h1>
              <p className="md:text-lg pt-2 text-xs font-light text-gray-400 md:pl-12 font-mont">
                Velazquez 86
              </p>
              <p className="md:text-lg text-xs font-light text-gray-400 md:pl-12 font-mont">
                Planta Baja B
              </p>
              <p className="md:text-lg text-xs font-light text-gray-400 md:pl-12 font-mont">
                28006 Madrid
              </p>
            </div>
            <div className="pt-4 ">
              <h1 className="text-lg font-normal text-gray-600 capitalize md:pl-12 font-mont">
                Almacén
              </h1>
              <p className="md:text-lg pt-2 text-xs font-light text-gray-400 md:pl-12 font-mont">
                Poligono I. Saratxo
              </p>
              <p className="md:text-lg text-xs font-light text-gray-400 md:pl-12 font-mont">
                Kaldatzako Nave B16
              </p>
              <p className="md:text-lg text-xs font-light text-gray-400 md:pl-12 font-mont">
                01470 Amurrio (Álava)
              </p>
            </div>
          </div>
        </div>
        <div className="md:py-12">
          <div>
            <p className="text-xl font-normal text-gray-600 capitalize font-mont">
              Mapa
            </p>
            <div className="w-full border-b border-gray-600"></div>
          </div>
          <div className="py-4">
            <iframe
              className="w-full aspect-auto"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46663.82145782588!2d-3.0043351!3d43.0311452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4faf61cddd0471%3A0x9c0f1310a1c50f63!2sGanco!5e0!3m2!1ses!2ses!4v1664444664570!5m2!1ses!2ses"
              width="400"
              height="180"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <p className="text-xs md:text-sm font-light font-mont">
          Ganco Trading | © 2022 | Coded by Lexardi
        </p>
      </div>
    </>
  );
}

export default Footer;
