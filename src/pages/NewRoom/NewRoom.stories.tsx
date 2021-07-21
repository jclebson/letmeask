import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NewRoom } from ".";

export default {
  title: "Pages/NewRoom",
  component: NewRoom,
} as ComponentMeta<typeof NewRoom>;

const NewRoomTemplate: ComponentStory<typeof NewRoom> = () => <NewRoom />;

export const NewRoomPage = NewRoomTemplate.bind({});
