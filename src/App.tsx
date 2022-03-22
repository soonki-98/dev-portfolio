import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallery from "./Gallery/Gallery";
import Item from "./Gallery/Item";

function App() {
  return (
    <Gallery gap="wider">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Gallery>
  );
}

export default App;
