// import { Feather } from "@expo/vector-icons";
// import { View, TextInput, ScrollView, Text, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const TRENDING_TOPICS = [
//   { topic: "#ReactNative", tweets: "125K" },
//   { topic: "#TypeScript", tweets: "89K" },
//   { topic: "#WebDevelopment", tweets: "234K" },
//   { topic: "#AI", tweets: "567K" },
//   { topic: "#TechNews", tweets: "98K" },
//   { topic: "#AI", tweets: "567K" },
//   { topic: "#TechNews", tweets: "98K" },
//   { topic: "#AI", tweets: "567K" },
//   { topic: "#TechNews", tweets: "98K" },
//   { topic: "#AI", tweets: "567K" },
//   { topic: "#TechNews", tweets: "98K" },
//   { topic: "#AI", tweets: "567K" },
//   { topic: "#TechNews", tweets: "98K" },
//   { topic: "#AI", tweets: "567K" },
//   { topic: "#TechNews", tweets: "98K" },
//   { topic: "#AI", tweets: "567K" },
//   { topic: "#TechNews", tweets: "98K" },
  
// ];

// const SearchScreen = () => {
//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* HEADER */}
//       <View className="px-4 py-3 border-b border-gray-100">
//         <View className="flex-row items-center bg-black-300 rounded-full px-4 py-3">
//           <Feather name="search" size={20} color="#657786" />
//           <TextInput
//             placeholder="Search Twitter"
//             className="flex-1 ml-3 text-base"
//             placeholderTextColor="#657786"
//           />
//         </View>
//       </View>

//       <ScrollView className="flex-1">
//         <View className="p-4">
//           <Text className="text-xl font-bold text-gray-900 mb-4">Trending for you</Text>
//           {TRENDING_TOPICS.map((item, index) => (
//             <TouchableOpacity key={index} className="py-3 border-b border-gray-100">
//               <Text className="text-gray-500 text-sm">Trending in Technology</Text>
//               <Text className="font-bold text-gray-900 text-lg">{item.topic}</Text>
//               <Text className="text-gray-500 text-sm">{item.tweets} Tweets</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;

// import { Feather } from "@expo/vector-icons";
// import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";

// // Define the type for a trending topic
// interface TrendingTopic {
//   id: string;
//   topic: string;
//   tweets: string;
// }

// const TRENDING_TOPICS: TrendingTopic[] = [
//   { id: "1", topic: "#ReactNative", tweets: "125K" },
//   { id: "2", topic: "#TypeScript", tweets: "89K" },
//   { id: "3", topic: "#WebDevelopment", tweets: "234K" },
//   { id: "4", topic: "#AI", tweets: "567K" },
//   { id: "5", topic: "#TechNews", tweets: "98K" },
//   { id: "6", topic: "#TypeScript", tweets: "89K" },
//   { id: "7", topic: "#WebDevelopment", tweets: "234K" },
//   { id: "8", topic: "#AI", tweets: "567K" },
//   { id: "9", topic: "#TechNews", tweets: "98K" },
// ];

// const SearchScreen = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const renderItem = ({ item }: { item: TrendingTopic }) => (
//     <TouchableOpacity
//       className="py-4 border-b border-gray-100 px-4"
//       style={styles.touchable}
//       accessibilityRole="button"
//       accessibilityLabel={`Trending topic: ${item.topic}`}
//     >
//       <Text className="text-gray-500 text-sm" style={styles.textSecondary}>
//         Trending in Technology
//       </Text>
//       <Text className="font-bold text-gray-900 text-lg" style={styles.textPrimary}>
//         {item.topic}
//       </Text>
//       <Text className="text-gray-500 text-sm" style={styles.textSecondary}>
//         {item.tweets} Tweets
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* HEADER */}
//       <View className="px-4 py-3 border-b border-gray-100">
//         <View className="flex-row items-center bg-gray-100 rounded-full px-5 py-1" >
//           <Feather name="search" size={20} color="#657786" />
//           <TextInput
//             placeholder="Search Twitter"
//             className="flex-1 ml-3 text-base"
//             style={styles.textInput}
//             placeholderTextColor="#657786"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//             accessible={true}
//             accessibilityLabel="Search Twitter input"
//           />
//         </View>
//       </View>

