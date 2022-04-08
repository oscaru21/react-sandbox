import { useContext} from "react";
import { IoSparklesOutline } from "react-icons/io5";
import Button from "../components/Button";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
//import { getUserAndTweets } from "../context/twitterActions";
import TwitterContext from "../context/TwitterContext";

function Home() {
  const {isLoading} = useContext(TwitterContext)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({type: 'SET_LOADING'})
  //     const userData = await getUserAndTweets('oscar_umana')
  //     dispatch({type: 'GET_USER_AND_REPOS', payload: userData})
  //   }
  //   fetchData()
  // }, [dispatch]);

  return isLoading ? <h3>Loading...</h3> : (
    <div className="flex md:basis-2/3 basis-4/5 border-r h-screen flex-col overflow-y-auto no-scrollbar">
      <div className="sticky top-0 flex flex-row justify-between items-center cursor-pointer bg-white z-10 px-4 opacity-95">
        <p className="text-xl font-bold py-3">Home</p>
        <Button Icon={IoSparklesOutline} size="2" to="/" color="gray-700"/>
      </div>
      <TweetForm />
      <TweetList tweets={[{id:"1", text:"hola mundo"}, {id:"2", text:"hola mundo"},{id:"3", text:"hola mundo"}, {id:"4", text:"hola mundo"},{id:"5", text:"hola mundo"}, {id:"6", text:"hola mundo"}]}/>
    </div>
  );
}

export default Home;
