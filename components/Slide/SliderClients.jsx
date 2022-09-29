import Image from "next/image";

function SliderClients() {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 px-12 py-12 place-items-center md:grid-cols-4 md:mx-auto bg-slate-50">
        <div className="flex items-center w-2/3">
          <Image
            src="/clients-logo/acerinox.svg"
            alt=""
            width={300}
            height={100}
          />
        </div>
        <div className="flex items-center w-2/3">
          <Image
            src="/clients-logo/iberinox.svg"
            alt=""
            width={300}
            height={100}
          />
        </div>
        <div className="flex items-center w-2/3">
          <Image
            src="/clients-logo/olarra.svg"
            alt=""
            width={300}
            height={100}
          />
        </div>
        <div className="flex items-center w-2/3">
          <Image
            src="/clients-logo/tubacex.svg"
            alt=""
            width={300}
            height={100}
          />
        </div>
      </div>
    </>
  );
}

export default SliderClients;
