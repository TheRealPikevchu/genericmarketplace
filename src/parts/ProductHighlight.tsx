import React from 'react'
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
      <CarouselPresenter
        carouselCards={[
          {
            title: 'Welcome to GenericMarketplace.com !',
            headline: 'The number one shopping website just for you.',
            backgroundColor: '#f97316',
            noButton: true,
            delay: 5000,
          },
          {
            title: 'Amazing product just for you!',
            headline:
              'Check out this really good product we selected with care just for you.',
            backgroundColor: '#fac584',
            backgroundImage: '../assets/highlight1.jpg',
            buttonText: 'View product',
            delay: 5000,
          },
          {
            title: 'Check out this flash offer!',
            headline: 'Get ready for christmas with this super dupper sale.',
            backgroundColor: '#fac584',
            backgroundImage: '../assets/highlight1.jpg',
            buttonText: 'View offer',
            delay: 5000,
          },
        ]}
      />
    </div>
  )
}

export default ProductHighlight
