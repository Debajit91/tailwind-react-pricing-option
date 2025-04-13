import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {title, price, description, features} = pricing;

    return (
        <div className='flex flex-col border rounded-2xl bg-amber-600 p-4'>
            {/* Card Head */}
            <div className='mb-5'>
            <h1 className="lg:text-7xl text-4xl">{title}</h1>
            <h4 className="text-3xl">{price}</h4>
            </div>
            {/* Card Body */}
            <div className='flex-1 bg-amber-300 text-amber-950 p-3 rounded-xl mb-3'>
                <p>{description}</p>
                
                <p className='font-bold text-lg mt-2'>Features:</p>
                {features.map((feature, index) =>
                    <PricingFeatures 
                    key={index}
                    feature={feature}></PricingFeatures>)}               
            </div>
            <button className="btn w-full rounded-xl">Subscribe</button>
        </div>
    );
};

export default PricingCard;