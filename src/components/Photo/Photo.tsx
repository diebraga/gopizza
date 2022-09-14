import React from 'react';

import { Image, Placeholder, PlaceholderTitle } from './styles';

type Props = {
  uri: string | null
}

export const Photo: React.FC<Props> = ({ uri }) => {
  if (uri) {
    return (
      <Image source={{ uri }} />
    )
  } else {
    return (
      <Placeholder>
        <PlaceholderTitle>
          No photo has been{"\n"}loaded
        </PlaceholderTitle>
      </Placeholder>
    )
  }
}

