/*eslint-disable*/
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';


const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'We believe in growth ours and our clients',
    src: require("assets/img/A2.jpg")
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'We move agricultral products where they are needed. anywhere and every. Internationally and locally',
    src: require("assets/img/A16.jpg")
  },
  {
    id: 3,
    altText: 'Delivery',
    caption: 'we ensure quality in product processing and timely delivery',
    src: require("assets/img/A15.jpg")
  },
  {
    id: 4,
    altText: 'Slide 4',
    caption: 'We only source for the best product anywhere in the world.',
    src: require("assets/img/A6.jpg")
  }
];

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} width="1400" min-heigth='800' object-fit='cover' />
        <CarouselCaption className="custom-cap" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="page-header-small clear-filter" filter-color="orange">
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
              object-fit:cover;
            }
            .custom-cap {
              padding: 0:
              margin: 0:
              height: 1500px;
              background: rgba(122, 122,  4, 0.4);
              object-fit:cover;
            }
            
            `
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

//   return (
//     <>
//       <div className="page-header clear-filter" filter-color="blue">
//         <div
//           className="page-header-image"
//           style={{
//             backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
//           }}
//           ref={pageHeader}
//         ></div>
//         <Container>
          
//         </Container>
//       </div>
//     </>
//   );
// }

export default IndexHeader;
