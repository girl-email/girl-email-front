import http from './http';
import * as h from '@/types/api';

/** ***************************** login ****************************/
export const USER_LOGIN = async (params: h.LoginReq) => {
    return await http<h.LoginRes>('/api/admin/base/open/login', 'post', params);
};

export const USER_REGISTER = async (params: h.RegisterReq) => {
    return await http<h.RegisterRes>('/api/admin/base/open/register', 'post', params);
};

export const SEND_REGISTER_EMAIL = async (params: h.SendRegisterEmailReq) => {
    return await http('/api/admin/base/open/sendEmail', 'post', params);
};

export const SEND_TASK_CONFIG = async (params: h.sendTaskConfigReq) => {
    return await http<h.sendTaskConfigRes>('/api/admin/email/conf/add', 'post', params);
};