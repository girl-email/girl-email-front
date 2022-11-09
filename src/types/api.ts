export interface LoginReq {
    email: string,
    password: string
}

export interface LoginRes {
    expire: number,
    email: string,
    token: string,
    refreshExpire: number,
    refreshToken: string
}

export interface RegisterReq {
    code: string,
    email: string,
    password: string
}

export interface RegisterRes {
    password: string,
    email: string,
    username: string,
    departmentId: null,
    name: null,
    nickName: null,
    headImg: null,
    phone: null,
    remark: null,
    socketId: null,
    id: number,
    createTime: string,
    updateTime: string,
    passwordV: number,
    status: number
}

export interface SendRegisterEmailReq {
    email: string
}