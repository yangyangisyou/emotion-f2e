import routePath from '../config/routePath';

// 結構化資料的運作方式參考: https://developers.google.com/search/docs/guides/intro-structured-data
const structuredData = (currentPage, seoMeta) => {
  const {
    title, description, link, imgLink, pageType
  } = seoMeta;
  switch (currentPage) {
    case routePath.root: {
      return {
        '@context': 'http://schema.org/',
        '@type': pageType,
        name: title,
        brand: title,
        image: imgLink,
        description: description,
        url: link,
      };
    }
    default: {
      return null;
    }
  }
};

export default structuredData;
