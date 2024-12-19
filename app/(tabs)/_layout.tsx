import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs>
      {/* Halaman Home dengan Tab Navigasi */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          title: 'Home', // Menyesuaikan judul tab
        }}
      />

      {/* Halaman Produk dengan Tab Navigasi */}
      <Tabs.Screen
        name="produk"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={size} color={color} />
          ),
          title: 'Produk', // Menyesuaikan judul tab
        }}
      />

      {/* Halaman Promo dengan Tab Navigasi */}
      <Tabs.Screen
        name="promo"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetag" size={size} color={color} />
          ),
          title: 'Promo', // Menyesuaikan judul tab
        }}
      />

      {/* Halaman About dengan Tab Navigasi */}
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
          title: 'About', // Menyesuaikan judul tab
        }}
      />
    </Tabs>
  );
};
