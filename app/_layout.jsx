const { Stack } = require("expo-router");

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: "",
          headerStyle: { backgroundColor: '#7785AC' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />
      <Stack.Screen
        name="modal/[index]"
        options={{
          headerTitle: "Team Information",
          presentation: "modal",
          headerStyle: { backgroundColor: '#7785AC' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />
      <Stack.Screen
        name="match/[id]"
        options={{
          headerTitle: "Match Summary",
          headerStyle: { backgroundColor: '#7785AC' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 700,
            backgroundColor: '#7785AC',
          },

        }}
      />
      <Stack.Screen
        name="news/[id]"
        options={{
          headerTitle: "News",
          presentation: "modal",
          headerStyle: { backgroundColor: '#7785AC' },

        }}

      />
      <Stack.Screen
        name="series/index"
        options={{
          headerTitle: "Series Information",
          presentation: "modal",
          headerStyle: { backgroundColor: '#7785AC' },

        }}
      />
      <Stack.Screen
        name="series/[id]"
        options={{
          headerTitle: "series Information",
          headerStyle: { backgroundColor: '#7785AC' },

        }}
      />
    </Stack>
  );
};


export default RootLayout;
