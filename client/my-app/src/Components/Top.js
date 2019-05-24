import React from "react";
import ReactWordcloud from "react-wordcloud";

class Top extends React.Component {
  render() {
    const words = [
      { text: "hello", value: 3 },
      { text: "world", value: 12.5 },
      { text: "github", value: 1 },
      { text: "code", value: 1 }
    ];

    function MyApp(words) {
      return (
        <div>
          test
          <ReactWordcloud words={words} />
        </div>
      );
    }

    return <ReactWordcloud words={words} />;
  }
}
export default Top;
