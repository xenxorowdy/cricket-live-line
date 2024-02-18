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
    </Stack>
  );
};
export default RootLayout;
