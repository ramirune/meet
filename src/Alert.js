import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontSize = '12px';
    this.backgroundColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.backgroundColor = '#d2e5f6';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.backgroundColor = '#fde2e2';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'yellow';
    this.backgroundColor = '#fbecc6';
  }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };