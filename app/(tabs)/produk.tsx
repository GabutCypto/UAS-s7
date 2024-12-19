import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Produk() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Nasi Goreng Ayam', image: 'https://www.sugarspicenmore.com/wp-content/uploads/2022/08/Nasi-Goreng-4.jpg' },
    { name: 'Nasi Goreng Seafood', image: 'https://3.bp.blogspot.com/-ZqkRT0AeRa8/UFx46DOtswI/AAAAAAAAAG8/bwfW1GX13Zc/s1600/IMG_1443.JPG' },
    { name: 'Nasi Goreng Spesial', image: 'https://tse2.mm.bing.net/th?id=OIP.vS77ilxpWVksJdYKHfmNfgHaE8&w=316&h=316&c=7' },
    { name: 'Nasi Goreng Ayam', image: 'https://www.sugarspicenmore.com/wp-content/uploads/2022/08/Nasi-Goreng-4.jpg' },
    { name: 'Nasi Goreng Seafood', image: 'https://3.bp.blogspot.com/-ZqkRT0AeRa8/UFx46DOtswI/AAAAAAAAAG8/bwfW1GX13Zc/s1600/IMG_1443.JPG' },
    { name: 'Nasi Goreng Spesial', image: 'https://tse2.mm.bing.net/th?id=OIP.vS77ilxpWVksJdYKHfmNfgHaE8&w=316&h=316&c=7' },
  ];

  const products = [
    { name: 'Nasi Goreng Ayam', price: 'Rp 25.000', image: 'https://tse4.mm.bing.net/th?id=OIP.fjp-ZYMBdk1vdPM35MUJ9QHaEK&w=266&h=266&c=7' },
    { name: 'Nasi Goreng Seafood', price: 'Rp 30.000', image: 'https://tse2.mm.bing.net/th?id=OIP.3B1d9hkR_YHawKslIb-EEwHaHa&w=474&h=474&c=7' },
    { name: 'Nasi Goreng Spesial', price: 'Rp 35.000', image: 'https://tse2.mm.bing.net/th?id=OIP.84mS5JEupqqzYtMSoBnr6wHaE7&w=315&h=315&c=7' },
    { name: 'Nasi Goreng Ayam', price: 'Rp 25.000', image: 'https://tse4.mm.bing.net/th?id=OIP.fjp-ZYMBdk1vdPM35MUJ9QHaEK&w=266&h=266&c=7' },
    { name: 'Nasi Goreng Seafood', price: 'Rp 30.000', image: 'https://tse2.mm.bing.net/th?id=OIP.3B1d9hkR_YHawKslIb-EEwHaHa&w=474&h=474&c=7' },
    { name: 'Nasi Goreng Spesial', price: 'Rp 35.000', image: 'https://tse2.mm.bing.net/th?id=OIP.84mS5JEupqqzYtMSoBnr6wHaE7&w=315&h=315&c=7' },
    { name: 'Nasi Goreng Ayam', price: 'Rp 25.000', image: 'https://tse4.mm.bing.net/th?id=OIP.fjp-ZYMBdk1vdPM35MUJ9QHaEK&w=266&h=266&c=7' },
    { name: 'Nasi Goreng Seafood', price: 'Rp 30.000', image: 'https://tse2.mm.bing.net/th?id=OIP.3B1d9hkR_YHawKslIb-EEwHaHa&w=474&h=474&c=7' },
    { name: 'Nasi Goreng Spesial', price: 'Rp 35.000', image: 'https://tse2.mm.bing.net/th?id=OIP.84mS5JEupqqzYtMSoBnr6wHaE7&w=315&h=315&c=7' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Pencarian */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari produk..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Kategori */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kategori</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Daftar Produk */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daftar Produk</Text>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noResultText}>Produk tidak ditemukan.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    elevation: 2,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
    color: '#FF4500',
  },
  categoryCard: {
    marginLeft: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    maxWidth: 100,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    padding: 8,
    elevation: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  productPrice: {
    fontSize: 14,
    color: '#8B0000',
  },
  noResultText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#8B0000',
    marginTop: 16,
  },
});
