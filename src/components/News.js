import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        this is news
        <NewsItem title= 'mytitle' description= 'mydescriotion' url=  "https://www.engadget.com/the-morning-after-switch-emulator-creators-settle-lawsuit-with-nintendo-for-24-million-121645766.html"/>
      </div>
    )
  }
}
