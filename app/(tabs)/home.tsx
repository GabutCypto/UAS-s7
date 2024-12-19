import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function Home() {
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

  const popularProducts = [
    { name: 'Nasi Goreng Ayam', price: 'Rp 25.000', image: 'https://tse2.mm.bing.net/th?id=OIP.vS77ilxpWVksJdYKHfmNfgHaE8&w=316&h=316&c=7' },
    { name: 'Nasi Goreng Spesial', price: 'Rp 35.000', image: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Goreng-Spesial-Ayam-Kecombrang.jpg' },
    { name: 'Nasi Goreng Ayam', price: 'Rp 25.000', image: 'https://tse2.mm.bing.net/th?id=OIP.vS77ilxpWVksJdYKHfmNfgHaE8&w=316&h=316&c=7' },
    { name: 'Nasi Goreng Spesial', price: 'Rp 35.000', image: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Goreng-Spesial-Ayam-Kecombrang.jpg' },
    { name: 'Nasi Goreng Ayam', price: 'Rp 25.000', image: 'https://tse2.mm.bing.net/th?id=OIP.vS77ilxpWVksJdYKHfmNfgHaE8&w=316&h=316&c=7' },
    { name: 'Nasi Goreng Spesial', price: 'Rp 35.000', image: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Goreng-Spesial-Ayam-Kecombrang.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ImageBackground
            source={{ uri: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Goreng-Spesial-Ayam-Kecombrang.jpg' }}
            style={styles.headerBackground}
            imageStyle={{ borderRadius: 8 }} // Opsional: memberikan border radius pada gambar
        >
            <Text style={styles.headerText}>Selamat Datang di Toko Nasi Goreng</Text>
        </ImageBackground>
      </View>

      {/* Categories */}
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

      {/* Products */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daftar Produk</Text>
        {products.map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Popular Products */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produk Terlaris</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularProducts.map((product, index) => (
            <TouchableOpacity key={index} style={styles.popularProductCard}>
              <Image source={{ uri: product.image }} style={styles.popularProductImage} />
              <Text style={styles.popularProductName}>{product.name}</Text>
              <Text style={styles.popularProductPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    marginBottom: 16,
    borderRadius: 8, // Memberikan sedikit kelengkungan pada gambar
    overflow: 'hidden', // Membuat radius bekerja pada komponen anak
  },
  headerBackground: {
    width: '100%',
    height: 200, // Tinggi header
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: 69,
    borderRadius: 1,
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
  popularProductCard: {
    alignItems: 'center',
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    elevation: 4,
  },
  popularProductImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  popularProductName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  popularProductPrice: {
    fontSize: 12,
    color: '#8B0000',
  },
});
