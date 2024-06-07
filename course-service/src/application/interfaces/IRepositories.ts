import {CategoryEntity, CourseEntity } from "@/domain/entities";



export interface IRepositories {
    addCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >
    getAllCategories: () => Promise < CategoryEntity[] | null >
    editCategory: (data: CategoryEntity) => Promise < CategoryEntity | null >
    createCourse: (data: CourseEntity) => Promise < CourseEntity | null >
}



