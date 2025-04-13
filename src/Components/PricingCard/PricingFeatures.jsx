import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <div>
            <p className='flex gap-3 mb-3'><CircleCheckBig/>{feature}</p>
        </div>
    );
};

export default PricingFeatures;