import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http : HttpClient) {}

  usersArr:IUser[] = [
    {
      userName: 'May',
      userId: '125',
      userRole: 'candidate',
      profileDescription: 'Frontend developer with Angular experience.',
      profileImage: 'blob:https://example.com/1a2b3c',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      experienceYears: 2,
      isActive: true,
      address: {
        current: {
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '411001',
        },
        permanent: {
          city: 'Latur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '413512',
        },
      },
    },
    {
      userName: 'Rahul',
      userId: '126',
      userRole: 'candidate',
      profileDescription: 'Node.js backend developer working with MongoDB.',
      profileImage: 'blob:https://example.com/4d5e6f',
      skills: ['Node.js', 'Express', 'MongoDB'],
      experienceYears: 3,
      isActive: true,
      address: {
        current: {
          city: 'Mumbai',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '400001',
        },
        permanent: {
          city: 'Nagpur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '440001',
        },
      },
    },
    {
      userName: 'Sneha',
      userId: '127',
      userRole: 'HR',
      profileDescription: 'HR executive handling recruitment and onboarding.',
      profileImage: 'blob:https://example.com/7g8h9i',
      skills: ['Recruitment', 'Communication', 'MS Excel'],
      experienceYears: 4,
      isActive: true,
      address: {
        current: {
          city: 'Hyderabad',
          state: 'Telangana',
          country: 'India',
          zipcode: '500001',
        },
        permanent: {
          city: 'Nanded',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '431601',
        },
      },
    },
    {
      userName: 'Amit',
      userId: '128',
      userRole: 'Admin',
      profileDescription: 'System administrator managing infrastructure.',
      profileImage: 'blob:https://example.com/10j11k',
      skills: ['Linux', 'Networking', 'AWS'],
      experienceYears: 5,
      isActive: false,
      address: {
        current: {
          city: 'Bangalore',
          state: 'Karnataka',
          country: 'India',
          zipcode: '560001',
        },
        permanent: {
          city: 'Solapur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '413001',
        },
      },
    },
    {
      userName: 'Pooja',
      userId: '129',
      userRole: 'candidate',
      profileDescription: 'UI/UX designer with Figma and Adobe XD experience.',
      profileImage: 'blob:https://example.com/12l13m',
      skills: ['Figma', 'Adobe XD', 'Wireframing'],
      experienceYears: 3,
      isActive: true,
      address: {
        current: {
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '411002',
        },
        permanent: {
          city: 'Kolhapur',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '416003',
        },
      },
    },
    {
      userName: 'Vikas',
      userId: '130',
      userRole: 'candidate',
      profileDescription: 'Full stack developer working on MEAN stack.',
      profileImage: 'blob:https://example.com/14n15o',
      skills: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      experienceYears: 4,
      isActive: true,
      address: {
        current: {
          city: 'Nashik',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '422001',
        },
        permanent: {
          city: 'Aurangabad',
          state: 'Maharashtra',
          country: 'India',
          zipcode: '431001',
        },
      },
    },
    {
      userName: 'Kiran',
      userId: '131',
      userRole: 'Manager',
      profileDescription: 'Project manager handling multiple web projects.',
      profileImage: 'blob:https://example.com/16p17q',
      skills: ['Project Management', 'Agile', 'Scrum'],
      experienceYears: 7,
      isActive: true,
      address: {
        current: {
          city: 'Delhi',
          state: 'Delhi',
          country: 'India',
          zipcode: '110001',
        },
        permanent: {
          city: 'Jaipur',
          state: 'Rajasthan',
          country: 'India',
          zipcode: '302001',
        },
      },
    },
    {
      userName: 'Neha',
      userId: '132',
      userRole: 'candidate',
      profileDescription:
        'QA engineer experienced in manual and automation testing.',
      profileImage: 'blob:https://example.com/18r19s',
      skills: ['Selenium', 'Manual Testing', 'API Testing'],
      experienceYears: 3,
      isActive: false,
      address: {
        current: {
          city: 'Chennai',
          state: 'Tamil Nadu',
          country: 'India',
          zipcode: '600001',
        },
        permanent: {
          city: 'Madurai',
          state: 'Tamil Nadu',
          country: 'India',
          zipcode: '625001',
        },
      },
    },
    {
      userName: 'Arjun',
      userId: '133',
      userRole: 'candidate',
      profileDescription: 'Data analyst working with Python and Power BI.',
      profileImage: 'blob:https://example.com/20t21u',
      skills: ['Python', 'Power BI', 'SQL'],
      experienceYears: 2,
      isActive: true,
      address: {
        current: {
          city: 'Indore',
          state: 'Madhya Pradesh',
          country: 'India',
          zipcode: '452001',
        },
        permanent: {
          city: 'Bhopal',
          state: 'Madhya Pradesh',
          country: 'India',
          zipcode: '462001',
        },
      },
    },
  ];

  fetchallposts(): Observable<IUser[]> {
    return of(this.usersArr);
  }

  addusers(user: IUser): Observable<any>{
    this.usersArr.unshift(user)
    return of(user)
  }

fetchsingleid(id: string): Observable<IUser> {
  const user = this.usersArr.find(u => u.userId === id)!;
  return of(user);
}

updateuser(user: IUser): Observable<IUser> {
  const index = this.usersArr.findIndex(u => u.userId === user.userId);
  this.usersArr[index] = user;
  return of(user);
}


onremoveuser(id:string):Observable<any>{
  let removeobj = this.usersArr.findIndex(t=>t.userId === id)
  this.usersArr.splice(removeobj, 1)
  return of(removeobj)
}
}
