
enum Role {
    pending='pending',
    student='student',
    teacher='teacher',
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
    gender: string
}


export interface UserEntity {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    role: Role,
    contact: Contact,
    profile: Profile,
    otp: string,
    profession: Profession,
    isBlocked: boolean;
    isVerified: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}