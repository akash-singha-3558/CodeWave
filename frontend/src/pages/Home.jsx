import React from "react";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
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
    navigate(`/editor/${roomid}`, {
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
    <div className="HomeDiv">
      <div className="HomeForm">
        <img
          src="https://private-user-images.githubusercontent.com/112806398/241290781-cfdf6afe-ec2e-4686-94f9-c99d642012e0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg1MTI0MzE0LCJuYmYiOjE2ODUxMjQwMTQsInBhdGgiOiIvMTEyODA2Mzk4LzI0MTI5MDc4MS1jZmRmNmFmZS1lYzJlLTQ2ODYtOTRmOS1jOTlkNjQyMDEyZTAucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMDUyNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzA1MjZUMTgwMDE0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YjMxY2Y3N2YzNGY5Y2EwYjYyM2MzZWQxYzg4YzMyMDZmMmNkYTQwNTk5YWU2ZWJlYjI4NTM4Y2M4ZDIwOTZhOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.oOn73yVJ-0nRRJnjiCWv_Ur35WPIFN9cJbVmV4IQvxc"
          alt="code wave logo"
        />
        <h4 className="HomeMainLabel">Paste Invitation Room ID</h4>
        <div className="HomeInputGroup">
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
