import React, { useState, useEffect } from "react";
import "./App.css";
import Terminal from "react-bash";
import axios from "axios";

export const clear = {
  exec: ({ structure, history, cwd }, command) => {
    return { structure, cwd, history: [] };
  },
};
// take this from the db
// which is most probably a json
// add is going to be just a command line tool to change this

const history = [{ value: "Temă IDP; cred că o să evolueze in CV-ul meu" }];

function App() {
  const [struct, setStruct] = useState([]);
  
  const clear = {
    exec: ({ struct, history, cwd }, command) => {
      return { struct, cwd, history: [] };
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://0.0.0.0:8083/getCV',
      );
 
      setStruct(result.data.content);
      console.log(result.data);
      console.log(result);
    };
 
    fetchData();
  }, []);

  const extensions = { clear };


  return (
    <div style={{background:"black", height:window.innerHeight}}>
      <Terminal
        extensions={extensions}
        theme={Terminal.Themes.DARK}
        structure={struct}
        setStructure={{ setStruct }}
        history={history}
      />
    </div>
  );
}

export default App;
