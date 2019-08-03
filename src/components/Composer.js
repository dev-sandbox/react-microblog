import React, { Component } from "react";
import Button from "./shared/Button"

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
        <Button type="submit" onClick={() => onSubmit(evt.target)} text="POST" />
      </div>
    );
  }
}

export default Composer;
