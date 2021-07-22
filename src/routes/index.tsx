import { Switch, Route } from "react-router-dom";
import { HomeRoute } from "./HomeRoute";
import { NewRoomRoute } from "./NewRoomRoute";
import { RoomRoute } from "./RoomRoute";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <Route path="/rooms/new" component={NewRoomRoute} />
      <Route path="/admin/room" component={RoomRoute} />
    </Switch>
  );
};
