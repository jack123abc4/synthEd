import React, { useState } from 'react';
import './resources.scss';
import { Box, Typography } from '@mui/material';

const Resources = () => {
  return (
    <div className='resource-hero'>
        <div className="left">
            <div className="wrapper">
                <h2>Looking for <span>more?</span></h2>
                <h1 className='text'>Check Out Our Resources</h1>
            </div>
        </div>
        <div className="right">
            <div className="imgContainer">
                <img src="/assets/recording.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Resources