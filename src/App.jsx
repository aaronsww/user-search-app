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
        setUser(res.data.login)
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
    <div>
      <input
        type="text"
        value={userOrg}
        onChange={(e) => setUserOrg(e.target.value)}
      />
      <button type="submit" onClick={performSearch}>
        Search
      </button>

      <img src={imageURL} alt="" />
      <section>
        <div>
          <div>Name:{name}</div>
          <div>Username:{user}</div>
          <div>Bio:{bio}</div>
        </div>  
        <div>Date of Joining:{doj}</div>
      </section>
      <section>
        <span>
          <div>Repos</div>
          <div>{repos}</div>
        </span>
        <span>
          <div>Followers</div>
          <div>{followers}</div>
        </span>
        <span>
          <div>Folowing</div>
          <div>{following}</div>
        </span>
      </section>
      <section>
        <span>
          <div>Location:{location}</div>
          <div>Twitter:{twitter}</div>
        </span>
        <span>
          <div>Blog:{blog}</div>
          <div>Organization:{org}</div>
        </span>
      </section>
    </div>
  );
}

export default App;
