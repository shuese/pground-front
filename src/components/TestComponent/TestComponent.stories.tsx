import React from 'react';

export default { title: 'Button' };

export const withText = () => <div>Hello Button</div>;

export const withEmoji = () => (

   <span role="img" aria-label="so cool">
      😀 😎 👍 💯
   </span>

);