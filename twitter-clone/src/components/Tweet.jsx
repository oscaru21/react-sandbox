import { AiOutlineAlignLeft, AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import Button from "./Button";

function Tweet({ content, imgUrl }) {
  return (
    <div className="flex flex-row border-b pt-3 hover:bg-gray-100 cursor-pointer">
      <div className="avatar pl-4 ">
        <div className="w-12 h-12 rounded-full">
          <img
            src="https://pbs.twimg.com/profile_images/1147780439152758785/1acK55_9_400x400.jpg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex flex-col px-4 grow">
        <div className="flex flex-row items-center">
          <p className="font-bold text-md">Oscar Umaña</p>
          <p className="text-gray-500 px-2">@oscar_umana</p>
          <p className="text-gray-500">3h</p>
        </div>
        <div className="flex flex-col">
          <p className="pb-3">{content}</p>
          {imgUrl && imgUrl !== "" && (
            <div className="card w-full">
              <figure>
                <img src={imgUrl} alt="" />
              </figure>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-between items-center my-2">
          <Button Icon={FiImage} size="1" to="/" color="gray-600" />
          <Button Icon={AiOutlineGif} size="1" to="/" color="gray-600" />
          <Button Icon={AiOutlineAlignLeft} size="1" to="/" color="gray-600" />
          <Button Icon={BsEmojiSmile} size="1" to="/" color="gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
