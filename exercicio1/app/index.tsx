import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
      <Image
        source={{
          uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundodosanimes.com%2Fanime%2Flovely-complex-alem-das-aparencias%2F&psig=AOvVaw3MYELNWEuf8_IQHyf55kVP&ust=1723598451810000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjc_eHm8IcDFQAAAAAdAAAAABAT',
        }}
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
