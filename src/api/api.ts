import http from './http';
import { LoginReq, LoginRes, RegisterReq, RegisterRes, SendRegisterEmailReq } from '@/types/api';

/** ***************************** login ****************************/
export const USER_LOGIN = async (params: LoginReq) => {
    return await http<LoginRes>('/api/admin/base/open/login', 'post', params);
};

export const USER_REGISTER = async (params: RegisterReq) => {
    return await http<RegisterRes>('/api/admin/base/open/register', 'post', params);
};

export const SEND_REGISTER_EMAIL = async (params: SendRegisterEmailReq) => {
    return await http('/api/admin/base/open/sendEmail', 'post', params);
};