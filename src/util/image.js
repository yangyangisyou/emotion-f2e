export const imageExistHandler = (url) => {
  const imgPromise = new Promise((resolve, reject) => {
    const imgElement = new Image();
    imgElement.addEventListener('load', function imgOnLoad() {
      resolve(this.src);
    });
    imgElement.addEventListener('error', () => reject());
    imgElement.src = url;
  });
  return imgPromise;
};
