interface IUser {
    name: string;
    password: string;
    email?: string;
    projects: string[];
}
export = IUser;