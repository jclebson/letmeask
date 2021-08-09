import { Switch, Route } from "react-router-dom";
import { HomeRoute } from "./HomeRoute";
import { NewRoomRoute } from "./NewRoomRoute";
import { AdminRoomRoute } from "./AdminRoomRoute";
import { RoomPageRoute } from "./RoomPageRoute";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <Route path="/rooms/new" component={NewRoomRoute} />
      <Route path="/rooms/:id" component={RoomPageRoute} />
      <Route path="/admin/room" component={AdminRoomRoute} />
    </Switch>
  );
};
