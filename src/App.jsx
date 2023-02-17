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
    <div className="flex flex-col items-center mt-40">

      <div className="m-5 border-2 border-rose-500 ">
        <input
          type="text"
          value={userOrg}
          onChange={(e) => setUserOrg(e.target.value)}
        />
        <button type="submit" onClick={performSearch}>
          Search
        </button>
      </div>

      <div className="flex border-2 border-rose-500 ">
        <img className="rounded-full h-32" src={imageURL} alt="" />
        <div>
          <section className="flex">
            <div>
              <div className="text-2xl">{name}</div>
              <div>@{user}</div>
              <div>{bio}</div>
            </div>
            <div>Joined {doj}</div>
          </section>
          <section className="flex border-2 border-gray-500 justify-start p-2">
            <span>
              <div>Repos</div>
              <div>{repos}</div>
            </span>
            <span className=" pl-16">
              <div>Followers</div>
              <div>{followers}</div>
            </span>
            <span className=" pl-16">
              <div>Folowing</div>
              <div>{following}</div>
            </span>
          </section>
          <section className="flex justify-between">
            <span>
              <div>{location}</div>
              <div>{blog}</div>
            </span>
            <span>
              <div>{twitter}</div>
              <div>{org}</div>
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
