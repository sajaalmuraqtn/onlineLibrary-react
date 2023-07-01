import React, { useContext } from 'react'
import '../AboutBook/AboutBookStyle.css'
import { Typography } from "antd";
import { BookContext } from '../Context/DataContext';


export default function AboutBook() {
    const { Paragraph } = Typography;
    let {aboutBook}=useContext(BookContext);
    // <AboutBook title={aboutBook.title} image={aboutBook.image} desc={aboutBook.desc} authors={aboutBook.authors} page={aboutBook.page}  />

    return (
      <div className="AboutBook">
        <div className="Book">
          <h3 className="title my-3">About the book</h3>
            <img
              src={aboutBook.image}
              alt="book"
              className="titleImg"
            />
         
          <span className="bookTitle">{aboutBook.title}</span>
          <span className="authorTitle">{aboutBook.authors}</span>
        </div>
        <div className="bookInfo">
          <div className="smallInfo">
            {
                aboutBook.page?
                <span>{aboutBook.page}</span>:
                <span>UnKnown</span>
            }
        
            <span className="authorTitle">pages</span>
          </div>
          |
          <div className="smallInfo">
              0
            <span className="authorTitle">reviews</span>
          </div>
          |
          <div className="smallInfo">
              0
            <span className="authorTitle">rating</span>
          </div>
        </div>
        {aboutBook.desc? (
        <div className="plot">
          <div className="divPlot">Plot</div>
          <Paragraph
            className="book-description"
            ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
          >
            {aboutBook.desc}
          </Paragraph>
        </div>
      ) : (
        ""
      )}
        <a href="https://www.google.com/">
          <button className="buy-book btn btn-primary mb-5">Buy</button>
        </a>
      </div>
    );
}
