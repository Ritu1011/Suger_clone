import { Footer } from "./Footer/Footer"
import { Navbar } from "./Navbar"
import { Category} from "./Category"
import * as slide from "./Slider"
import "./Homepage.css"
const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Category/>
      <div className="body-div">
     <slide.Slider1/>
     <div >
      <h1 className="h1-tag-div">REFER YOUR FRIENDS</h1>
      </div>
     <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg" alt="sugar.png" style={{width:"100%"}}/>
     <div >
      <h1 className="h1-tag-div" >METTLE PRIMING BALM</h1>
      </div>
    
     <iframe width="1230" height="452" src="https://www.youtube.com/embed/_TTJmiTiiOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <div >
      <h1 className="h1-tag-div">QUICK BEAUTY TIPS WITH SUGAR</h1>
      </div>
     <slide.Slider2/>
     <div >
      <h1 className="h1-tag-div" >HOT DEALS</h1>
      </div>
     <div className="hot-deals">
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/b6b3cb0a-2e6f-4fe9-99cc-ae327336040a.jpg"/>
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5273604b-7d68-4815-823e-7c9d9cc5f6e4.jpg"/>
        <img className="hot-deal-image" src="https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg"/>
     </div>
     <div >
      <h1 className="h1-tag-div" >ULTIMATE MAKEUP QUIZ</h1>
      </div>
     <img src="https://d32baadbbpueqt.cloudfront.net/55b14ff1-ff6e-4af7-bbb6-9dbe8771037f.jpg" alt="ultimate.png"/>

     <div >
      <h1 className="h1-tag-div" >TOP PICKS OF THE WEEK</h1>
      </div>

     <div className="hot-deals">
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/dd4d4e8a-b7e3-485e-8a8c-059f5ccab057.jpg"/>
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/18ec06e5-4071-4a84-ba25-3e46632b6de0.jpg"/>
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg"/>
     </div>

     <div ><h1 className="h1-tag-div" >THIS OR THAT</h1></div>

     <div className="this-that">
        <img className="this-that-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/2dfd09b7-d15c-4d7d-a2e3-fc2c2a7cbc0d.jpg"/>
        <img className="this-that-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1edc12f3-1ea2-46c3-a54e-57890e6a3bf9.png"/>
        
     </div>



     <div ><h1 className="h1-tag-div" >SUGAR BEAUTY BLOG</h1></div>

     
     <div className="hot-deals">
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3d719924-5511-4ebb-b31f-dc3fabbe4cb1.jpg"/>
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/4570aaa9-52a7-4082-8d59-d2c1d298cdc8.jpg"/>
        <img className="hot-deal-image" src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/6095fb33-4d09-4a55-8ceb-395a0818420c.jpg"/>
     </div>
     

      <div ><h1 className="h1-tag-div" >EXPLORE</h1></div>

     
     


      </div>
     <Footer/>
      </>
  )
}

export default HomePage
