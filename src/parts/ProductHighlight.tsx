import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import BurgerMenu from './BurgerMenu'
import CarouselPresenter from '../components/CarouselPresenter'

interface ProductHighlightProperties {
  specialOffer?: string
  specialOfferLink?: string
}

const ProductHighlight: React.FC<ProductHighlightProperties> = ({
  specialOffer,
  specialOfferLink,
}) => {
  return (
    <div className="px-8 py-4">
      <CarouselPresenter />
    </div>
  )
}

export default ProductHighlight
