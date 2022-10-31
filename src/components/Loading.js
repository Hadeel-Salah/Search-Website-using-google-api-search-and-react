import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Loading = () => (
    <div className="flex justify-center items-center ">
        <Oval type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
);