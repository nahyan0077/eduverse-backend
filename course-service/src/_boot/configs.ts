import mongoose from 'mongoose'
import {config} from 'dotenv'
import {envString, envNumber} from '@/_boot/environment'

config()

export const configs = {
    http: {
        host: envString('HOST', 'localhost'),
        port: envNumber('PORT', 4002)
    },
    mongo: {
        database: envString('DB_NAME', 'edu-verse_auth'),
        host: envString('DB_HOST', 'mongodb+srv:/'),
        username: envString('DB_USERNAME', ''),
        password: envString('DB_PASSWORD', '')
    }
}