import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import '../style/custom.css'
import CarouselCardProperties from '../interfaces/CarouselCardProperties'

const CarouselCard: React.FC<CarouselCardProperties> = ({
  title,
  headline,
  noButton,
  buttonText,
  link,
  backgroundColor = '#f97316',
  backgroundImage,
  delay,
}) => {
  // map button onclick to link route
  const backgroundColorTag = backgroundImage
    ? `bg-gradient-to-t to-transparent from-[${backgroundColor}]`
    : `bg-[${backgroundColor}]`
  return (
    <Carousel.Item
      className="p-0 rounded-3xl items-start content-start"
      interval={delay}
    >
      <div
        className={
          'min-h-72 max-h-80 ' + backgroundImage && `bg-[${backgroundColor}]`
        }
      >
        {backgroundImage && (
          <img src={backgroundImage} alt="card-highlight-1" />
        )}
      </div>
      <Carousel.Caption
        className={'flex flex-col p-3 full-width gap-y-2 ' + backgroundColorTag}
      >
        <h3 className="text-sky-950 text-start text-base archivo-black">
          {title}
        </h3>
        <p className="text-sky-950 text-start text-base">[{headline}]</p>
        {!noButton && <Button className="cta">{buttonText}</Button>}
      </Carousel.Caption>
    </Carousel.Item>
  )
}

export default CarouselCard
