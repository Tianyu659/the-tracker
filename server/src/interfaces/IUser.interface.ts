interface IUser {
  username: string;
  fname: string;
  lname: string;
  password: string;
  email?: string;
  projects: string[];
}
export = IUser;
