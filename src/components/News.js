import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(){
    super()
    this.state = {
      articles: [],
      loadinf: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a9ea2413ccbe44ef80c96819ab1857d3"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container mx-auto p-4">
        <p className="text-xl font-bold mb-4">This is news</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {this.state.articles.map((element)=>{
            return <NewsItem key={element.url} title= {element.title} description= {element.description} imageurl= {element.urlToImage} newsurl= {element.url}/>
          })}
        </div>
      </div>
    )
  }
}
