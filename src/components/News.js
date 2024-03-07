import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Button } from 'flowbite-react';
import  Spinner  from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9ea2413ccbe44ef80c96819ab1857d3&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults, 
      loading: false})
  }
  handlePrevClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9ea2413ccbe44ef80c96819ab1857d3&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles,
      loading: false
    })

  }

  handleNextClick = async() =>{
    if (!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9ea2413ccbe44ef80c96819ab1857d3&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page +1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <>
        {this.state.loading && <Spinner/>}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <NewsItem key={element.url} title= {element.title} description= {element.description} imageurl= {element.urlToImage} newsurl= {element.url} author= {element.author} date= {element.publishedAt} source= {element.source.name}/>
            })}
          </div>
        </div>
        <div className="flex justify-between p-4">
          <Button disabled={this.state.page <=1} color="green" pill onClick={this.handlePrevClick}>
            Previous
          </Button>
          <Button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} color="red" pill onClick={this.handleNextClick}>
            Next
          </Button>
        </div>
      </>
    )
  }
}
