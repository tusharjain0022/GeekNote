import "./Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel_modified from "./CarouselModified";
import Carousel_data from "../../data/carouselData.json"
import first_image from './images/1st.jpg';
import second_image from './images/2nd.jpg';
import third_image from './images/3rd.jpg';

function Blog() {
  return (
    <>
        <Carousel_modified data={Carousel_data}/>
    </>

    
);
  
}
export default Blog;
