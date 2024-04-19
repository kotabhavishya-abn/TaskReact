import React from 'react';

function Button(props) {
  const { children, style, onClick } = props;
  return (
    <button style={style ? style : {background: 'red', color: '#fff'}} onClick={onClick}>{children}</button>
  );
}

export default Button;
