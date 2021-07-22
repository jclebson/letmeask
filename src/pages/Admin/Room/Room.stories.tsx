import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Room } from ".";

export default {
  title: "Pages/Room",
  component: Room,
} as ComponentMeta<typeof Room>;

export const RoomTemplate: ComponentStory<typeof Room> = () => <Room />;
