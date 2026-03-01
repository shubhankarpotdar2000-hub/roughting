export interface IUser {
  userName: string;
  userId: string;
  userRole: 'candidate' | 'Admin' | 'HR' | 'Manager';
  profileDescription: string;
  profileImage: string;
  skills: string[];
  experienceYears: number;
  isActive: boolean;
  address: {
    current: {
      city: string;
      state: string;
      country: string;
      zipcode: string;
    };
    permanent: {
      city: string;
      state: string;
      country: string;
      zipcode: string;
    };
  };
}