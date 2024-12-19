import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: 'https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Goreng-Spesial-Ayam-Kecombrang.jpg' }}
          style={styles.headerBackground}
          imageStyle={{ borderRadius: 8 }}
        >
          <Text style={styles.headerText}>Selamat Datang di Toko Nasi Goreng</Text>
        </ImageBackground>
      </View>

      {/* Tentang Aplikasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tentang Kami</Text>
        <Text style={styles.sectionContent}>
          Kami adalah penyedia nasi goreng dengan berbagai varian rasa yang lezat. Aplikasi ini mempermudah Anda untuk
          memesan nasi goreng favorit Anda kapan saja, di mana saja. Dengan bahan-bahan berkualitas dan layanan
          profesional, kami hadir untuk memenuhi kebutuhan Anda.
        </Text>
      </View>

      {/* Visi dan Misi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visi Kami</Text>
        <Text style={styles.sectionContent}>
          Menjadi pilihan utama masyarakat untuk nasi goreng dengan cita rasa khas Indonesia.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Misi Kami</Text>
        <Text style={styles.sectionContent}>
          1. Menggunakan bahan-bahan berkualitas tinggi. {'\n'}
          2. Menyediakan layanan yang cepat dan ramah. {'\n'}
          3. Menjamin kebersihan dan kesegaran dalam setiap sajian.
        </Text>
      </View>

      {/* Kontak */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hubungi Kami</Text>
        <Text style={styles.sectionContent}>
          Email: support@tokonasigoreng.com {'\n'}
          Telepon: +62 812 3456 7890 {'\n'}
          Alamat: Jalan Makanan Enak No. 123, Jakarta, Indonesia
        </Text>
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
  },
  headerBackground: {
    width: '100%',
    height: 200,
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
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 14,
    color: '#8B0000',
    lineHeight: 22,
    textAlign: 'justify',
  },
});
