import { Application } from "express";
import {createProxyMiddleware} from 'http-proxy-middleware'

export const setUpProxies = (app: Application, routes: any) => {
    routes.forEach((route : any) => {
        app.use(route.url, createProxyMiddleware(route.proxy))
    });
}