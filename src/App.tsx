import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Chat } from "./pages/Chat";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

function App() {
  const [jwt, setJwt] = useState("");

  const sendLoginReq = (loginDetails: any) => {
    api
      .post("/login", loginDetails)
      .then((res) => {
        setJwt(res.data);
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          api
            .post("/users", {
              nickname: loginDetails.nickname,
              firstName: "test",
              lastName: "test",
              email: loginDetails.nickname + "@email.com",
              phoneNumber: "+48 123 465 789",
              country: "San Escobar",
              city: "SSS",
            })
            .then(() => {
              api.post("/login", loginDetails).then((res) => {
                setJwt(res.data);
              });
            });
        }
      });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login onLogin={sendLoginReq} />} />
        <Route path="/chat" element={<Chat jwtToken={jwt} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
