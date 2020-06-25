import "./KanaDisplay.scss";

import React from "react";
import { Text } from "@fluentui/react-northstar";

const KanaDisplay = (props) => {
  console.log(`props: ${JSON.stringify(props)}`);

  return (
    <div className='KanaDisplay'>
      <Text size='larger' content={props.content} />
    </div>
  );
};

export default KanaDisplay;
