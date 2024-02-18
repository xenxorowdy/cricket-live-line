import { Slot, Stack, Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <>
      {/* <Stack>
        <Stack.Screen
          name="index"
          options={{
            headTitle: "Home Page",
            headerStyle: {
              backgroundColor: "#21Da8c",
            },
          }}
        />
        <Stack.Screen
          name="users/[id]"
          options={{ headerTitle: "user page" }}
        />
      </Stack> */}
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: "Home",
            title: "index",
          }}
        />
        <Tabs.Screen
          name="users/[id]"
          options={{
            headerTitle: "users",
            title: "users",
          }}
        />
      </Tabs>
    </>
  );
}
