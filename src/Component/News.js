import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "AGS Transact Tech IPO fully subscribed on second day of the issue. GMP, key details here - Mint",
      description:
        "AGS Transact Technologies IPO received 88% subscription on day 1 of its public offer that opened on Wednesday",
      url: "https://www.livemint.com/market/ipo/ags-transact-technologies-ipo-gmp-subscription-status-on-second-of-issue-11642653719731.html",
      urlToImage:
        "https://images.livemint.com/img/2022/01/20/600x338/AGS_Transact_Technologies_IPO_1642653801821_1642653802014.jpg",
      publishedAt: "2022-01-20T09:52:54Z",
      content:
        "The initial public offering (IPO) of payment solutions provider AGS Transact Technologies has been fully subscribed at 1.31x on the second day of the issue so far. The price range for the three-day s… [+1772 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Companies battle high costs, infra bottlenecks to meet Delhi's electric vehicle mandate - Moneycontrol",
      description:
        "The Delhi government has mandated that all ride aggregators and delivery services will have to switch to EVs when reinforcing their fleets. High costs, gaps in the supply chain and charging infrastructure loom as potential impediments in the effort aimed at r…",
      url: "https://www.moneycontrol.com/news/business/companies-battle-high-costs-infra-bottlenecks-to-meet-delhis-electric-vehicle-mandate-7963231.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/07/shutterstock_1365093302-770x433.jpg",
      publishedAt: "2022-01-20T09:27:59Z",
      content:
        "Online delivery companies are speeding up the process of switching from petrol- and diesel-powered bikes and vans to electric vehicles (EVs) to meet a three-month deadline set by the Delhi government… [+4315 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "ICICI Lombard Q3 earnings muted, but the stock is a long-term compounder - Moneycontrol.com",
      description:
        "ICICI Lombard’s premium valuation will sustain, given its market leading share in a secular growth sector, fairly diversified product mix, multi-channel distribution network, solid technological prowess, strong solvency profile, and healthy profitability",
      url: "https://www.moneycontrol.com/news/business/moneycontrol-research/icici-lombard-q3-earnings-muted-but-the-stock-is-a-long-term-compounder-7963081.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/12/insurance_lifeinsurance-770x433.jpg",
      publishedAt: "2022-01-20T09:07:20Z",
      content:
        "PRO Only Highlights- \r\n Quarterly performance largely backed by improved realisations- \r\n Medium-term triggers China plus and protectionist measures for tyre industry- \r\n Valuations not inexpensive; … [+542 chars]",
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Paarth Khatri",
      title: "Tata Motors increases prices of Punch micro-SUV - CarToq.com",
      description:
        "Tata Motors has increased the prices of some variants of the Punch whereas some prices of some variants have also been decreased. The price of all the variants except the Creative variant has been increased by Rs. 15,900. The Creative variant’s price has been…",
      url: "https://www.cartoq.com/tata-motors-increases-prices-of-punch-micro-suv/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2022/01/Punch-price-hike-featured.jpg",
      publishedAt: "2022-01-20T08:56:21Z",
      content:
        "Tata Motors has increased the prices of some variants of the Punch whereas some prices of some variants have also been decreased. The price of all the variants except the Creative variant has been in… [+2932 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "CESL launches tender for 5,500 electric buses in 5 cities - Moneycontrol",
      description:
        "CESL'S tender value is estimated to be Rs 5,500 crore and the first lot of e-buses are expected to hit the roads by July this year",
      url: "https://www.moneycontrol.com/news/business/cesl-launches-tender-for-5500-electric-buses-in-5-cities-7962541.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/11/JBM-Auto_electric-bus_EV-buses-770x433.jpg",
      publishedAt: "2022-01-20T08:55:59Z",
      content:
        "Convergence Energy Services (CESL), a wholly-owned subsidiary of Energy Efficiency Services (EESL), on January 20 announced a tender for 5,500 electric buses in five cities Delhi, Kolkata, Surat, Ben… [+3350 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "This Billionaire Industrialist Was Once An Aspiring Filmmaker. Any Guesses? - NDTV Profit",
      description:
        "He is a name to reckon with in the world of business today - but not many know that the Chairman of Mahindra Group once aspired to be a filmmaker.",
      url: "https://www.ndtv.com/offbeat/this-aspiring-filmmaker-is-now-a-billionaire-businessman-any-guesses-2719090",
      urlToImage:
        "https://c.ndtvimg.com/2022-01/a3no4ji_anand-mahindra-throwback_625x300_20_January_22.jpg",
      publishedAt: "2022-01-20T08:50:15Z",
      content:
        "Anand Mahindra in a throwback photo, taken near Indore.\r\nAnand Mahindra is a name to reckon with in the world of business today - but not many know that the Chairman of Mahindra Group once aspired to… [+3009 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "ReNew Power pairs up with US's Fluence over energy storage - Moneycontrol.com",
      description:
        "ReNew has already been working on stationary energy storage space through its intelligent energy solution portfolio",
      url: "https://www.moneycontrol.com/news/business/economy/renew-power-pairs-up-with-uss-fluence-over-energy-storage-7962761.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/12/Sumant-Sinha-Chairman-and-CEO-ReNew-Power-423x435.jpg",
      publishedAt: "2022-01-20T08:21:12Z",
      content:
        "Nasdaq-listed ReNew Power has entered into an agreement with US energy storage major Fluence to form a 50:50 joint venture in India, the companies said on Thursday in a release.\r\nReNew has already be… [+2430 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Market LIVE Updates: Indices at new intraday low, Sensex plunges 900 pts, Nifty below 17,700 - Moneycontrol.com",
      description:
        "Stock Market LIVE Updates: Except metal and power all other sectoral indices are trading in the red with IT and pharma indices down 1 percent each.",
      url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-january-20-latest-news-bse-nse-sensex-nifty-covid-coronavirus-hul-biocon-asian-paints-bajaj-finserv-havells-persistent-systems-larsen-toubro-infotech-baj-7960461.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/12/fandosensexniftyderivative-1-770x433.jpg",
      publishedAt: "2022-01-20T08:20:18Z",
      content:
        "January 20, 2022 / 02:10 PM IST\r\nNavneet Damani, VP - Commodity &amp; Currency Research, Motilal Oswal Financial Services on Gold:\r\nBullions started 2021 year with some buzz over vaccine reports from… [+921 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Asian Paints Q3 profit falls 18%; margins take a hit on higher input costs - Mint",
      description:
        "Asian Paints Q3 results: Revenue from operations, meanwhile rose 26% to  ₹8,527 crore for the reporting period",
      url: "https://www.livemint.com/companies/company-results/asian-paints-q3-net-profit-falls-18-to-rs-1-015-crore-11642666368220.html",
      urlToImage:
        "https://images.livemint.com/img/2022/01/20/600x338/asian_paints_1557394585498_1642666504958.jpg",
      publishedAt: "2022-01-20T08:16:05Z",
      content:
        "Asian Paints Ltd on Thursday reported a consolidated net profit of 1,015 crore for the December quarter, a fall of 18% from 1,238 crore reported in the same quarter last year.\r\nRevenue from operation… [+1628 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Hold Larsen and Toubro Infotech; target of Rs 6800: Emkay Global Financial - Moneycontrol.com",
      description:
        "Emkay Global Financial recommended hold rating on Larsen and Toubro Infotech with a target price of Rs 6800 in its research report dated January 20, 2022.",
      url: "https://www.moneycontrol.com/news/business/stocks/hold-larsen-and-toubro-infotech-target-of-rs-6800-emkay-global-financial-7962831.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2020/11/hold-1-770x433.jpg",
      publishedAt: "2022-01-20T08:10:48Z",
      content:
        "Emkay Global Financial's report on Larsen and Toubro Infotech\r\nLTIs Q3 operating performance beat our expectations. Revenues grew by 8.7% QoQ to USD553mn (9.2% CC), above our estimate. EBITM expanded… [+1984 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Business Desk",
      title:
        "Axis Bank Revises Fixed Deposit Rates for General Public; Check Latest FD Rates - News18",
      description:
        "Axis Bank has notified on its official website that the new rates of interest on fixed deposits will be applicable on deposits below Rs 2 crore",
      url: "https://www.news18.com/news/business/savings-and-investments/axis-bank-revises-fixed-deposit-rates-for-general-public-check-latest-fd-rates-4677914.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2021/09/axis-bank-1-163116588716x9.jpg",
      publishedAt: "2022-01-20T07:16:32Z",
      content:
        "Axis Bank Fixed Deposit Interest Rate: Leading private sector lender Axis Bank has announced major alterations on its fixed deposit (FD) interest rates for account holders who open such accounts. Thi… [+2953 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Apollo Hospitals shares edge higher as Jefferies retains 'buy', expects 29% upside - Moneycontrol.com",
      description:
        "The fall in the stock was on uncertainty around fundraising by the company. The current price is viewed as an enhanced entry point in the company, Jefferies said",
      url: "https://www.moneycontrol.com/news/business/stocks/apollo-hospitals-shares-edge-higher-as-jefferies-retains-buy-expects-29-upside-7961971.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2020/09/APOLLO-HOSPITALS-770x433.jpg",
      publishedAt: "2022-01-20T06:31:28Z",
      content:
        "Apollo Hospitals Enterprises share price jumped close to 4 percent intraday on January 20 after Jefferies maintained the 'buy' call on the stock.\r\nThe global research firm has retained its stand on t… [+1769 chars]",
    },
    {
      source: {
        id: null,
        name: "FXStreet",
      },
      author: "Dhwani Mehta",
      title:
        "Gold Price Forecast: XAU/USD keeps its sight on $1,850 bullish target – Confluence Detector - FXStreet",
      description:
        "Gold price briefly disconnected from the price action in the Treasury yields on Wednesday but has returned to its negative relationship with the US ra",
      url: "https://www.fxstreet.com/news/gold-price-forecast-xau-usd-keeps-its-sight-on-1-850-bullish-target-confluence-detector-202201200627",
      urlToImage:
        "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/stacked-gold-bars-13094022_Large.jpg",
      publishedAt: "2022-01-20T06:27:45Z",
      content:
        "Gold price briefly disconnected from the price action in the Treasury yields on Wednesday but has returned to its negative relationship with the US rates this Thursday. Gold price has stalled its ups… [+1690 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Pixis raises $100 million funding from SoftBank, others - Moneycontrol",
      description:
        "The Series C round also saw participation from new investor General Atlantic, and existing investors Celesta Capital, Premji Invest, and Chiratae Ventures, a statement said.",
      url: "https://www.moneycontrol.com/news/business/pixis-raises-100-million-funding-from-softbank-others-7962021.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2020/05/softbank_may18-770x433.jpg",
      publishedAt: "2022-01-20T06:23:11Z",
      content:
        "California-based technology company Pixis (formerly known as Pyxis One) on Thursday said it has raised USD 100 million (about Rs 743.8 crore) in funding, led by SoftBank Vision Fund 2.\r\nThe Series C … [+3073 chars]",
    },
    {
      source: {
        id: null,
        name: "BloombergQuint",
      },
      author: "Bharath Rajeswaran",
      title:
        "Tata Elxsi Jumps 15% In Two Days As Analysts Raise Price Targets - BloombergQuint",
      description:
        "Brokerages cite digital capabilities and deal wins as potential growth triggers for Tata Elxsi.",
      url: "https://www.bloombergquint.com/markets/tata-elxsi-jumps-15-in-two-days-as-analysts-raise-price-targets",
      urlToImage:
        "https://gumlet.assettype.com/bloombergquint%2F2022-01%2F83215ba7-3e3e-446f-b5ec-a3602d979197%2FTata_Elxsi_AI_software___Source_Company_website_.png?rect=0%2C21%2C667%2C350&w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2022-01-20T06:20:33Z",
      content:
        "The company reported a sequential rise in net profit and revenue in the quarter-ended December. Analysts cited presence in fast-growing verticals such as medical and healthcare businesses, strong dig… [+576 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "OneWeb, Hughes sign 6-year pact to provide satellite broadband services in India - Moneycontrol",
      description:
        "The services in India will be provided by Hughes and Bharti Airtel joint venture Hughes Communications India Private Ltd.",
      url: "https://www.moneycontrol.com/news/business/oneweb-hughes-sign-6-year-pact-to-provide-satellite-broadband-services-in-india-7961951.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2018/01/9-8-770x433.jpg",
      publishedAt: "2022-01-20T06:14:45Z",
      content:
        "Bharti Group-backed company OneWeb and satellite service provider Hughes Network Systems have signed a strategic six-year distribution agreement to provide satellite broadband services across India, … [+2169 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET CONTRIBUTORS",
      title:
        "LIC IPO may open the floodgates for new retail investors in stock market - Economic Times",
      description:
        "LIC should set an example for retail investment in the IPO allotment. Why cant all retail investors get an allotment in the share sale? Not only will it widen the stock market base, but it will also give Indian individuals a chance to directly own a stake in …",
      url: "https://economictimes.indiatimes.com/markets/ipos/fpos/will-retail-frenzy-around-lic-ipo-create-new-equity-investing-culture-in-india/articleshow/89011226.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-89011812,width-1070,height-580,imgsize-26220,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-01-20T06:12:00Z",
      content:
        "The buzz around the disinvestment of the insurance behemoth, Life Insurance Corporation (LIC), is getting louder with every passing day. All eyes are peeled for the timelines of the LIC initial publi… [+5841 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "SI Reporter",
      title:
        "Mastek tumbles 15% on muted numbers for the December quarter - Business Standard",
      description:
        "Despite a 25% correction from its 52-week high level, Mastek has outperformed the market in the past one year by surging 147 per cent, as against a 20 per cent rise in the Sensex.",
      url: "https://www.business-standard.com/article/markets/mastek-tumbles-15-on-muted-numbers-for-the-december-quarter-122012000437_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2014-01/23/full/1390486101-9138.jpg",
      publishedAt: "2022-01-20T06:11:00Z",
      content:
        "Shares of Mastek tumbled 15 per cent to Rs 2,750 on the BSE in Thursday’s intra-day trade after the IT company reported muted earnings for the October-December quarter. Mastek's Q3 revenue grew 3.7 p… [+2666 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Zydus gets final USFDA nod to market generic version of Vigabatrin tablets - Moneycontrol",
      description:
        "The approval by the US Food and Drug Administration is for Vigabatrin tablets of 500 mg strength, Cadila Healthcare said in a regulatory filing.",
      url: "https://www.moneycontrol.com/news/business/zydus-gets-final-usfda-nod-to-market-generic-version-of-vigabatrin-tablets-7961961.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/11/Pharmacy-770x433.jpg",
      publishedAt: "2022-01-20T06:09:11Z",
      content:
        "Cadila Healthcare Ltd on Thursday said group firm Zydus has received final approval from the US health regulator to market its generic version of Vigabatrin tablets to treat babies with infantile spa… [+945 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "TCS share price falls over 1% on Record date; ICICI Securities bullish on stock, maintains Buy call - The Financial Express",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMikQFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9tYXJrZXQvdGNzLXNoYXJlLXByaWNlLWZhbGxzLW92ZXItMS1vbi1yZWNvcmQtZGF0ZS1pY2ljaS1zZWN1cml0aWVzLWJ1bGxpc2gtb24tc3RvY2stbWFpbnRhaW5zLWJ1eS1jYWxsLzI0MTEyMTYv0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-01-20T06:03:43Z",
      content: null,
    },
  ];
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1
    };
    document.title=`${this.props.category}-NewsBaby`;
  }
  async Update(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1e06358a83c943b0be21edd6b4032063&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);

    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
   
  }

  async componentDidMount() {
    this.Update();
  }

  handlePrev = async () => {
       
    this.setState({page:this.state.page-1});
    this.Update();
  };

  handleNext = async () => {
    
    this.setState({page:this.state.page+1});
    this.Update();
  };
  

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Newsbaby-Top Headlines</h1>

        <div className="row ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={!element ? "" : element.title.slice(0, 45)}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="conatiner d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            {" "}
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >= Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
