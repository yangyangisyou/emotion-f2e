// 首頁
export const initialHomeData = async (store, location) => {
  console.log('目前處理SSR的頁面為: ', location);
  // load API after client render.
  await store.dispatch(() => {});
};
