import React from "react";
import product1 from "../assets/product.jpeg";
import product2 from "../assets/product.jpeg";

const ServiceItem = ({ image, description, price, ratings, purchaseLink }) => {
  return (
    <div id="product-card" className="m-auto flex flex-col gap-3">
      <img
        src={image}
        alt="Product"
        className="h-[363px] w-[277px] rounded-2xl"
      />
      <p id="product-description" className="text-sm mb w-[250px]" dangerouslySetInnerHTML={{ __html: description }}>
      </p>
      <p className="text-sm">₹{price}</p>
      <button
        id="purchase-button"
        onClick={() => (window.location.href = purchaseLink)}
        className="w-full px-4 py-2 text-xl text-black bg-white rounded-3xl border-2 border-black hover:text-white hover:bg-[#2E7E36] transition duration-200 ease-in-out"
      >
        Buy Now
      </button>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      image: product1,
      description: `Bamboo Toothbrush Standard Adult <br> (Pack of 1)`,
      price: 149,
      purchaseLink: 'https://buy.stripe.com/test_8wMaGMbQweiL5A4bIL',
    },
    {
      image: product2,
      description: `Bamboo Toothbrush Standard Adult <br> (Pack of 2)`,
      price: 149,
      purchaseLink: `https://buy.stripe.com/test_8wMaGMbQweiL5A4bIL`,
    },
    {
      image: "https://img.freepik.com/free-photo/natural-products-green-background_23-2149413924.jpg?w=740&t=st=1708127555~exp=1708128155~hmac=5d9d03408947141b7df7f4e7b679d47dececce532d73b42001d7b7bade43ee77",
      description: `Bamboo Toothbrush Standard Adult <br> (Pack of 3)`,
      price: 199,
      purchaseLink: `https://buy.stripe.com/test_4gw6qwg6M5MfbYs9AE`,
    },
    {
      image: "https://img.freepik.com/free-photo/assortment-with-toothbrush-container_23-2148743101.jpg?w=740&t=st=1708127850~exp=1708128450~hmac=94ff1f5180ded1615ffcc5cfb60114aacff6493396441dca22e8d556ad393972",
      description: `Bamboo Toothbrush Standard Adult <br> (Pack of 4)`,
      price: 199,
      purchaseLink: `https://buy.stripe.com/test_4gw6qwg6M5MfbYs9AE`,
    },
  ];

  return (
    <div  id="shop">
      <h1 className="">PRODUCT GALLERY</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 my-20">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            image={service.image}
            description={service.description}
            price={service.price}
            purchaseLink={service.purchaseLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;