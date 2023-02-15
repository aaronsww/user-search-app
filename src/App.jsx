import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState("balub");
  const [imageURL, setImageURL] = useState('');
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

  // function performSearch(event){
  // event.preventDefault();
  useEffect(() => {
    axios
      .get("https://api.github.com/users/" + user)
      .then((res) => {
        console.log(res.data);
        setImageURL(res.data.avatar_url);
        setName(res.data.name);
        setBio(res.data.bio);
        setBio(res.data.bio);
        setDoj(res.data.created_at);
        setRepos(res.data.public_repos);
        setFollowers(res.data.followers);
        setFollowing(res.data.following);
        setLocation(res.data.location); 
        console.log(res.data.blog);
        if (!res.data.blog) setBlog("This profile has no blog");
        else setBlog(res.data.blog);
        setTwitter(res.data.twitter_username);
        setOrg(res.data.company);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  // }

  return (
    <div>
      {/* <form> */}
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {/* <button type='submit' onClick={performSearch}>Search</button> */}
      {/* </form> */}

      <img src={imageURL} alt="" />
      <section>
        <div>Name:{name}</div>
        <div>Username:{user}</div>
        <div>Bio:{bio}</div>
        <div>Date of Joining:{doj}</div>
      </section>
      <section>
        <div>Repos:{repos}</div>
        <div>Followers:{followers}</div>
        <div>Folowing:{following}</div>
      </section>
      <section>
        <div>Location:{location}</div>
        <div>Blog:{blog}</div>
        <div>Twitter:{twitter}</div>
        <div>Organization:{org}</div>
      </section>
    </div>
  );
}

export default App;
