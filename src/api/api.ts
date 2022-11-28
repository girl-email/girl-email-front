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

export const TASK_CONFIG_LIST = async (params: object) => {
    return await http<h.taskConfigListRes>('/api/admin/email/conf/page', 'post', params);
};

export const TASK_CONFIG_UPDATE = async (params: h.updateTaskConfig) => {
    return await http('/api/admin/email/conf/update', 'post', params);
};

export const TASK_CONFIG_DELETE = async (params: {id: number}) => {
    return await http('/api/admin/email/conf/delete', 'post', params);
};