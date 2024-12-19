import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Promo() {
  const promoProducts = [
    {
      name: 'Nasi Goreng Ayam',
      description: 'Diskon 20% untuk pembelian hari ini!',
      price: 'Rp 20.000',
      originalPrice: 'Rp 25.000',
      image: 'https://www.sugarspicenmore.com/wp-content/uploads/2022/08/Nasi-Goreng-4.jpg',
    },
    {
      name: 'Nasi Goreng Seafood',
      description: 'Gratis minuman untuk setiap pembelian!',
      price: 'Rp 28.000',
      originalPrice: 'Rp 30.000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.3B1d9hkR_YHawKslIb-EEwHaHa&w=474&h=474&c=7',
    },
    {
      name: 'Nasi Goreng Spesial',
      description: 'Diskon 15% untuk pesanan pertama!',
      price: 'Rp 30.000',
      originalPrice: 'Rp 35.000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.84mS5JEupqqzYtMSoBnr6wHaE7&w=315&h=315&c=7',
    },
    {
      name: 'Nasi Goreng Spesial',
      description: 'Diskon 15% untuk pesanan pertama!',
      price: 'Rp 30.000',
      originalPrice: 'Rp 35.000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.84mS5JEupqqzYtMSoBnr6wHaE7&w=315&h=315&c=7',
    },
    {
      name: 'Nasi Goreng Spesial',
      description: 'Diskon 15% untuk pesanan pertama!',
      price: 'Rp 30.000',
      originalPrice: 'Rp 35.000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.84mS5JEupqqzYtMSoBnr6wHaE7&w=315&h=315&c=7',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Promo Hari Ini</Text>
      </View>

      {/* Promo List */}
      <View style={styles.promoList}>
        {promoProducts.map((product, index) => (
          <View key={index} style={styles.promoCard}>
            <Image source={{ uri: product.image }} style={styles.promoImage} />
            <View style={styles.promoInfo}>
              <Text style={styles.promoName}>{product.name}</Text>
              <Text style={styles.promoDescription}>{product.description}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.promoPrice}>{product.price}</Text>
                <Text style={styles.originalPrice}>{product.originalPrice}</Text>
              </View>
              <TouchableOpacity style={styles.promoButton}>
                <Text style={styles.promoButtonText}>Pesan Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  header: {
    padding: 16,
    backgroundColor: '#FF4500',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  promoList: {
    paddingHorizontal: 16,
  },
  promoCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  promoImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  promoInfo: {
    flex: 1,
  },
  promoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: 4,
  },
  promoDescription: {
    fontSize: 14,
    color: '#8B0000',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  promoPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: '#8B0000',
    textDecorationLine: 'line-through',
  },
  promoButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  promoButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
