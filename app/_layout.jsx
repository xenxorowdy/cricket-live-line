const { Stack } = require("expo-router");

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="modal/[index]"
        options={{
          headerTitle: "Team Information",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="match/[id]"
        options={{
          headerTitle: "Score Board",
        }}
      />
      <Stack.Screen
        name="news/[id]"
        options={{
          headerTitle: "News",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="series/index"
        options={{
          headerTitle: "Team Information",
          presentation: "modal",
        }}
      />
    </Stack>
  );
};
export default RootLayout;
