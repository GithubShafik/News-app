import React, { Component } from "react";

export default class NewsItemComponent extends Component {
  render() {
    let { title, description, ImgUrl , NewsUrl} = this.props;

    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={ImgUrl?ImgUrl:"https:images.moneycontrol.com/static-mcnews/2022/04/mamaearth-770x433.png"} className="card-img-top" alt="..." />
          {/* this tern Oper responsible fro im "ImgUrl is present then use it Other wise use this link is given " */}
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={NewsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
