import React,{useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () =>   {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
<section className="home">
        <div className="secContainer container">
            <div className="homeText">
                <h1 data-aos="fade-up" className="title">
                    Plan Your Trip with 
                    Make My Trip
                </h1>
                <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                    Travel to your favourite city with respectful of the 
                    evironment!
                </p>
                <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                   <a href='#'>Explore</a> 
                </button>
            </div>

            <div className="homeCard grid">
                
                <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder='Destination' />
                </div>

                <div data-aos="fade-right" data-aos-duration="2500"  className="distDiv">
                    <label htmlFor="Distance">Distance</label>
                    <input type="text" placeholder='11/Meters' />
                </div>

                <div data-aos="fade-right" data-aos-duration="3000"  className="priceDiv">
                    <label htmlFor="Prices">Prices</label>
                    <input type="text" placeholder='RS5000-RS5000000' />
                </div>
                <button data-aos="fade-left" data-aos-duration="4000" className="btn">
                    Search
                </button>

            </div>

        </div>
</section>
    )
}

export default  Home