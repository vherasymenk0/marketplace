'use client'

import { api } from '~/shared/services/api'

import { logoutOnUnauthorized } from './unauthorizedLogout'

api.addResponseInterceptor({ onError: logoutOnUnauthorized })
