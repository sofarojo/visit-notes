import React from 'react';
import Wrapper from '../../hoc/Wrapper';

const layout = ( props ) => {
  return (
    <Wrapper>
      <div>Menu and navigation area</div>
      <main>
        { props.children } 
      </main>
     </Wrapper>
  );
}

export default layout;