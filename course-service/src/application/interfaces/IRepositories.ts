import {CategoryEntity, CourseEntity, EnrollmentEntity } from "@/domain/entities";
import {Types} from 'mongoose'



export interface IRepositories {
    //category
    addCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >
    getAllCategories: () => Promise < CategoryEntity[] | null >
    editCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >
    getAllActiveCategories: () => Promise < CategoryEntity[] | null >

    //course
    createCourse: (data: CourseEntity) => Promise < CourseEntity | null >
    getAllCourse: () => Promise < CourseEntity [] | null >
    getAllActiveCourses: (data: {page: string | number, limit: string | number }) => Promise < CourseEntity [] | null >
    updateCourse: (data: CourseEntity) => Promise < CourseEntity | null >
    getCourseById: (id: string) => Promise < CourseEntity | null >

    //enrollments
    createEnrollment: (data: EnrollmentEntity) => Promise <EnrollmentEntity | null>
    getEnrollmentByUserId: (userId: string) => Promise<EnrollmentEntity[] | null>;
    getEnrollmentById: (id: string) => Promise<EnrollmentEntity | null>;
    updateLessonProgress: ( enrollmentId: Types.ObjectId,lessonId: Types.ObjectId, totalLessons: number) => Promise <EnrollmentEntity | null>
}



