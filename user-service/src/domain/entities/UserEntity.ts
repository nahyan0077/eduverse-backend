import { ObjectId } from "mongoose";

enum Role {
    pending='pending',
    student='student',
    teacher='instructor',
    admin='admin'
}

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

enum Profession {
    student = 'student',
    working = 'working'
}

interface Contact {
    phone?: string,
    social?: string,
    address: string
}

interface Profile {
    avatar: string,
    dateOfBirth?: string,
    gender: Gender
}


export interface UserEntity {
    _id?: ObjectId;
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    role: Role,
    contact: Contact,
    profile: Profile,
    profession: Profession,
    cv:string,
    isBlocked: boolean;
    isVerified: boolean;
    isGAuth: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}