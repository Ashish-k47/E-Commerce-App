import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Product } from '../../constants/types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { dummyProducts } from '../../assets/assets';

export default function ProductDetails() {

    const {id} = useLocalSearchParams()
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)

    const {addToCart, cartItem} = useCart()
    const {toggleWishlist, isInWishlist} = useWishlist()

    const [slectedSize, setSlectedSize] = useState<string | null>(null)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const fetchProduct = async () =>{
      setProduct(dummyProducts.find((product) => product._id === id) as any)
      setLoading(false)
    }

    useEffect(()=>{
      fetchProduct()
    },[])

  return (
    <View>
      <Text>[id]</Text>
    </View>
  )
}