import { adaptMiddleware } from '../../../main/adapters/expressMiddlewareAdapter'
import { makeAuthMiddleware } from './authMiddlewareFactory'

export const auth = adaptMiddleware(makeAuthMiddleware())
