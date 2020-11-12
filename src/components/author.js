import React from 'react'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                        My life began in a very small rural town in Kentucky. The town was named Alexandria. We were one on those towns that had a main street with one drugstore, convenient store, gas station and one family doctor that still made house calls. I had three sisters of which I was the one in the middle.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Ginny</span>
                            <span>Worley</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;