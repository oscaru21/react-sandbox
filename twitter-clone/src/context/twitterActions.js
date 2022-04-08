import axios from 'axios'
const TWITTER_URL = process.env.REACT_APP_TWITTER_URL
const TWITTER_TOKEN = process.env.REACT_APP_TWITTER_TOKEN

//CREATE AN AXIOS CLIENT
const twitter = axios.create({
    baseURL: TWITTER_URL,
    mode: 'no-cors',
    headers: { Authorization: `Bearer ${TWITTER_TOKEN}` },
  })

// Get user and tweets
export const getUserAndTweets = async (username) => {
    const params = new URLSearchParams({
      exclude: 'retweets',
      'tweet.fields': 'attachments'
    })
    const user = await twitter.get(`/users/by/username/${username}`)
    const tweets = await twitter.get(`/users/${user.id}/tweets?${params}`)
    
    return { user: user.data, tweets: tweets.data }
  }