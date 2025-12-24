import { useEffect } from 'react'

function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = '/images/complete-care-kit-standard.jpg',
  ogType = 'website'
}) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    if (description) {
      metaDescription.setAttribute('content', description)
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // Update or create canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    if (canonicalUrl) {
      canonical.setAttribute('href', canonicalUrl)
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonicalUrl }
    ]

    ogTags.forEach(tag => {
      if (tag.content) {
        let ogTag = document.querySelector(`meta[property="${tag.property}"]`)
        if (!ogTag) {
          ogTag = document.createElement('meta')
          ogTag.setAttribute('property', tag.property)
          document.head.appendChild(ogTag)
        }
        ogTag.setAttribute('content', tag.content)
      }
    })

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ]

    twitterTags.forEach(tag => {
      if (tag.content) {
        let twitterTag = document.querySelector(`meta[name="${tag.name}"]`)
        if (!twitterTag) {
          twitterTag = document.createElement('meta')
          twitterTag.setAttribute('name', tag.name)
          document.head.appendChild(twitterTag)
        }
        twitterTag.setAttribute('content', tag.content)
      }
    })

    // Geo targeting for UAE and Qatar
    let geoRegion = document.querySelector('meta[name="geo.region"]')
    if (!geoRegion) {
      geoRegion = document.createElement('meta')
      geoRegion.setAttribute('name', 'geo.region')
      document.head.appendChild(geoRegion)
    }
    geoRegion.setAttribute('content', 'AE-QA') // UAE and Qatar

    let geoPlacename = document.querySelector('meta[name="geo.placename"]')
    if (!geoPlacename) {
      geoPlacename = document.createElement('meta')
      geoPlacename.setAttribute('name', 'geo.placename')
      document.head.appendChild(geoPlacename)
    }
    geoPlacename.setAttribute('content', 'United Arab Emirates, Qatar')

  }, [title, description, keywords, canonicalUrl, ogImage, ogType])

  return null
}

export default SEO

