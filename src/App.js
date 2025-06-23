import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [color, setColor] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColor("light");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = "#1c1c1c";
      setColor({
        color: "white",
        backgroundColor: "#181414",
        border: "none",
        borderRadius: "0.75rem",
      });
      setBtnText("dark");
      showAlert("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      setTextColor("dark");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setColor({
        color: "black",
        backgroundColor: "white",
        borderRadius: "0.75rem",
      });
      setBtnText("primary");
      showAlert("Enabled Light Mode", "success");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            mode={mode}
            textColor={textColor}
            toggleMode={toggleMode}
            modeText={modeText}
            color={color}
          />
          <Alert alert={alert} />
          <Textform
            heading="Enter the text to analyze"
            color={color}
            btnText={btnText}
            showAlert={showAlert}
          />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
