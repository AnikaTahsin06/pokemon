// @ts-nocheck
import Image from "next/image";
import logo from "./images/Logo.png";
import left from "./images/Left.png";
import pokemon from "./images/image 10.png";

const details = () => {
  return (
    <div className="grid grid-cols-12 bg-cover   h-screen   bg-white">
      <div className="col-auto background bg-cover">
        <Image src={left} className="h-screen" />
      </div>
      <div className="col-span-10 grid grid-cols-12 bg-white">
        <div className="col-span-4  grid grid-rows-2 justify-items-start self-center ">
          <div className="bg-gray-400 m-2 p-2">
            <h1>Anka</h1>
            <h1>Anka</h1>
            <h1>Anka</h1>
            <h1>Anka</h1>
          </div>
          <div className="m-2 p-2 max-w-sm overflow-hidden rounded ">
            <h1>Anika</h1>
            <h1>Anika</h1>
            <h1>Anika</h1>
            <h1>Anika</h1>
          </div>
        </div>
        <div className="col-span-4 flex flex-col">
          <div className="grid place-items-center m-2 p-2">
            <Image src={logo} width={200} height={200} />
          </div>
          <div className="grid place-items-center pt-20">
            <Image
              src={pokemon}
              className="w-11/12 transition delay-700 hover:w-full"
            />
          </div>
          <div className="grid place-items-center pt-15">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
        <div className="col-span-4 bg-current grid grid-rows-2 justify-items-start self-center ">
          <div className="bg-gray-400 m-2 p-2">
            <h1>Anka</h1>
            <h1>Anka</h1>
            <h1>Anka</h1>
            <h1>Anka</h1>
          </div>
          <div className="bg-gray-400 m-2 p-2">
            <h1>Anika</h1>
            <h1>Anika</h1>
            <h1>Anika</h1>
            <h1>Anika</h1>
          </div>
        </div>
      </div>
      <div className="col-auto background bg-cover">
        <Image src={left} className="h-screen" />
      </div>
    </div>
  );
};

export default details;
