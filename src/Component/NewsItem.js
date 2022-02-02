import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl,author,publishedAt } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://images.livemint.com/img/2022/01/20/600x338/AGS_Transact_Technologies_IPO_1642653801821_1642653802014.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            
            
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <small  className="text-muted mx-4">By {!author?"Unknown":author} at {publishedAt}</small>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
