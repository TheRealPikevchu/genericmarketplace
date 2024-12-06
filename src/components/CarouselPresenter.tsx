import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import '../style/custom.css'

function CarouselPresenter() {
  return (
    <Carousel className="max-w-screen-xl rounded-3xl bg-white m-0 overflow-hidden">
      <Carousel.Item className="p-0 rounded-3xl items-start content-start">
        {/*interval={5000} */}
        <div className="min-h-72 max-h-80">
          <img src={'../assets/highlight1.jpg'} alt="card-highlight-1" />
        </div>
        <Carousel.Caption className="flex flex-col p-3 bg-gradient-to-t from-[#fac584] to-transparent full-width gap-y-2">
          <h3 className="text-sky-950 text-start text-base archivo-black">
            Amazing product just for you !
          </h3>
          <p className="text-sky-950 text-start text-base">
            Check out this really good product we selected with care just for
            you.
          </p>
          <Button className="cta">View product</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselPresenter
