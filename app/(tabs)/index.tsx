import React from 'react';
import { StyleSheet, Platform, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const colors = ['#E5E7EB', '#F1F2F3', '#F8F9FA'];

const products = [
  {
    name: 'Produk 1',
    description: 'Deskripsi produk 1 yang keren.',
    price: 'Rp 100.000',
  },
  {
    name: 'Produk 2',
    description: 'Deskripsi produk 2 yang lebih keren.',
    price: 'Rp 200.000',
  },
  {
    name: 'Produk 3',
    description: 'Deskripsi produk 3 yang sangat keren.',
    price: 'Rp 300.000',
  },
];

const categories = [
  'Makanan',
  'Minuman',
  'Menu Paket',
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.headerImage}>
          <ThemedText style={styles.welcomeText} type="title">Welcome to Our Store!</ThemedText>
          <HelloWave />
        </View>
      }
    >
      {/* Kategori */}
      <ThemedView style={styles.categoryContainer}>
        <ThemedText style={styles.categoryTitle} type="subtitle">Kategori</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <ThemedText>{category}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ThemedView>

      {/* Produk */}
      <ThemedView style={styles.productContainer}>
        <ThemedText style={styles.productTitle} type="subtitle">Produk</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((product, index) => (
            <ThemedView key={index} style={styles.productItem}>
              <ThemedText type="defaultSemiBold">{product.name}</ThemedText>
              <ThemedText>{product.description}</ThemedText>
              <ThemedText type="defaultSemiBold">{product.price}</ThemedText>
            </ThemedView>
          ))}
        </ScrollView>
      </ThemedView>

      {/* Langkah-langkah */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40, 
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
  },
  categoryContainer: {
    marginVertical: 16,
  },
  categoryTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  categoryItem: {
    marginHorizontal: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
    borderRadius: 8,
    marginBottom: 10, 
  },
  productContainer: {
    marginVertical: 16,
  },

  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productItem: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: '#000000',
    borderRadius: 8,
    minWidth: 250,
    marginBottom: 10,
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },

  productDescription: {
    fontSize: 14, 
    color: '#000000',
    marginBottom: 5, 
  },

  productPrice: {
    fontWeight: 'bold', 
    fontSize: 16, 
    color: '#000000', 
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
