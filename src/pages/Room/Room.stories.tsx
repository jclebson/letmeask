import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Room } from ".";

export default {
  title: "Pages/Room",
  component: Room,
} as ComponentMeta<typeof Room>;

const RoomTemplate: ComponentStory<typeof Room> = () => <Room />;

export const RoomPage = RoomTemplate.bind({});
