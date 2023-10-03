import React from 'react';
import { useEffect } from 'react';
import ButtonTest from '../component/ButtonTest';

const Test = () => {
    useEffect(()=>{
        document.title = 'Test | Toan DEV';
    });
  return (
    <div>
        <ButtonTest/>
    </div>
  )
}

export default Test