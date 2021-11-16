// import Vue from 'vue';
// import {
// ACCESS_TOKEN,

// } from "@/store/mutation-types";
import storage from "@/util/storageControl";
import { setLocalTenantId } from '@/util/common';

const app = {
    state: {
        accessToken: "",
        btnAction: "",
        tenantId: ""

    },
    mutations: {
        SET_ACCESS_TOKEN: (state, token) => {
            storage.localSet('access_token', token);
            state.accessToken = token;
        },
        SET_BTN_ACTION: (state, action) => {
            storage.setBtnAction(JSON.stringify(action));
            state.btnAction = action;
        },
        SET_TENANTID: (state, id) => {
            state.tenantId = id;
            // storage.setTenantId(id);
            setLocalTenantId(id);

        },

    },
    actions: {
        setAccessToken: ({ commit }, token) => {
            commit('SET_ACCESS_TOKEN', token);
        },
        setBtnAction: ({ commit }, action) => {
            commit('SET_BTN_ACTION', action);
        },
        setTenantId: ({ commit }, id) => {
            commit('SET_TENANTID', id);
        },

    }
};

export default app