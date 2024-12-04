import React from 'react'

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
        <div id="MainMenu" className="flex flex-col pb-3">
          <div
            id="TopSection"
            className="flex flex-row items-center justify-around py-3 px-4"
          >
            <span className="material-symbols-outlined">menu</span>
            <div id="Title" className="flex flex-row items-center">
              <img src={'../assets/logo__small.png'} alt="logo" />
              <p className="archivo-black text-xs">GenericMarketplace</p>
            </div>
            <div
              id="UserMenu"
              className="flex flex-row material-symbols-outlined text-3xl"
            >
              <span className="mx-0.5">chat_bubble</span>
              <span className="mx-0.5">person</span>
              <span className="mx-0.5">shopping_cart</span>
            </div>
          </div>
          <input
            type="search"
            id="search-product-input"
            placeholder="search for an item..."
          ></input>
        </div>
      </div>
    </div>
  )
}

export default Header
