import { Types } from "mongoose";

enum Role {
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
    address?: string
}

interface Profile {
    avatar?: string,
    dateOfBirth?: string,
    gender?: Gender
}


export interface UserEntity {
    _id?: Types.ObjectId;
    firstName: string,
    lastName: string,
    userName?: string,
    email: string,
    password: string,
    role: Role,
    contact: Contact,
    profile: Profile,
    cv?: string,
    profession: Profession,
    isBlocked: boolean;
    isVerified?: boolean;
    isRequested?: boolean;
    isGAuth?: boolean;
    isRejected?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}