const myLogger = (store) => (dispatch) => (action) => {
  console.log("[Middleware] Şimdiki state:", store.getState());
  console.log("[Middleware] Şu aksiyon dispatch edilecek:", action);
  const result = dispatch(deleteMovie(movies[sira].id));
  console.log("[Middleware] Sonraki state:", store.getState());
  return result;
};

export default myLogger;
