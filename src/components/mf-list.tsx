import React from 'react';
// @ts-ignore
import List, { AndesListItem } from 'FuryLibrary/Andes/List';
import 'FuryLibrary/Andes/styles';

const MfList = ({items, title}) => {

  return (
    <div  style={{
        padding: '20px',
        border: '1px solid #ccc',
        margin: '10px 0'
    }}>
      <h2 style={{
          padding: '10px 0'
      }}> { title } </h2>
      <List
          style={{
              maxWidth: '100%'
          }}
        aria-label="Systems"
        id="systems"
        selectable={false}
      >
          {items?.map((item, index) => {
              return (<AndesListItem
                  primary={item.title}
                  secondary={item.description}
                  tertiary={item.status}
                  key={index}
              />)
          })}
      </List>
    </div>
  );
};

export default MfList
