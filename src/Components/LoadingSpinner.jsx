import React from 'react';

const LoadingSpinner = ({count = 6}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-emerald-50  '>
         {Array.from({length:count}).map((_,i)=>(   <div key={i} className="flex w-10/12 mx-auto my-10  flex-col gap-6">
  <div className="skeleton h-50 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>))}
        </div>
    );
};

export default LoadingSpinner;