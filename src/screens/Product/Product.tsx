import React, { useState } from 'react';
import { Platform, ScrollView, TouchableOpacity } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Photo } from '../../components/Photo/Photo';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Title,
  Header,
  DeleteLabel,
  PickImageButton,
  UploadView,
  Form,
  InputGroup,
  Label,
  InputGroupHeader,
  MaxCharcters
} from './styles';

import { InputPrice } from '../../components/InputPrice/InputPrice';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

const Product: React.FC = () => {
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [priceSizeX, setPriceSizeX] = useState("")
  const [priceSizeM, setPriceSizeM] = useState("")
  const [priceSizeLG, setPriceSizeLG] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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
      <ScrollView showsVerticalScrollIndicator={false} >
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

        <Form>
          <InputGroup>
            <Label>Name</Label>
            <Input
              onChangeText={setName}
              value={name}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupHeader>
              <Label>Descriptions</Label>
              <MaxCharcters>0 of 60 chars</MaxCharcters>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={60}
              style={{ height: 80 }}
              onChangeText={setDescription}
              value={description}
            />
          </InputGroup>

          <InputGroup>
            <Label>Sizes and prices</Label>
            <InputPrice
              size="S"
              onChangeText={setPriceSizeX}
              value={priceSizeX}
            />
            <InputPrice
              size="M"
              onChangeText={setPriceSizeM}
              value={priceSizeM}
            />
            <InputPrice
              size="LG"
              onChangeText={setPriceSizeLG}
              value={priceSizeLG}
            />
          </InputGroup>

          <Button title="Add new pizza" />
        </Form>
      </ScrollView>
    </Container>
  )
}

export { Product };