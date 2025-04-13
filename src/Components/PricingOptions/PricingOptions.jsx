import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);

    console.log(pricingData);

    return (
        <div className='mx-10 lg:mx-13'>
            <h1 className='text-3xl md:text-5xl mb-3 mt-3'>Get Our Membership</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    pricingData.map(pricing =>
                    <PricingCard key={pricing.id} 
                    pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;