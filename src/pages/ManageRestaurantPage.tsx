import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restauant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading:isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  return (
  <ManageRestaurantForm 
  restaurant={restaurant} 
  onSave={ isEditing ? updateRestaurant : createRestaurant} 
  isLoading={isCreateLoading || isUpdateLoading } 
  />
);
}

export default ManageRestaurantPage;