//       <FlatList
//         data={TRENDING_TOPICS}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         ListHeaderComponent={
//           <Text
//             className="text-xl font-bold text-gray-900 mb-4 px-4 pt-4"
//             style={styles.headerText}
//           >
//             Trending for you
//           </Text>
//         }
//         contentContainerStyle={{ paddingBottom: 0 }}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#FFFFFF" },
//   header: { borderBottomWidth: 1, borderBottomColor: "#F7FAFC" },
//   searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#EDF2F7", borderRadius: 9999, paddingHorizontal: 16, paddingVertical: 8 },
//   textInput: { flex: 1, marginLeft: 12, fontSize: 16 },
//   touchable: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#F7FAFC" },
//   textPrimary: { fontWeight: "bold", color: "#1A2027", fontSize: 18 },
//   textSecondary: { color: "#6B7280", fontSize: 14 },
//   headerText: { fontSize: 20, fontWeight: "bold", color: "#1A2027", marginBottom: 16, paddingHorizontal: 16, paddingTop: 16 },
// });

// export default SearchScreen;

import { Feather } from "@expo/vector-icons";
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// Define the type for a trending topic
interface TrendingTopic {
  id: string;
  topic: string;
  tweets: string;
}

const TRENDING_TOPICS: TrendingTopic[] = [
  { id: "1", topic: "#ReactNative", tweets: "125K" },
  { id: "2", topic: "#TypeScript", tweets: "89K" },
  { id: "3", topic: "#WebDevelopment", tweets: "234K" },
  { id: "4", topic: "#AI", tweets: "567K" },
  { id: "5", topic: "#TechNews", tweets: "98K" },
  { id: "6", topic: "#MachineLearning", tweets: "312K" },
  { id: "7", topic: "#Blockchain", tweets: "176K" },
  { id: "8", topic: "#Cybersecurity", tweets: "203K" },
  { id: "9", topic: "#CloudComputing", tweets: "145K" },
  { id: "10", topic: "#DevOps", tweets: "88K" },
  { id: "11", topic: "#QuantumComputing", tweets: "67K" },
  { id: "12", topic: "#ARVR", tweets: "94K" },
  { id: "13", topic: "#5G", tweets: "132K" },
  { id: "14", topic: "#OpenSource", tweets: "109K" },
  { id: "15", topic: "#DataScience", tweets: "187K" },
  { id: "16", topic: "#Web3", tweets: "254K" },
  { id: "17", topic: "#IoT", tweets: "76K" },
  { id: "18", topic: "#FrontendDev", tweets: "121K" },
  { id: "19", topic: "#BackendDev", tweets: "99K" },
  { id: "20", topic: "#Metaverse", tweets: "301K" },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderItem = ({ item }: { item: TrendingTopic }) => (
    <TouchableOpacity
      className="py-3 px-4 border-b border-gray-100"
      style={styles.touchable}
      accessibilityRole="button"
      accessibilityLabel={`Trending topic: ${item.topic}`}
    >
      <Text className="text-gray-500 text-sm" style={styles.textSecondary}>
        Trending in Technology
      </Text>
      <Text className="font-bold text-gray-900 text-lg" style={styles.textPrimary}>
        {item.topic}
      </Text>
      <Text className="text-gray-500 text-sm" style={styles.textSecondary}>
        {item.tweets} Tweets
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" style={styles.container} edges={['top', 'left', 'right']}>
      {/* HEADER */}
      <View className="px-4 py-3 border-b border-gray-100" style={styles.header}>
        <View className="flex-row items-center bg-gray-200 rounded-full px-4 py-1" style={styles.searchContainer}>
          <Feather name="search" size={20} color="#657786" />
          <TextInput
            placeholder="Search Twitter"
            className="flex-1 ml-3 text-base"
            style={styles.textInput}
            placeholderTextColor="#657786"
            value={searchQuery}
            onChangeText={setSearchQuery}
            accessible={true}
            accessibilityLabel="Search Twitter input"
          />
        </View>
      </View>

      <FlatList
        data={TRENDING_TOPICS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text
            className="text-xl font-bold text-gray-900 mb-4 px-4 pt-4"
            style={styles.headerText}
          >
            Trending for you
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 0 }} // Removed bottom padding
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: { borderBottomWidth: 1, borderBottomColor: "#F7FAFC" },
  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#EDF2F7", borderRadius: 9999, paddingHorizontal: 16, paddingVertical: 8 },
  textInput: { flex: 1, marginLeft: 12, fontSize: 16 },
  touchable: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#F7FAFC" },
  textPrimary: { fontWeight: "bold", color: "#1A2027",},
  textSecondary: { color: "#6B7280", fontSize: 14 },
  headerText: { fontSize: 20, fontWeight: "bold", color: "#1A2027", marginBottom: 16, paddingHorizontal: 16, paddingTop: 16 },
});

export default SearchScreen;

//todo : add search bar functionality to search screen and display search results in flatlist