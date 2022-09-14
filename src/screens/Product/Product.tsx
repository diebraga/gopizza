import React, { useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Photo } from '../../components/Photo/Photo';
import * as ImagePicker from 'expo-image-picker';

import { Container, Title, Header, DeleteLabel, PickImageButton, UploadView } from './styles';

const Product: React.FC = () => {
  const [image, setImage] = useState("")

  const handlePickerPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      const { uri } = result as { uri: string }

      if (!result.cancelled) {
        setImage(uri);
      }
    }
  }
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack />
        <Title>Register</Title>

        <TouchableOpacity>
          <DeleteLabel>
            Delete
          </DeleteLabel>
        </TouchableOpacity>
      </Header>
      <UploadView>
        <Photo uri='' />
        <PickImageButton 
        title='Load' 
        type='secondary' 
        onPress={handlePickerPhoto}
        />
      </UploadView>
    </Container>
  )
}

export { Product };