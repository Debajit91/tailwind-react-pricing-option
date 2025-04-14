import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);

    

    return (
        <div className='mx-10 lg:mx-13'>
            <h1 className='text-3xl md:text-5xl mb-3 mt-3'>
                Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* {
                    pricingData.map(pricing =>
                    <PricingCard key={pricing.id} 
                    pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DaisyPricingCard 
                        key={pricing.id}
                        pricing={pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;