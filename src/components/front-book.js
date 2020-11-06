import React from 'react'
import {Link} from 'gatsby'
import FrontBook from '../../static/books/Book_Cover.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                                The lives of those souls who have suffered at the hands of abuse are a long and arduous journey along a path of utter darkness. If not careful, their walks along the precipice of despair can drop them into the very bowels of insanity and the edge of life and death. Where is the light needed to find the path back from the brink? How does one face down the demons sitting in wait at the borders? 
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook