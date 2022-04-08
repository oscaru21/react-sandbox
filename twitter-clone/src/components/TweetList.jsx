import Tweet from "./Tweet"

function TweetList({tweets}) {
  return (
    <>
        {tweets.map(tweet => (<Tweet key={tweet.id} tweet={tweet}/>))}
    </>
  )
}

export default TweetList