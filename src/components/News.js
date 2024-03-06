import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
     
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Kyrsten Sinema: Independent senator won't run for re-election",
        "description": "The former Democrat from Arizona won't run for re-election, threatening the Senate's balance of power.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-68485991",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/178C6/production/_132845469_e8de985b5e22aa64f57a635f49916a5ffeda591b0_0_6000_33751000x563.jpg",
        "publishedAt": "2024-03-06T07:22:19.2051451Z",
        "content": "US Senator Kyrsten Sinema has announced she will not run for re-election in November, a blow for Democrats who narrowly control the Senate.\r\nShe said she had decided to leave the Senate \"because I ch… [+2158 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "The chilling sound that signalled death for IRA 'informers'",
        "description": "An inquiry into the \"dirty war\" between British intelligence and the IRA is due to report this week.",
        "url": "https://www.bbc.co.uk/news/uk-68424617",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8808/production/_132842843_grave.jpg",
        "publishedAt": "2024-03-06T07:22:18.0648039Z",
        "content": "Of all the sounds that still echo in my memory from 50 years of covering the conflict in Northern Ireland, one above all still haunts me. \r\nIt's not the sound of bombs and bullets but the banging of … [+8286 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Australian man charged after allegedly using cable ties to detain children",
        "description": "State officials say they are \"appalled\" by footage appearing to show two children tied up and crying.",
        "url": "https://www.bbc.co.uk/news/world-australia-68487304",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F284/production/_132848026_240306cabletiedkidsstill2v2.jpg",
        "publishedAt": "2024-03-06T07:22:16.5026949Z",
        "content": "A Western Australian man has been charged with aggravated assault after allegedly using cable ties to restrain three children.\r\nPolice said the man had detained the six-year-old girl and two boys age… [+1862 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Dinosaur-age 'nightmarish' sea lizard fossil found",
        "description": "Scientists believe the species hunted the oceans 66 million years ago with \"teeth like knives\".",
        "url": "https://www.bbc.co.uk/news/world-africa-68484296",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18302/production/_132847099_92a5119770022ebb4b2b708aaf48bbe43ca3ef6a.jpg",
        "publishedAt": "2024-03-06T06:22:21.8479416Z",
        "content": "Scientists say they have discovered fossils belonging to a \"nightmarish\" sea lizard species that hunted the oceans 66 million years ago.\r\nThe creature, Khinjaria acuta, was about 26ft (8m) long - the… [+2139 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Alberto Otárola: Peru PM resigns after recording with woman leaked",
        "description": "Alberto Otárola denies allegations he helped a woman gain lucrative government contracts.",
        "url": "https://www.bbc.co.uk/news/world-latin-america-68486544",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8FA6/production/_132847763_alberto.jpg",
        "publishedAt": "2024-03-06T05:52:14.6430693Z",
        "content": "Peru's Prime Minister Alberto Otárola has resigned over allegations he attempted to use his influence to help a woman gain lucrative government contracts.\r\nThe scandal escalated last week when a Peru… [+1966 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Key takeaways from Super Tuesday results",
        "description": "Donald Trump had a dominant night, but he was denied a clean sweep after Nikki Haley won Vermont's primary.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-68472310",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8253/production/_132836333_gettyimages-2054044517.jpg",
        "publishedAt": "2024-03-06T05:37:16.3309946Z",
        "content": "It may be called Super Tuesday, but the results have not exactly been laden with excitement.\r\nAfter US voters headed to the polls in 15 states and American Samoa, Donald Trump and Joe Biden remain on… [+5922 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Can the Panama Canal save itself?",
        "description": "The authority that runs the canal is looking at ways to conserve the water it needs to stay open.",
        "url": "https://www.bbc.co.uk/news/business-68467529",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AC84/production/_132846144_gettyimages-1696165706.jpg",
        "publishedAt": "2024-03-06T02:07:18.8150994Z",
        "content": "The most famous waterway in the Americas is running dry.\r\nUnlike the Suez Canal, the Panama Canal is fed by a freshwater lake, Lake Gatún, and its water level is falling critically low. \r\nAfter a cho… [+5951 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Canada faces lawsuit over military exports to Israel",
        "description": "Canada says the exports are \"non-lethal\", but critics argue they may still violate international law.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-68451085",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18104/production/_132846589_gettyimages-1237850583.jpg",
        "publishedAt": "2024-03-06T00:22:18.2531341Z",
        "content": "A group of Canadian lawyers is suing Canada's global affairs ministry for exporting military goods and technology to Israel during the Gaza conflict.\r\nThe attorneys argue the exports could be used in… [+3277 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Army to remove claim Kate to appear at Trooping the Colour from website",
        "description": "The Army's website said the princess would attend Trooping the Colour but royal sources have not confirmed.",
        "url": "https://www.bbc.co.uk/news/uk-68480184",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3600/production/_132842831_799807da3196ca67a04127ae5f925208055861a70_0_3500_23331000x667.jpg",
        "publishedAt": "2024-03-05T20:37:20.0191569Z",
        "content": "The Army will remove a claim made on its website that the Princess of Wales would be appearing at Trooping the Colour in June. \r\nThe claim had caused confusion after Kensington Palace said it had not… [+1607 chars]"
    },
 
    {
     
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "German patient vaccinated against Covid 217 times",
        "description": "Researchers have written up the unusual case in a medical journal.",
        "url": "https://www.bbc.co.uk/news/health-68477735",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AA0A/production/_131103534_54989d87ce8937557042dc64535ca31cc0924c8a.jpg",
        "publishedAt": "2024-03-05T19:07:16.0358328Z",
        "content": "A 62-year-old man from Germany has, against medical advice, been vaccinated 217 times against Covid, doctors report. \r\nThe bizarre case is documented in The Lancet Infectious Diseases journal. \r\nThe … [+2478 chars]"
    }
]
  constructor(){
    super()
    this.state = {
      articles: this.articles,
      loadinf: false
    }
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
