import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import BurgerMenu from './BurgerMenu'

interface HeaderProperties {
  specialOffer?: string
  specialOfferLink?: string
}

const Header: React.FC<HeaderProperties> = ({
  specialOffer,
  specialOfferLink,
}) => {
  return (
    <div id="Header" className="flex flex-col items-center">
      {specialOffer && (
        <div
          id="SpecialOffer"
          className="flex flex-col py-1.5 w-full bg-sky-950"
        >
          <p className="text-center text-white text-sm font-thin">
            {specialOffer}{' '}
            <a className="underline text-orange-500" href={specialOfferLink}>
              here
            </a>
            .
          </p>
        </div>
      )}
      <div
        id="NavigationMenu"
        className="md:hidden flex flex-col w-full bg-orange-500"
      >
        <div id="MainMenu" className="flex flex-col pb-3 text-sky-950">
          <div
            id="TopSection"
            className="flex flex-row items-center justify-around w-full"
          >
            <BurgerMenu />
          </div>
          <InputGroup size="sm" className="px-8">
            <Form.Control
              placeholder="search for an item..."
              aria-label="search for an item..."
              aria-describedby="basic-addon1"
              className="text-sky-950"
            />
            <Button
              variant="outline-primary"
              id="button-addon1"
              className="border-sky-950 bg-white"
            >
              <span className="material-symbols-outlined text-sm text-sky-950">
                search
              </span>
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}

export default Header
