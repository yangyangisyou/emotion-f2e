import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
// import routePath from '../config/routePath';
import seoRouteMeta from '../config/seoRouteMeta';
import structuredData from '../util/structuredData';

const SEORoute = ({
  path, exact, component, initalData
}) => {
  const currentPage = 'root';
  console.log('seoRouteMeta[currentPage] ', seoRouteMeta[currentPage]);
  const {
    title, description, keywords, author, link, imgLink, copyright, pageType, itemType
  } = seoRouteMeta[currentPage];
  return (
    <>
      <Route key={ path } path={ path } exact={ exact } component={ component } initalData={ initalData } />
      <Helmet>
        {/* Update your html tag to include the itemscope and itemtype attributes. */}
        <html lang="zh" itemScope itemType={ `http://schema.org/${itemType}` } />
        <title>{title}</title>
        <meta name="description" content={ description } />
        <meta name="keywords" content={ keywords } />
        <meta name="page" content={ pageType } />
        <meta name="author" content={ author } />
        <meta name="copyright" content={ copyright } />
        <meta name="thumbnail" content={ imgLink } />

        {/* itemProp is HTML5 itemscope for search engine analyze */}
        <meta itemProp="name" content={ title } />
        <meta itemProp="url" content={ link } />
        <meta itemProp="description" content={ description } />
        <meta itemProp="about" content={ description } />
        <meta itemProp="abstract" content={ description } />
        <meta itemProp="image" content={ imgLink } />
        <meta itemProp="keywords" content={ keywords } />
        <meta itemProp="author" content={ author } />
        <meta itemProp="copyrightHolder" content={ copyright } />
        <meta itemProp="genre" name="genre" content="家教" />
        <meta itemProp="genre" name="genre" content="外包" />

        {/* Open Graph data */}
        <meta property="og:title" content={ title } />
        <meta property="og:description" content={ description } />
        <meta property="og:url" content={ link } />
        <meta property="og:ttl" content="345600" />
        <meta property="og:site_name" content={ title } />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ imgLink } />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Link relationship */}
        <link rel="author" href={ link } />
        <link rel="publisher" href={ link } />

        {/* Twitter Card data */}
        <meta name="twitter:title" content={ title } />
        <meta name="twitter:description" content={ description } />
        <meta name="twitter:site" content="@test" />
        <meta name="twitter:creator" content={ author } />
        <meta name="twitter:card" content={ imgLink } />
        <meta name="twitter:image:src" content={ imgLink } />

        {/* ld-json */}
        <script type="application/ld+json">{structuredData(currentPage, seoRouteMeta[currentPage])}</script>

        {/* Facebook data */}
        {/* <meta property="fb:admins" content="Facebook numberic ID" /> */}
        {/* <meta property="fb:app_id" content="Facebook numberic ID" /> */}

        {/* 文章用 meta */}
        {/* <meta itemProp="tag" property="article:tag" content="" /> */}
        {/* <meta itemProp="genre" name="genre" content='' /> */}
      </Helmet>
    </>
  );
};

export default SEORoute;
