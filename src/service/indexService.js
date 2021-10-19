import request from "@/util/request";
/**
 *快速导航配置
 *
 * @export
 * @param {*} [params]
 * @returns
 */
export  function fastNav(params) {
    return request('/api/home/fastNav', {
        method: 'GET',
        params:{
            ...params
        }
    });
}
