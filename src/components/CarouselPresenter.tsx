import { Button, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import '../style/custom.css'
import React, { useState } from 'react'
import CarouselCard from './CarouselCard'
import CarouselCardProperties from '../interfaces/CarouselCardProperties'

interface CarouselProperties {
  carouselCards: Array<CarouselCardProperties>
}

const CarouselPresenter: React.FC<CarouselProperties> = ({ carouselCards }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        className="max-w-screen-xl rounded-3xl bg-white m-0 overflow-hidden"
      >
        {carouselCards.map((card) => {
          const backgroundColorTag = card.backgroundImage
            ? `bg-gradient-to-t to-transparent from-[${card.backgroundColor}]`
            : `bg-[${card.backgroundColor}]`

          return (
            <Carousel.Item
              key={card.title}
              className="p-0 rounded-3xl items-start content-start"
              interval={card.delay}
            >
              <div
                className={
                  'min-h-72 max-h-80 ' + card.backgroundImage &&
                  `bg-[${card.backgroundColor}]`
                }
              >
                {card.backgroundImage && (
                  <img src={card.backgroundImage} alt="card-highlight-1" />
                )}
              </div>
              <Carousel.Caption
                className={
                  'flex flex-col p-3 full-width gap-y-2 ' + backgroundColorTag
                }
              >
                <h3 className="text-sky-950 text-start text-base archivo-black">
                  {card.title}
                </h3>
                <p className="text-sky-950 text-start text-base">
                  {card.headline}
                </p>
                {!card.noButton && (
                  <Button className="cta">{card.buttonText}</Button>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          )
          // <CarouselCard
          //   title={card.title}
          //   headline={card.headline ?? undefined}
          //   noButton={card.noButton ?? undefined}
          //   buttonText={card.buttonText ?? undefined}
          //   link={card.link ?? undefined}
          //   backgroundColor={card.backgroundColor ?? undefined}
          //   backgroundImage={card.backgroundImage ?? undefined}
          //   delay={card.delay ?? undefined}
          // />
        })}
      </Carousel>
      <Row className="material-symbols-outlined w-full justify-center">
        <Button
          variant="primary"
          className="p-0 no-underline round small text-center"
          onClick={() => setIndex(index - 1)}
        >
          <span className="text-white text-2xl no-underline mx-0.5">
            arrow_left
          </span>
        </Button>
        <Button
          variant="primary"
          className="p-0 no-underline round small text-center"
        >
          <span className="text-white text-2xl no-underline mx-0.5">pause</span>
        </Button>
        <Button
          variant="primary"
          className="p-0 no-underline round small text-center"
          onClick={() => setIndex(index + 1)}
        >
          <span className="text-white text-2xl no-underline mx-0.5">
            arrow_right
          </span>
        </Button>
      </Row>
    </>
  )
}

export default CarouselPresenter
