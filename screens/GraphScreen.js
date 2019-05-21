import React, {Component} from "react";
import HeaderComponent from "../components/layouts/HeaderComponent";
import Graph from "../components/Graph";

class GraphScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };

  render() {
    return <Graph />;
  }
}

export default GraphScreen;
