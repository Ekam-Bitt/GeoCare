import React from 'react'
import hero from "../assets/hero.png";
import ListingItem from '../components/ListingItem';

export default function Home() {
  return (
    <div>
      <img src={hero} alt="hero" width="100%" />
      <ListingItem/>
    </div>
  )
}
