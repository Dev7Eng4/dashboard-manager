const apiUri = {
  COMMON: {
    users: `/users`,
  },
  GET: {
    detailUser: (id: string) => `/users/${id}`,
    getAuthToken: `/token2FA`,
  },
  POST: {
    login: `/beginLogin2FA`,
    verifyAuth: `/verify2FA`,
  },
  PUT: {},
  PATCH: {},
  DELETE: {},
};

export default apiUri;
