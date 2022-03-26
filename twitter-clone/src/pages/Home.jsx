import { IoSparklesOutline } from "react-icons/io5";
import Button from "../components/Button";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";

function Home() {
  return (
    <div className="flex md:basis-2/3 basis-4/5 border-r h-screen flex-col overflow-y-auto no-scrollbar">
      <div className="sticky top-0 flex flex-row justify-between items-center cursor-pointer bg-white z-10 px-4 opacity-95">
        <p className="text-xl font-bold py-3">Home</p>
        <Button Icon={IoSparklesOutline} size="2" to="/" color="gray-700"/>
      </div>
      <TweetForm />
      <Tweet content={"tweet content"} imgUrl={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}/>
      <Tweet content={"second tweet content"} />
      <Tweet content={"third tweet content"} imgUrl={"https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"}/>
      <Tweet content={"forth tweet content"} imgUrl="https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"/>
    </div>
  );
}

export default Home;
