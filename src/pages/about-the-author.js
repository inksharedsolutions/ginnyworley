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
                                My life began in a very small rural town in Kentucky. The town was name Alexandria. We were one on those towns that had a main street with one drugstore, convenient store, gas station and one family doctor that still made house calls. I had three sister of which I was the one in the middle. My father was quite Irish. Which came along with it a very surly most of the time angy attitude. Which did not go well with being mixed with alcohol. My mother had a great deal of native American Indian blood in her. The tribe being Cherokee. She was ok most days. But, at times was a bit moody. Anyway, I mostly identify with the Native American side. I was quite proud of my heritage. I believer that is why I feel so at home with nature and the creatures therein. As a child and even now I just love to take my dog and we would just love to roam through the woods and follow the trails. I felt at home there. My don't name was Snoopy and for most of my childhood he was my friend. When it came to my schooling. I went a rural grade school and county high school. When it came to high school, it was called the Campbell County camels. I was an average student. I really enjoyed sports mainly. I ran track and was competive swimmer. I did quite well in that area. I finally graduated from high school in 1975. At 18 years old I was now faced with determination my own future. Where would I go, what would I do. Things weren't even an option. The economy was rather poor so jobs were scarce. There was college. But, little money to pay for tuition. There was possible living on the streets. Not an option, no way! I could look at the alternative of joingin the military and serve my country. I took the testing and did rather well. I was then asked to join the United States Air Force. Basic training and techinical school were very difficult and challenging. But I succeeded and actually did quite well! I think I found my place. A place where I felt I fit in. I was in the USAF for about 7 years. I did quite well and made rank fast. My career was as a Flight Surgeon Medic. During that time, I married and had 3 children. There names Christopher, Angela and Chad. They meant everything to me and I just wanted to love them and keep them safe. Additionally, I had several pets mostly dogs. They all held a very special place in my heart. However, after I left the service, I divorced a very abusive husband. From then on, my family and I would go through mnay difficult hardships. I was able to pull myself together just enough to attend and graduate with a Bachelor of Science in Nursing. But the hardshops continued and I struggled. There were a lot of things going on beyond my control. After graduating I practiced nursing for a few years. I struggled with many things for years and I finally broke. I spend few years off and on In the Veterans Hospital, I strggled, I started putting some of my thoughts down on paper. I just kept writing. My writing began leading me down a path. A path toward healing. I continued to write, learn and share with others. I wanted to lead them down that path as well. I hoped that through my peoms they would relate and hopefully find that path to healing too.
                                </p>

                                <p>
                                Important message: Envision your journey. Let that light illuminate your path. Constantly move toward it. Do not give up. For you will make it. You are a survivor.
                                </p>
                                
                                <p>
                                    I have many activities that I enjoy. I really like to take photos of nature and the antics of my dog, Enstein. I really love all of beauties of nature. From a simple flower to a majestic mountain. Without question I love hiking. This could be by myself or with my dog, Einstein. I also like to craft jewelry out of beads. Most importantly I hope to reach those in need with my writings.
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