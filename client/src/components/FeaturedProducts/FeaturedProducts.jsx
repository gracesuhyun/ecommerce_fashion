import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1675875053102-bc894884c564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            img2: "https://images.unsplash.com/photo-1675215452934-ab9954f0aa78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            title: "White V-Neck Long Dress",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title: "Short Sleeved Knit",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price: 12,
        },
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>
                {type} products
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis est ligula. 
            Praesent lacus nulla, sodales sit amet malesuada eget, faucibus eu neque. Sed et 
            leo at nulla tempus elementum. Nullam sed sapien consequat, mollis dui non, venenatis 
            tellus.
            </p>
        </div>

        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts