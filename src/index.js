import React from "react";
import ReactDOM from "react-dom";
import PortalCreator from "./PortalCreator";

const Title = (props) => <h2>{props.children}</h2>;
const Subtitle = (props) => (
  <h4 style={props.textStyle}>{props.children}</h4>
);

const EnhancedTitle = PortalCreator(Title);
const EnhancedSubtitle = PortalCreator(Subtitle);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <EnhancedTitle>some text</EnhancedTitle>
        <EnhancedSubtitle
          textStyle={{ color: "red", fontStyle: "italic" }}
        >
          some red text
        </EnhancedSubtitle>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
