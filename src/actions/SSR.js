// 首頁
export const initialHomeData = async (store, location) => {
  console.log('目前處理SSR的頁面為: ', location);
  // 從這依序加入預載API
  await store.dispatch(() => {});
};
