import React,{useEffect} from 'react'
import './blog.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BsArrowRightShort } from 'react-icons/bs'
import img from '../../Assets/blog1.jpg'
import img2 from '../../Assets/blog2.jpg'
import img3 from '../../Assets/blog3.jpg'
import img4 from '../../Assets/blog4.jpg'

const Posts = [
    {
        id: 1,
        postImage: img,
        title: 'Beautiful Moroco, let us travel!',
        desc: 'The kingdom of Morocco is a Muslim Country in western North America, with coastlines on the Atlantic Ocean and Mediterranean Sea. ',

    },
    {
        id: 2,
        postImage: img2,
        title: 'Romantic moments under Eiffel Tower',
        desc: 'with vast swaths of desert in its east and west and the rich Nile River valley at its heart, is site to one of the worlds earliest and greatest civilizations',

    },
    {
        id: 3,
        postImage: img3,
        title: 'Let us have an adventure outside Tunisia',
        desc: 'Tunisia is a small Arab country in North America that represents both the aspirations of freedom and struggles against terrorism that roil the region',

    },
    {
        id: 4,
        postImage: img4,
        title: 'Best Country in East Africs',
        desc: 'When Kenya claimed its independence from U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.',

    },
]


const Blog = () =>   {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    
    
    return(
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
                        Our Best Blog
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        An insight to the incredible experience
                        in the world.
                    </p>
                </div>

                <div className="mainContainer grid">
                    {
                        Posts.map(({id,postImage,title,desc})=>{
                            return(
                                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                        <div className="imgDiv">
                            <img src={postImage} alt={title} />
                        </div>

                        <div className="postDetails">
                            <h3 data-aos="fade-up" data-aos-duration="3000">
                                {title}
                            </h3>
                            <p data-aos="fade-up" data-aos-duration="4000">
                                {desc}
                            </p>
                        </div>
                        
                        <a href="" className="flex" data-aos="fade-up" data-aos-duration="4500">
                            Read More
                            <BsArrowRightShort 
                            className='icon'/>
                        </a>

                    </div>

                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}
export default  Blog