import { Switch, Route } from "react-router-dom";
import { HomeRoute } from "./HomeRoute";
import { RoomRoute } from "./RoomRoute";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <Route path="/rooms/new" component={RoomRoute} />
    </Switch>
  );
};
