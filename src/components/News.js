import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log("Hello i am a constructor of news");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7ca2065bc4ee4fe08f993d03b734a2e8";
    let data = await fetch(url);
    // console.log(data);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
