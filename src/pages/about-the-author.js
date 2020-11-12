import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.jpg'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                  “The lives of those souls who have suffered at the hands of abuse are a long and arduous journey along a path of utter darkness.”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                                <p>
                                For a large part of her life, Ginny C. Worley struggled. Her life has been filled with a great deal of abuse and neglect. After years of fighting for her self-worth and very survival, she broke under the pressure. The hope that her life would improve was gone. Somehow though she managed to hang on, with help through therapeutic writing. Thoughts and feelings emerged from her soul, expressing themselves through her poetry. Her healing had begun through these very expressions. Ginny found that by searching deep within herself, she had the inner strength needed to not only crawl out of her pit of despair but to brush herself off and walk away. She is a survivor who did not allow herself to be pulled under. It is her great hope that Poems from the Edge might be of help and comfort to another who finds herself in this horrible place of mind and soul.
                                </p>

                                <p>
                                A native of Alexandria, Kentucky, Ginny is a disabled Air Force veteran who is mother to three beloved children: Chris A. Worley II, Chad M. Worley, and Angela J. Parry. Her interests involve the arts, including poetry, photography, and jewelry making. A strong believer in self-improvement and self-worth, Ginny spends time mentoring others in need. 
                                </p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Ginny Worley</span>
                                </span>
                    
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;