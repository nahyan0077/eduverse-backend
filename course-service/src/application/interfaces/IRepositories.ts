import {CategoryEntity, CourseEntity, EnrollmentEntity, ReviewEntity } from "@/domain/entities";
import {Types} from 'mongoose'



export interface IRepositories {
    //category
    addCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >
    getAllCategories: () => Promise < CategoryEntity[] | null >
    editCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >
    getAllActiveCategories: () => Promise < CategoryEntity[] | null >

    //course
    createCourse: (data: CourseEntity) => Promise < CourseEntity | null >
    getAllCourse: (page: number, limit: number, search: string) => Promise<{ courses: CourseEntity[], totalPages: number, currentPage: number}>;
    getAllActiveCourses: (data: {page: string | number, limit: string | number, search: string }) => Promise < { courses: CourseEntity[], totalPages: number, currentPage: number} >
    updateCourse: (data: CourseEntity) => Promise < CourseEntity | null >
    getCourseById: (id: string) => Promise < CourseEntity | null >
    searchCourse: (query: string) => Promise <CourseEntity[] | []>

    //enrollments
    createEnrollment: (data: EnrollmentEntity) => Promise <EnrollmentEntity | null>
    getEnrollmentByUserId: (userId: string) => Promise<EnrollmentEntity[] | null>;
    getEnrollmentById: (id: string) => Promise<EnrollmentEntity | null>;
    updateLessonProgress: ( enrollmentId: Types.ObjectId,lessonId: Types.ObjectId, totalLessons: number) => Promise <EnrollmentEntity | null>


    //review
    createReview: (data: ReviewEntity) => Promise <ReviewEntity | null>
    getAllReviews: (page: string | number, limit: string | number, courseId: string) => Promise <{ reviews: ReviewEntity[], totalPages: number, currentPage: number}>
}