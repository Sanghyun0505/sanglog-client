export const QUERY_KEYS = Object.freeze({
  regist: {
    getAllRegistedPost: "regist/all",
    getRegistedPostById: (id: number) => [`regist/${id}`],
  },
  member: {
    getMyInfo: (id: number) => [`member/${id}`],
  },
});
