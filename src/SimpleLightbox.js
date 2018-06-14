import React, { Component } from "react";
import uniqueId from "lodash/uniqueId";

import "./lightbox.css";

export default class SimpleLightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgId: uniqueId()
    };
    this.escFunction = this.escFunction.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }
  escFunction(event) {
    if (event.keyCode === 27) this.closeImg();
  }
  openImg() {
    const target = document.getElementById(this.state.imgId);
    target.classList.add("lightbox-visible");
    target.classList.remove("lightbox-hidden");
    return false;
  }

  closeImg() {
    const target = document.getElementById(this.state.imgId);
    target.classList.add("lightbox-hidden");
    target.classList.remove("lightbox-visible");
    return false;
  }

  render() {
    const { children = [], style = {} } = this.props;

    return (
      <div className="lightbox-wrapper" {...{ style }}>
        <button className="img-open" onClick={() => this.openImg()}>
          {children}
        </button>
        <button
          className="lightbox lightbox-hidden img-close"
          id={this.state.imgId}
          onClick={() => this.closeImg()}
        >
          {children}
        </button>
      </div>
    );
  }
}
