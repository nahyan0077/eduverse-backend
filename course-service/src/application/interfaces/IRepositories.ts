import {CategoryEntity, CourseEntity } from "@/domain/entities";



export interface IRepositories {
    //category
    addCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >
    getAllCategories: () => Promise < CategoryEntity[] | null >
    editCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >

    //course
    createCourse: (data: CourseEntity) => Promise < CourseEntity | null >
    getAllCourse: () => Promise < CourseEntity [] | null >
}



