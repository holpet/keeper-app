import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteContainer from "./note/NoteContainer";

const App = () => {
  return (
    <div>
      <Header />
      <NoteContainer />
      <Footer />
    </div>
  );
};

export default App;
