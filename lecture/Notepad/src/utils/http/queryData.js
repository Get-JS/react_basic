const queryData = {
  // ****************** USER ****************************** //
  /**
   * * 일반 회원가입 POST
   * * /user/sign-up/
   * * Authorization: JWT 불필요
   */
  nRegister: {
    bodyQuery: {
      sign_up_type: 'string',
      email: 'string',
      username: 'string',
      password: 'string',
    },
  },

  /**
   * * 일반 로그인 POST
   * * /user/sign-in/
   * * Authorization: JWT 불필요
   */
  nLogin: {
    bodyQuery: {
      email: 'string',
      password: 'string',
    },
  },

  /**
   * * 회원정보 조회 GET
   * * user/{userId}/ (option)
   * * JWT 필요
   */
  userRead: {},
  // ****************** USER - END ************************ //

  // ****************** TOEKN ****************************** //
  /**
   * * JWT 갱신 POST
   * * /user/token/refresh/
   * * JWT 불필요
   */
  updateToken: {
    bodyQuery: {
      refresh: 'string',
    },
  },

  /**
   * * JWT 검사 POST
   * * /user/token/verify/
   * * JWT 불필요
   */
  checkToken: {
    bodyQuery: {
      token: 'string',
    },
  },
  // ****************** TOEKN - END ************************ //

  news: {
    bodyQuery: {
      country: 'string',
      category: 'string',
      apiKey: 'string',
    },
  },

  // ****************** POST ****************************** //
  postLoad: {
    queryParams: {
      postId: 'number',
    },
  },

  postListLoad: {
    headerQuery: {
      tag: 'string',
      username: 'string',
      page: 'string',
    },
  },

  postWrite: {
    bodyQuery: {
      title: 'string',
      body: 'string',
      tags: 'string',
    },
  },
  // ****************** POST - END ************************ //
};

export default queryData;

export function selialize({ type, queryType = 'bodyQuery', originDataInfo }) {
  const dataInfo = {};
  const dataKeys = Object.keys(queryData[type][queryType]);
  Object.entries(originDataInfo).forEach(([key, value]) => {
    if (dataKeys.includes(key) && queryData[type][queryType][key] === typeof value) dataInfo[key] = value;
  });
  return dataInfo;
}
