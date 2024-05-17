import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex">
      <h1 className="font-bold ">Cuisines</h1>
        {restaurant.cuisines.map((item, index) => (
          <div className="flex flex-cols md:flex-col-3 gap-1">
            {index < restaurant.cuisines.length + 1 && <Dot />}
            <span>{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;