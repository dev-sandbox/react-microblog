import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Composer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  onKeyUp = evt => {
    this.setState({
      text: evt.target.value
    });
  };

  render() {
    const { onSubmit } = this.props;
    const { text } = this.state;

    return (
      <div className="composer">
        <div>
          <textarea onKeyUp={this.onKeyUp} />
        </div>
        <Button variant="primary" onClick={() => onSubmit(text)}>Send</Button>
      </div>
    );
  }
}

export default Composer;
