const enums = {
    token: "token",
    env: "env",
    baseVersion: "baseVersion",
    deviceId: "deviceId",
    appName: "appName",
    tenantId: "tenantId",
    tabIsShow: "tabIsShow",
    userPhone: "userPhone",
    btnAction: "btnAction",
    rememberPwd: "rememberPwd",
    loginInfo: "loginInfo",
    userId:"userId",
    focusPower:"focusPower",
    returnTo:"returnTo",
    depart:"depart",
};

const storage = {
    localSet: function (key, value) {
        localStorage.setItem(key, value);
    },
    localGet: function (key) {
        return localStorage.getItem(key) || "";
    },
    localRemove: function (key) {
        localStorage.removeItem(key);
    },
    sessionSet: function (key, value) {
        sessionStorage.setItem(key, value);
    },
    sessionGet: function (key) {
        return sessionStorage.getItem(key) || "";
    },
    sessionRemove: function (key) {
        sessionStorage.removeItem(key);
    },

    // token控制
    setToken: function (value) {
        this.localSet(enums.token, value);
    },
    getToken: function () {
        return this.localGet(enums.token);
    },
    removeToken: function () {
        this.localRemove(enums.token);
    },

    // env控制
    setEnv: function (value) {
        this.localSet(enums.env, value);
    },
    getEnv: function () {
        return this.localGet(enums.env);
    },
    removeEnv: function () {
        this.localRemove(enums.env);
    },

    // baseVersion控制
    setBaseVersion: function (value) {
        this.localSet(enums.baseVersion, value);
    },
    getBaseVersion: function () {
        return this.localGet(enums.baseVersion);
    },
    removeBaseVersion: function () {
        this.localRemove(enums.baseVersion);
    },

    // deviceId控制
    setDeviceId: function (value) {
        this.localSet(enums.deviceId, value);
    },
    getDeviceId: function () {
        return this.localGet(enums.deviceId);
    },
    removeDeviceId: function () {
        this.localRemove(enums.deviceId);
    },

    // appName控制
    setAppName: function (value) {
        this.localSet(enums.appName, value);
    },
    getAppName: function () {
        return this.localGet(enums.appName);
    },
    removeAppName: function () {
        this.localRemove(enums.appName);
    },

    // rememberPwd控制
    setRememberPwd: function (value) {
        this.localSet(enums.rememberPwd, value);
    },
    getRememberPwd: function () {
        return this.localGet(enums.rememberPwd);
    },
    removeRememberPwd: function () {
        this.localRemove(enums.rememberPwd);
    },
    
    // loginInfo控制
    setLoginInfo: function (value) {
        this.localSet(enums.loginInfo, value);
    },
    getLoginInfo: function () {
        return this.localGet(enums.loginInfo);
    },
    removeLoginInfo: function () {
        this.localRemove(enums.loginInfo);
    },

    // tenantId 控制
    setTenantId: function (value) {
        this.sessionSet(enums.tenantId, value);
    },
    getTenantId: function () {
        return this.sessionGet(enums.tenantId);
    },
    removeTenantId: function () {
        this.sessionRemove(enums.tenantId);
    },

    // tabIsShow 控制
    setTabIsShow: function (value) {
        this.sessionSet(enums.tabIsShow, value);
    },
    getTabIsShow: function () {
        return this.sessionGet(enums.tabIsShow);
    },
    removeTabIsShow: function () {
        this.sessionRemove(enums.tabIsShow);
    },

    // userPhone 控制
    setUserPhone: function (value) {
        this.sessionSet(enums.userPhone, value);
    },
    getUserPhone: function () {
        return this.sessionGet(enums.userPhone);
    },
    removeUserPhone: function () {
        this.sessionRemove(enums.userPhone);
    },
    // btnAction 控制
    setBtnAction: function (value) {
        this.sessionSet(enums.btnAction, value);
    },
    getBtnAction: function () {
        return this.sessionGet(enums.btnAction);
    },
    removeBtnAction: function () {
        this.sessionRemove(enums.btnAction);
    },
    // userId
    setUserId: function (value) {
        this.sessionSet(enums.userId, value);
    },
    getUserId: function () {
        return this.sessionGet(enums.userId);
    },
    removeUserId: function () {
        this.sessionRemove(enums.userId);
    },
    // 豫正通-领导关注
    setFocusPower: function (value) {
        this.sessionSet(enums.focusPower, value);
    },
    getFocusPower: function () {
        return this.sessionGet(enums.focusPower);
    },
    removeFocusPower: function () {
        this.sessionRemove(enums.focusPower);
    },
    // 豫正通-领导批示-转办
    setReturnTo: function (value) {
        this.sessionSet(enums.returnTo, value);
    },
    getReturnTo: function () {
        return this.sessionGet(enums.returnTo);
    },
    removeReturnTo: function () {
        this.sessionRemove(enums.returnTo);
    },
    // 用户部门
    setDepart: function (value) {
        this.sessionSet(enums.depart, value);
    },
    getDepart: function () {
        return this.sessionGet(enums.depart);
    },
    removeDepart: function () {
        this.sessionRemove(enums.depart);
    },
};

export default storage;