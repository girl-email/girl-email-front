export interface LoginReq {
    email: string;
    password: string
}

export interface LoginRes {
    expire: number;
    email: string;
    token: string;
    refreshExpire: number;
    refreshToken: string
}

export interface RegisterReq {
    code: string;
    email: string;
    password: string
}

export interface RegisterRes {
    password: string;
    email: string;
    username: string;
    departmentId: null;
    name: null;
    nickName: null;
    headImg: null;
    phone: null;
    remark: null;
    socketId: null;
    id: number;
    createTime: string;
    updateTime: string;
    passwordV: number;
    status: number
}

export interface SendRegisterEmailReq {
    email: string
}

export interface sendTaskConfigReq {
    from_user: string;
    from_email: string;
    city: string;
    to_user: string;
    to_email: string;
    startDay: string;
    email_subject: string;
}

export interface sendTaskConfigRes {
    id: number
}

export interface taskConfigListRes {
    list: Array<{
        id: number;
        createTime: string;
        updateTime: string;
        email_subject: string;
        startDay: string;
        from_user: string;
        from_email: string;
        to_user: string;
        to_email: string;
        city: string;
        email_template: number;
        user_id: number
    }>;
    pagination: {
        page: number;
        size: number;
        total: number
    }
}

export interface updateTaskConfig {
    id: number;
    createTime: string;
    updateTime: string;
    email_subject: string;
    startDay: string;
    from_user: string;
    from_email: string;
    to_user: string;
    to_email: string;
    city: string;
    email_template: number;
    user_id: number
}