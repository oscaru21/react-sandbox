import { BsEmojiSmile } from "react-icons/bs";
import { FiImage } from "react-icons/fi";
import { AiOutlineGif, AiOutlineAlignLeft } from "react-icons/ai";
import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";
import Button from "./Button";
function TweetForm() {
  return (
    <div className="flex flex-row border-b ">
      <div className="avatar pl-4">
        <div className="w-12 h-12 rounded-full">
          <img
            src="https://pbs.twimg.com/profile_images/1147780439152758785/1acK55_9_400x400.jpg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex flex-col grow mx-3">
        <div className="border-b pb-3">
          <input
            type="text"
            placeholder="What's happening"
            className="input input-ghost w-full text-xl focus:outline-none"
          />
        </div>
        <div className="flex flex-row justify-between ml-4 py-3 items-center">
          <div className="flex flex-row justify-start">
            <Button Icon={FiImage} size="1" to="/" color="sky-500" />
            <Button Icon={AiOutlineGif} size="1" to="/" color="sky-500" />
            <Button
              Icon={AiOutlineAlignLeft}
              size="1"
              to="/"
              color="sky-500"
            />
            <Button Icon={BsEmojiSmile} size="1" to="/" color="sky-500" />
            <Button
              Icon={IoCalendarClearOutline}
              size="1"
              to="/"
              color="sky-500"
            />
            <Button
              Icon={IoLocationOutline}
              size="1"
              to="/"
              color="sky-500"
            />
          </div>
          <div className="flex flex-row justify-center py-2 rounded-full bg-[#1da1f2] hover:bg-opacity-75 text-white cursor-pointer">
            <p className="px-4 text-md flex ">Tweet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetForm;
