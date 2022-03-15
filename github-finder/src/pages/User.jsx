import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubActions";

function User() {
  const { user, isLoading, repos, dispatch} = useContext(GithubContext);

  const params = useParams();
  
  

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'SET_LOADING'})
      const userData = await getUserAndRepos(params.login)
      dispatch({type: 'GET_USER_AND_REPOS', payload: userData})
    }
    fetchData()
  }, [dispatch, params.login]);

  // user keys
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  return isLoading ? (
    <Spinner />
  ) : (
    <>
       <div className='w-full mx-auto '>
         {/* back button */}
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>
        {/* grid */}
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          {/* image card */}
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full justify-center'>
                <img src={avatar_url} alt='' />
              <div className='card-body justify-end text-white '>
                <h2 className='card-title mb-0 text-white'>{name}</h2>
                <p className="grow-0 text-white">{login}</p>
              </div>
            </div>
          </div>
          {/* user info */}
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title mb-2">
                {name}
                <div className="ml-2 mr-1 badge badge-success">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 badge badge-info">
                    Hireable
                </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a href={html_url} target='_blank' rel="noreferrer" className="btn btn-outline">Visit Github Profile</a>
              </div>
            </div>
            {/* stats */}
            <div className="w-full bg-base-100 rounded-lg shadow-md lg:stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a href={`https://${blog}`} target='_blank' rel='noreferrer'>{blog}</a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                  <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>{twitter_username}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full bg-base-100 shadow-lg rounded-lg stats  py-5 mb-6 ">
          <div className="grid grid-cols-2 lg:grid-cols-4">

          <div className="stat ">
            {/* figure */}
            <div className="stat-figure text-secondary ">
              <FaUsers className="text-3xl md:text-5xl"/>
            </div>
            {/* title */}
            <div className="stat-title pr-5">
              Followers
            </div>
            {/* value */}
            <div className="stat-value pr-5 text-3xl md:text-4xl">{followers}</div>
          </div>
          <div className="stat ">
            {/* figure */}
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl"/>
            </div>
            {/* title */}
            <div className="stat-title pr-5">
              Following
            </div>
            {/* value */}
            <div className="stat-value pr-5 text-3xl md:text-4xl">{following}</div>
          </div>
          <div className="stat ">
            {/* figure */}
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl"/>
            </div>
            {/* title */}
            <div className="stat-title pr-5">
              Public Repos
            </div>
            {/* value */}
            <div className="stat-value pr-5 text-3xl md:text-4xl">{public_repos}</div>
          </div>
          <div className="stat ">
            {/* figure */}
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl"/>
            </div>
            {/* title */}
            <div className="stat-title pr-5">
              Public gists
            </div>
            {/* value */}
            <div className="stat-value pr-5 text-3xl md:text-4xl">{public_gists}</div>
          </div>
          </div>
        </div>
        <RepoList repos={repos}/>
      </div>
    </>
  );
}

export default User;
