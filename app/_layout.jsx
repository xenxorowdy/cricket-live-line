const { Stack } = require("expo-router");

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: "",
          headerStyle: { backgroundColor: '#722F37' },
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
          headerStyle: { backgroundColor: '#722F37' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
      />
      <Stack.Screen
        name="match/[id]"
        options={({ route, params }) => ({
          headerTitle: getHeaderTitle(route, params),
          headerStyle: { backgroundColor: '#722F37' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "700",
            backgroundColor: '#722F37',
          },

        })}
      />
      <Stack.Screen
        name="news/[id]"
        options={{
          headerTitle: "News",
          presentation: "modal",
          headerStyle: { backgroundColor: '#722F37' },

        }}

      />
      <Stack.Screen
        name="series/index"
        options={{
          headerTitle: "Series Information",
          presentation: "modal",
          headerStyle: { backgroundColor: '#722F37' },

        }}
      />
      <Stack.Screen
        name="series/[id]"
        options={{
          headerTitle: "series Information",
          headerStyle: { backgroundColor: '#722F37' },

        }}
      />
    </Stack>
  );
};

const getHeaderTitle = (route, param) => {
  try {
    // Extract the query parameter from the route

    // Return a dynamic header title based on the query
    return (route.params?.id).split("-")[1] ?? 'Match Summary';

  } catch (error) {
    console.log(error);
  }
}

export default RootLayout;
