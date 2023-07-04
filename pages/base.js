import React from 'react';
import { Text } from '../components/user/Text';
import { Editor, Element, Frame } from '@craftjs/core';

export default function App() {
  return (
    <Editor resolver={{Text}}>
      <Frame>
        <Element is="div" style={{margin: "0 auto", width: "800px"}} canvas>
          <div>
            Here!
          </div>
          <Text text={"text"} fontSize={10} />
        </Element>
      </Frame>
    </Editor>
  );
}