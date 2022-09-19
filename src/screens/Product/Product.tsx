import React, { useEffect, useState } from 'react';
import { Alert, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Photo } from '../../components/Photo/Photo';
import * as ImagePicker from 'expo-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProductNavigationProps } from '../../@types/navigation';
import { ProductType } from '../../components/ProductCard/ProductCard';
type PizzaResponse = ProductType & {
  photo_path: string
  price_sizes: {
    s: string
    m: string
    lg: string
  }
}
const Product: React.FC = () => {
  const [photoPath, setPhotoPath] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [priceSizeS, setPriceSizeS] = useState("")
  const [priceSizeM, setPriceSizeM] = useState("")
  const [priceSizeLG, setPriceSizeLG] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()

  const route = useRoute()
  const { id } = route.params as ProductNavigationProps

  const handlePickerPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const { uri } = result as { uri: string }

    if (!result.cancelled) {
      setImage(uri);
    }
  }

  const handleAddPizza = async () => {
    if (!name.trim()) {
      return Alert.alert("Add Pizza", "Give the pizza a name")
    }
    if (!description.trim()) {
      return Alert.alert("Add Pizza", "Description is required")
    }
    if (!image) {
      return Alert.alert("Add Pizza", "Select a image for your pizza")
    }
    if (!priceSizeS || !priceSizeM || !priceSizeLG) {
      return Alert.alert("Add Pizza", "The size is required")
    }

    setIsLoading(true)
    const fileName = new Date().getTime()
    const reference = storage().ref(`/pizzas/${fileName}.png`)

    await reference.putFile(image)
    const photo_url = await reference.getDownloadURL()

    firestore()
      .collection('pizzas')
      .add({
        name,
        name_insensitive: name.toLocaleLowerCase().trim(),
        description,
        price_sizes: {
          s: priceSizeS,
          m: priceSizeM,
          lg: priceSizeLG,
        },
        photo_url,
        photo_path: reference.fullPath
      })
      .then(() => {
        setDescription("")
        setImage("")
        setName("")
        setPriceSizeLG("")
        setPriceSizeM("")
        setPriceSizeS("")
        return Alert.alert("Success", "A new pizza has been saved")
      })
      .catch(() => Alert.alert("Error in register pizza"))

    setIsLoading(false)
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then(res => {
          const product = res.data() as PizzaResponse

          setName(product.name)
          setDescription(product.description)
          setPriceSizeLG(product.price_sizes.lg)
          setPriceSizeS(product.price_sizes.s)
          setPriceSizeM(product.price_sizes.m)
          setImage(product.photo_url)
          setPhotoPath(product.photo_path)
        })
    }
  }, [id])

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Header>
          <ButtonBack onPress={handleGoBack} />
          <Title>Register</Title>
          {id ?
            <TouchableOpacity>
              <DeleteLabel>
                Delete
              </DeleteLabel>
            </TouchableOpacity>
            : <View style={{ width: 20 }} />
          }
        </Header>
        <UploadView>
          <Photo uri={image} />
          {!id &&
            <PickImageButton
              title='Load'
              type='secondary'
              onPress={handlePickerPhoto}
            />
          }
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
              onChangeText={setPriceSizeS}
              value={priceSizeS}
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
          {!id && (
            <Button
              title="Add new pizza"
              onPress={handleAddPizza}
              isLoading={isLoading} />
          )}
        </Form>
      </ScrollView>
    </Container>
  )
}

export { Product };