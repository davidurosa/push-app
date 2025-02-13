import { View, Text, FlatList } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { usePushNotifications } from "@/hooks/usePushNotifications";

export default function PushApp() {
  const { expoPushToken, notifications } = usePushNotifications();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "start" }}>
      {/* <ThemedText> Token: {expoPushToken}</ThemedText> */}
      <ThemedText
        style={{
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        {" "}
        Notificaciones
      </ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <View>
            <ThemedText style={{ fontWeight: "bold" }}>
              Titulo: {item.request.content.title}
            </ThemedText>
            <ThemedText>Body: {item.request.content.body}</ThemedText>
            <ThemedText>
              Data: {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
        ListEmptyComponent={
          <ThemedText style={{}}>No hay notificaciones</ThemedText>
        }
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
        )}
      />
    </View>
  );
}
