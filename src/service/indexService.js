import request from "@/util/request";
/**
 *快速导航配置
 *
 * @export
 * @param {*} [params]
 * @returns
 */
export  function fastNav(params) {
    return request( {
        url:'/api/home/fastNav',
        method: 'GET',
        data:params
    });
}
