import React, { Component } from "react";
import NewsItemComponent from "./NewsItemComponent";
import Spinner from "../Spinner";

export default class Newscomponent extends Component {
  constructor() {
    super();
    // console.log("i am constructot from News componert");
    this.state = {
      articles: [],
      page: 1,
      loading:false,
    };
  }

  async componentDidMount() {
    //  console.log("i am componentDidMount ")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=439f4f45068345a3b7f2a3458f7ef4cb&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData)x
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=439f4f45068345a3b7f2a3458f7ef4cb&page=
    ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      // pageSize: this.state.pageSize 16
      // pageSize: this.state.pageSize - 16,
      loading:false
    });

    console.log(url);
  };

  handleNextClick = async () => {
    // alert("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 16))) {

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=439f4f45068345a3b7f2a3458f7ef4cb&page=
      ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
     
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading:false,
      });

      console.log(url);
    }
  };

  render() {
    // console.log("i am render ")

    return (
      <div className="container my-3">
        <h1 className="text-center">Top headlines</h1>
          {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((e) => {
            return (
              <div className="col col-md4" key={e.url}>
                <NewsItemComponent
                  title={e.title ? e.title.slice(0, 57) : ""} //prop for title
                  description={e.description ? e.description.slice(0, 98) : ""} //prp for description
                  ImgUrl={e.urlToImage} //prop fot image-utl
                  NewsUrl={e.url} //prop for button url link
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr;Previous
          </button>

          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 16)
            }
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
