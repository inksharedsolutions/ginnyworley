import React from 'react'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                            For a large part of her life, Ginny C. Worley struggled. Her life has been filled with a great deal of abuse and neglect. After years of fighting for her self-worth and very survival, she broke under the pressure.
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