import React from 'react';
import List, { AndesListItem } from 'FuryLibrary/Andes/List';
import 'FuryLibrary/Andes/styles';

export const MfList = () => {

  return (
    <>
      <h2> Microfrontend List</h2>
      <List
        aria-label="Teléfonos"
        id="telefonos"
        selectable={false}
      >
        <AndesListItem
          primary="Iphone 11"
          secondary="256gb de memoria"
          tertiary="$1100"
        />
        <AndesListItem
          primary="Iphone 12 PRO MAX"
          secondary="256gb de memoria"
          tertiary="$1600"
        />
        <AndesListItem
          primary="Samsung Galaxy S20"
          tertiary="$1800"
        />
      </List>
      <div>------------------------------------------------------------------</div>
    </>
  );
};
