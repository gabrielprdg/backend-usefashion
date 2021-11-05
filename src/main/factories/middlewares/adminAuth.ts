import { adaptMiddleware } from '../../../main/adapters/expressMiddlewareAdapter'
import { makeAuthMiddleware } from './authMiddlewareFactory'

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
