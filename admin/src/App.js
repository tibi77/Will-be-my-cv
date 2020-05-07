import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [textInside, setTextInside] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://0.0.0.0:8083/getCV");

      setTextInside(result.data.content);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        background: "black",
        display: "flex",
        justifyContent: "center",
        verticalAlign: "center",
        width: "100%",
        height: window.innerHeight,
        paddingTop: "100px",
        alignContent: "center",
      }}
    >
      <div
        style={{
          height: "700px",
          width: "800px",
        }}
      >
        <JSONInput
          height="700px"
          width="800px"
          placeholder={textInside}
          locale={locale}
          onChange={(e) => setTextInside(e.jsObject)}
        />
        <button
          style={{ marginTop: "30px", marginRight: "0px", marginLeft: "700px" }}
          onClick={() =>
            axios({
              method: "post",
              url: "http://0.0.0.0:8083/getCV" + "/add",
              headers: {},
              data: { textInside },
            })
          }
        >
          Update the CV
        </button>
      </div>
    </div>
  );
};

export default App;
