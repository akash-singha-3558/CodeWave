import React from "react";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../logo.png"
const Home = () => {
  const navigate = useNavigate();
  const [roomid, setRoomId] = useState("");
  const [username, setUserName] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("created a new room");
  };
  const joinRoom = () => {
    if (!roomid || !username) {
      toast.error("ROOM ID & USERNAME IS REQUIRED");
      return;
    }
    navigate(`/codeeditor/${roomid}`, {
      state: {
        username,
      },
    });
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homeDiv">
      <div className="homeForm">
        <img
          src={logo}
          alt="code wave logo"
        />
        <h4 className="homeMainLabel">Paste Invitation Room ID</h4>
        <div className="homeInputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onKeyUp={handleEnter}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            value={roomid}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USER NAME"
            value={username}
            onKeyUp={handleEnter}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then Create &nbsp;{" "}
            <a onClick={createNewRoom} href="" className="createNewRoom">
              new room{" "}
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          Built with&nbsp;💗&nbsp;by &nbsp;
          <a href="https://github.com/akash-singha-3558">Akash Singha</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
