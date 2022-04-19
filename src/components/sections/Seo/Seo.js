import React from "react"
import Helmet from "react-helmet"

export default function Seo({
  meta_description,
  lang = "en",
  title,
  twitter_site,
  og_url,
}) {
  const SITE_NAME = "Demo Praca Inznierska WSTI"
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${SITE_NAME}`}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: meta_description,
        },
        {
          property: `og:site_name`,
          content: SITE_NAME,
        },
        {
          property: `og:url`,
          content: og_url,
        },
        {
          property: `og:title`,
          content: title || SITE_NAME,
        },
        {
          property: `og:description`,
          content: meta_description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:site`,
          content: twitter_site || "@twitter",
        },
        {
          property: `twitter:url`,
          content: og_url,
        },
        {
          property: `twitter:title`,
          content: SITE_NAME,
        },
        {
          property: `twitter:description`,
          content: meta_description,
        },
      ]}
    />
  )
}
