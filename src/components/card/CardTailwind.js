import React from "react";
import heartIcon from "./icon-heart.svg";

const CardTailwind = () => {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          className="block w-full h-full object-cover rounded-lg"
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center"
          alt=""
        />
      </div>
      <div className="absolute left-[50%] w-[calc(100%-36px)] bottom-0 bg-white z-10 rounded-[20px] p-5 translate-y-[50%] translate-x-[-50%]">
        <div className="flex justify-between items-center mb-[32px]">
          <div className="flex items-center gap-x-3">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover flex-shrink-0"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center"
              alt=""
            />
            <span className="font-light text-base">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src={heartIcon} alt="heart" />
            <div>256</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Cosmic Perspective</h3>
          <span className="font-bold">12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
