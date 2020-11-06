import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'


const ATB = (props)=>{

  const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'ginny-worley',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                spanFirst={`About The`}
                contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Poems from the edge`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                        The lives of those souls who have suffered at the hands of abuse are a long and arduous journey along a path of utter darkness. If not careful, their walks along the precipice of despair can drop them into the very bowels of insanity and the edge of life and death. Where is the light needed to find the path back from the brink? How does one face down the demons sitting in wait at the borders?  
                                        </p> 

                                        <p>
                                        Ginny C. Worley has walked these bleak borders and survived. She tells her tale of victim to victor in Poems from the Edge, a stark and revealing poetic voyage through pain and anger turned inward. The torments of the mind and soul are revealed and explored in sharp detail and then, with courage and faith, brought together again as a whole. 
                                        </p>

                                        <p>
                                        Poems from the Edge encourages readers to tighten their grasp and hold on. When darkness is all around, and fear, hopelessness, and intense pain are all around, don’t give up. Ginny knows the strength needed to maintain is inside you. Never lose sight that as long as you are able to draw a breath, there is hope. 
                                        </p>
                                        <p>
                                        For a large part of her life, Ginny C. Worley struggled. Her life has been filled with a great deal of abuse and neglect. After years of fighting for her self-worth and very survival, she broke under the pressure. The hope that her life would improve was gone. Somehow though she managed to hang on, with help through therapeutic writing. Thoughts and feelings emerged from her soul, expressing themselves through her poetry. Her healing had begun through these very expressions. Ginny found that by searching deep within herself, she had the inner strength needed to not only crawl out of her pit of despair but to brush herself off and walk away. She is a survivor who did not allow herself to be pulled under. It is her great hope that Poems from the Edge might be of help and comfort to another who finds herself in this horrible place of mind and soul.  
                                        </p>
                                        
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/poems-from-the-edge/',
                                        barnes:'https://www.barnesandnoble.com/w/poems-from-the-edge-ginny-c-worley/1017867234?ean=9781643459325',
                                        amazon:'https://www.amazon.com/dp/B085KMGNGX/ref=sr_1_1?keywords=9781643459325&qid=1583539793&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/dp/1643459317/ref=sr_1_1?keywords=9781643459318&qid=1583539806&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/poems-from-the-edge-ginny-c-worley/1017867234?ean=9781643459318',
                                        booksamillion:'https://www.booksamillion.com/p/Poems-From-Edge/Ginny-Worley/9781643459318?id=8043859463603&_ga=2.260865933.1872859816.1604643814-131468970.1604385963',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;