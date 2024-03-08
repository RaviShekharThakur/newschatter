import React, { Component } from 'react'
import NewsItem from './NewsItem'
import  Spinner  from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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


  capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  constructor(props){
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Chatter` 
  }

  async updateNewsPage(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9ea2413ccbe44ef80c96819ab1857d3&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(60)
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults, 
      loading: false,
      page: 2
    })
    this.props.setProgress(100)
  }
  async componentDidMount(){
    this.updateNewsPage()
  }

  fetchMoreData = async() => {
    this.setState({page: this.state.page +1})
    console.log(this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9ea2413ccbe44ef80c96819ab1857d3&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults, 
      loading: false
    })
  };

  render() {
    return (
      <>
        <div className="container mx-auto p-4">
          <h1 className='text-center text-3xl font-bold mb-20 text-blue-900'>News Chatter- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {this.state.articles.map((element, index)=>{
                  return <NewsItem key={`${element.url}-${index}`} title= {element.title} description= {element.description} imageurl= {element.urlToImage} newsurl= {element.url} author= {element.author} date= {element.publishedAt} source= {element.source.name}/>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
