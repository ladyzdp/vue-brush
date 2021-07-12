import request from "umi-request";

/**
 *获取验证码
 *
 * @export
 * @param {*} [params]
 * @returns
 */
export async function formCaptcha(params) {
    return request('/api/form/captcha', {
        method: 'GET',
        params: {
            ...params
        }
    });
}
