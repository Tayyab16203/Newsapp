import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articals = [
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
    {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Watch: See inside Las Vegas Sphere for the first time",
      "description": "Rock band U2 headline the new ball-shaped venue as it finally opens its doors to the public.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-66979484",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1860/production/_131304260_p0ghtw0y.jpg",
      "publishedAt": "2023-10-02T07:07:19.1520631Z",
      "content": "The new ball-shaped venue and world's largest LED, the Las Vegas Sphere, is now open to the public.\r\nIrish rock band U2 played the first show of its residency on 29 September.\r\nThis is the first time… [+38 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Migrants trying to reach the UK cross the Alps on foot",
      "description": "More than 130,000 migrants have entered Italy this year. Many try to head further into Europe.",
      "url": "http://www.bbc.co.uk/news/world-europe-66934839",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/35AB/production/_131293731_adj-photo21copycopy.jpg",
      "publishedAt": "2023-10-02T00:22:14.1685314Z",
      "content": "In a corner of the Italian Alps, a queue of Sudanese and Afghans are swapping their sandals for hiking boots and replacing flip-flops with sturdy trainers, preparing, they hope, for their trek to fre… [+5354 chars]"
      }
  ]
  constructor(){
    super();
    console.log("Hello i am a constructor of news");
    this.state = {
      articals: this.articals,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          {this.state.articals.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
