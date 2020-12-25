import { Carousel } from "react-responsive-carousel";
import CarouselCard from "../CarouselCard";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
// import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";



const CarouselModified = (props) => {

  let categroisedData = props.data;

  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
  });

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(25%)",
    width: 30,
    height: 30,
    cursor: "pointer",
    background: "#fff",
    color: "#000000",
  };

  // const indicatorStyles = {
  //   background: "#fff",
  //   width: 8,
  //   height: 8,
  //   display: "inline-block",
  //   margin: "0 8px",
  //   color: "blue",
  // };

  return (
    <>
      <Carousel
        {...getConfigurableProps()}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              {/* <NavigateBeforeOutlinedIcon /> */}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              {/* <NavigateNextOutlinedIcon /> */}
            </button>
          )
        }
      >
        {categroisedData.map((groupedItem, index) => {
          return (
            <div className="carousel-slider " key={index}>
              <CarouselCard data={groupedItem} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselModified;
