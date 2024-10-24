const MapContainer: React.FC<MapContainerProps> = () => {
    return (
      <div className="flex overflow-hidden flex-col mx-auto w-full bg-neutral-100 max-w-[480px] rounded-[50px]">
        <MapHeader />
        <MapContent />
        <MapFooter />
      </div>
    );
  };
  
  export default MapContainer;

  const MapHeader: React.FC<MapHeaderProps> = () => {
    return (
      <header className="flex relative flex-col items-center pb-2 w-full aspect-[0.462]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8e5b0f30ac50669a6afc6e54b44192e2eeea3d733126aed17740cac7cc60930?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/afb4dae10a228920963223748851a25e33839eec6d3a045b8df927e81360defa?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="Map logo" className="object-contain self-start rounded-none aspect-[1.09] w-[94px]" />
      </header>
    );
  };
  
  export default MapHeader;
    
  <MapMarker key={index} icon={marker.icon} position={marker.position} />
))}
</div>
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d75242dbde57ecbcd7adde9715eec2bd23403a2596b98fbd26f053ec6f89c2a3?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-contain shrink-0 self-end mt-24 w-9 rounded-none aspect-square" />
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a6313a2b988a66ad137e4163efebf2f310438e53f4b47ef4c14c5446282173?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-contain mt-28 aspect-[0.89] w-[39px]" />
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c79c2b7bf039bb4d4328de6cfffb7b862581355bf18bfcbb6fac4615e136173?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-contain mt-3 aspect-[1.81] w-[76px]" />
</section>
);
};

export default MapContent;

import React from 'react';

interface MapMarkerProps {
  icon: string;
  position: string;
}

const MapMarker: React.FC<MapMarkerProps> = ({ icon, position }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${position}`}>
      <div className="flex gap-2.5 items-center p-2 bg-white bg-opacity-90 h-[37px] rounded-[100px] w-[37px]">
        <div className="flex gap-2.5 items-center p-1 bg-blue-700 h-[21px] rounded-[100px] w-[21px]">
          <img loading="lazy" src={icon} alt="" className="object-contain aspect-square w-[13px]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-1">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dc94951babdac09a042f84e5c3e0440e53011a0d41f67fd3b5ace84abf2a8d9?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-contain w-px aspect-[0.01]" />
      </div>
    </div>
  );
};

export default MapMarker;

import React from 'react';
import LocationBar from './LocationBar';

interface MapFooterProps {}

const MapFooter: React.FC<MapFooterProps> = () => {
  return (
    <footer className="flex relative flex-col items-center mt-4">
      <div className="flex relative flex-col items-center px-20 pt-1 pb-16 rounded-none aspect-[3.616] w-[358px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d639669ba5ec5db153f81362b849c446974787e68e474836b60a323d4231678c?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col w-[43px]">
          <div className="flex shrink-0 bg-violet-400 h-[5px] rounded-[100px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e296cee352aacdb8f386039dcdacc6f53f664c485a20da728ff39a4ab365d42d?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-contain self-end mt-3 w-3.5 aspect-[0.87]" />
        </div>
      </div>
      <LocationBar />
      <div className="flex relative shrink-0 mt-5 bg-neutral-50 h-[5px] rounded-[100px] w-[135px]" />
    </footer>
  );
};

export default MapFooter;

import React from 'react';

interface LocationBarProps {}

const LocationBar: React.FC<LocationBarProps> = () => {
  return (
    <div className="flex relative gap-5 px-4 py-5 w-full rounded-3xl bg-stone-50">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/299aed5ca56b5337e5f2582ba7c184696b0169b1d11596e323d5df15a3a5ff20?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-contain shrink-0 my-auto w-6 aspect-square" />
      <div className="grow shrink self-start text-base font-bold tracking-normal text-neutral-800 w-[142px]">
        Marxergasse, Wien
      </div>
      <div className="flex gap-2.5">
        <button className="gap-1.5 self-stretch py-1.5 pr-1.5 pl-1.5 text-sm font-bold text-center text-white whitespace-nowrap bg-blue-700 rounded-2xl w-[62px]">
          Stop
        </button>
        <button className="flex gap-1.5 justify-center items-center p-1.5 rounded-2xl border border-blue-700 border-solid">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4925f8d81be2199d53e5aee77606d9d0aa255f7a96a74544e0d75b1610e718ef?placeholderIfAbsent=true&apiKey=ca08fc0fba314ea3bf03e2a9b0ad419c" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
        </button>
      </div>
    </div>
  );
};

export default LocationBar;
