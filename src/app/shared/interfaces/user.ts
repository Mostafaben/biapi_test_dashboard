export default interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  title: string;
};

export interface IUserDetails extends IUser {}
