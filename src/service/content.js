// import request from "umi-request";
import request from "@/util/request";

/**
 *获取验证码
 *
 * @export
 * @param {*} [params]
 * @returns
 */
export async function formCaptcha(params) {
    return request( {
        url:'/api/form/captcha',
        method: 'GET',
        params: {
            ...params
        }
    });
}
