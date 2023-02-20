import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [userOrg, setUserOrg] = useState("balub");
  const [user, setUser] = useState("balub");
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState(" ");
  const [bio, setBio] = useState(" ");
  const [doj, setDoj] = useState(" ");
  const [repos, setRepos] = useState(" ");
  const [followers, setFollowers] = useState(" ");
  const [following, setFollowing] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [blog, setBlog] = useState(" ");
  const [twitter, setTwitter] = useState(" ");
  const [org, setOrg] = useState(" ");
  const [search, setSearch] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/" + userOrg)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.login);
        setImageURL(res.data.avatar_url);
        setName(res.data.name);
        if (!res.data.bio) setBio("This profile has no bio");
        else setBio(res.data.bio);
        setDoj(res.data.created_at);
        setRepos(res.data.public_repos);
        setFollowers(res.data.followers);
        setFollowing(res.data.following);
        if (!res.data.location) setLocation("Not Available");
        else setLocation(res.data.location);
        if (!res.data.blog) setBlog("Not Available");
        else setBlog(res.data.blog);
        if (!res.data.twitter_username) setTwitter("Not Available");
        else setTwitter(res.data.twitter_username);
        if (!res.data.company) setOrg("Not Available");
        else setOrg(res.data.company);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  function performSearch() {
    setSearch(search + 1);
  }

  return (
    <div className="flex flex-col items-center mt-28">
      <div className="flex items-center m-5 border-2 border-rose-500 p-1 rounded-2xl">
        <img className="h-6 mx-3" src="\img\search.svg" alt="" />
        <input
          className="text-lg mr-6"
          placeholder="Search Github username..."
          type="text"
          value={userOrg}
          onChange={(e) => setUserOrg(e.target.value)}
        />
        <button
          className="bg-slate-400 px-5 py-3 rounded-xl  ml-80"
          type="submit"
          onClick={performSearch}
        >
          Search
        </button>
      </div>

      <div className="flex border-2 border-rose-500 p-5 rounded-2xl">
        <img
          className="rounded-full h-28 m-5 border-2 border-rose-500"
          src={imageURL}
          alt=""
        />
        <div>
          <section className="flex justify-between">
            <div>
              <div className=" font-semibold text-2xl px-5 pt-5 pb-2">
                {name}
              </div>
              <div className=" px-5">@{user}</div>
              <div className="p-5">{bio}</div>
            </div>
            <div className="ml-20 p-5 mt-1">Joined {doj}</div>
          </section>
          <section className="flex border-2 rounded-xl  border-gray-500  px-7 py-3 mx-5">
            <span>
              <div>Repos</div>
              <div className="font-bold text-xl">{repos}</div>
            </span>
            <span className=" pl-16">
              <div>Followers</div>
              <div className="font-bold text-xl">{followers}</div>
            </span>
            <span className=" pl-16">
              <div>Following</div>
              <div className="font-bold text-xl">{following}</div>
            </span>
          </section>
          <section className="flex  ">
            <span className="p-5">
              <div className="bg-slate-500 flex">
                <img className="h-5 pr-2" src="/img/location-on.svg" alt="location icon" />
                {location}</div>
              <div className="pt-3 bg-slate-500 flex">
                <img className="h-5 pr-2" src="/img/link.svg" alt="link icon" />
                {blog}</div>
            </span>
            <span className="p-5 ml-24">
              <div className="bg-slate-500 flex">
                 <img className="h-5 pr-2" src="/img/twitter.svg" alt="twitter icon" />
                {twitter}</div>
              <div className="pt-3 bg-slate-500 flex">
                   <img className="h-5 pr-2" src="/img/building.svg" alt="building icon" />
                {org}</div>
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
