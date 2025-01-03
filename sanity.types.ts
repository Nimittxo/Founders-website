/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Event = {
  _id: string;
  _type: 'event';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  summary?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  type?: 'webinar' | 'conference' | 'workshop';
  label?: string;
  author?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  published?: string;
  href?: string;
  slug?: Slug;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type HeroComponent = {
  _id: string;
  _type: 'heroComponent';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  showButton?: boolean;
  image1?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  image2?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  image3?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  image4?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type Cta = {
  _id: string;
  _type: 'cta';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: boolean;
  activateSecondaryButton?: boolean;
  showCTA?: boolean;
};

export type Faq = {
  _id: string;
  _type: 'faq';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  question?: string;
  answer?: string;
};

export type Feature = {
  _id: string;
  _type: 'feature';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  icon?: string;
};

export type JobCategory = {
  _id: string;
  _type: 'jobCategory';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  category?: string;
  openings?: Array<{
    title?: string;
    location?: string;
    link?: string;
    _key: string;
  }>;
};

export type Post = {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  categories?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'category';
  }>;
  publishedAt?: string;
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  >;
};

export type Author = {
  _id: string;
  _type: 'author';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type Category = {
  _id: string;
  _type: 'category';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
      listItem?: 'bullet';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
      _key: string;
    }
>;

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Event
  | HeroComponent
  | Cta
  | Faq
  | Feature
  | JobCategory
  | Post
  | Author
  | Category
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: CTA_QUERY
// Query: *[_type == "cta"]{  _id,  _createdAt,  title,  description,  primaryButtonText,  primaryButtonLink,  secondaryButtonText,  secondaryButtonLink,  variant,  activateSecondaryButton,  showCTA}
export type CTA_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  title: string | null;
  description: string | null;
  primaryButtonText: string | null;
  primaryButtonLink: string | null;
  secondaryButtonText: string | null;
  secondaryButtonLink: string | null;
  variant: boolean | null;
  activateSecondaryButton: boolean | null;
  showCTA: boolean | null;
}>;
// Variable: JOBS_QUERY
// Query: *[_type == "jobCategory"]{  _id,  _createdAt,  category,  openings[]{    title,    location,    link  }}
export type JOBS_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  category: string | null;
  openings: Array<{
    title: string | null;
    location: string | null;
    link: string | null;
  }> | null;
}>;
// Variable: FEATURES_QUERY
// Query: *[_type == "feature"]{  _id,  _createdAt,  title,  description,  icon}
export type FEATURES_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  title: string | null;
  description: string | null;
  icon: string | null;
}>;
// Variable: FAQS_QUERY
// Query: *[_type == "faq"]{  _id,  _createdAt,  question,  answer}
export type FAQS_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  question: string | null;
  answer: string | null;
}>;
// Variable: EVENTS_QUERY
// Query: *[_type == "event"] | order(published desc)[0...3]{  _id,  _createdAt,  id,  title,  summary,  image,  label,  author,  published,  href,  "slug": slug.current}
export type EVENTS_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  id: null;
  title: string | null;
  summary: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  label: string | null;
  author: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  } | null;
  published: string | null;
  href: string | null;
  slug: string | null;
}>;
// Variable: ALL_EVENTS_QUERY
// Query: *[_type == "event"] {  _id,  _createdAt,  title,  summary,  "slug": slug.current,  image,  label,  author,  published,  href}
export type ALL_EVENTS_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  title: string | null;
  summary: string | null;
  slug: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  label: string | null;
  author: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  } | null;
  published: string | null;
  href: string | null;
}>;
// Variable: EVENT_BY_SLUG_QUERY
// Query: *[_type == "event" && slug.current == $slug][0] {  _id,  _createdAt,  title,  summary,  content,  "slug": slug.current,  image,  label,  author,  published,  href}
export type EVENT_BY_SLUG_QUERYResult = {
  _id: string;
  _createdAt: string;
  title: string | null;
  summary: string | null;
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }> | null;
  slug: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  label: string | null;
  author: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  } | null;
  published: string | null;
  href: string | null;
} | null;
// Variable: HERO_QUERY
// Query: *[_type == "heroComponent"][0]{    _id,    _createdAt,    title,    subtitle,    buttonText,    buttonLink,    showButton,    image1,    image2,    image3,    image4}
export type HERO_QUERYResult = {
  _id: string;
  _createdAt: string;
  title: string | null;
  subtitle: string | null;
  buttonText: string | null;
  buttonLink: string | null;
  showButton: boolean | null;
  image1: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  image2: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  image3: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  image4: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
} | null;

// Source: ./src/sanity/lib/queries/ctaQuery.ts
// Variable: ctaQuery
// Query: *[_type == "cta"]{    _id,    _createdAt,    title,    description,    primaryButtonText,    primaryButtonLink,    secondaryButtonText,    secondaryButtonLink,    variant,    activateSecondaryButton,    showCTA}
export type CtaQueryResult = Array<{
  _id: string;
  _createdAt: string;
  title: string | null;
  description: string | null;
  primaryButtonText: string | null;
  primaryButtonLink: string | null;
  secondaryButtonText: string | null;
  secondaryButtonLink: string | null;
  variant: boolean | null;
  activateSecondaryButton: boolean | null;
  showCTA: boolean | null;
}>;

// Source: ./src/sanity/lib/queries/eventsQuery.ts
// Variable: eventsQuery
// Query: *[_type == "event"]{    _id,    _createdAt,    id,    title,    summary,    image,    label,    author,    published,    href}
export type EventsQueryResult = Array<{
  _id: string;
  _createdAt: string;
  id: null;
  title: string | null;
  summary: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  label: string | null;
  author: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  } | null;
  published: string | null;
  href: string | null;
}>;

// Source: ./src/sanity/lib/queries/faqsQuery.ts
// Variable: faqsQuery
// Query: *[_type == "faq"]{    _id,    _createdAt,    question,    answer}
export type FaqsQueryResult = Array<{
  _id: string;
  _createdAt: string;
  question: string | null;
  answer: string | null;
}>;

// Source: ./src/sanity/lib/queries/featuresQuery.ts
// Variable: featuresQuery
// Query: *[_type == "feature"]{    _id,    _createdAt,    title,    description,    icon}
export type FeaturesQueryResult = Array<{
  _id: string;
  _createdAt: string;
  title: string | null;
  description: string | null;
  icon: string | null;
}>;

// Source: ./src/sanity/lib/queries/jobsQuery.ts
// Variable: jobsQuery
// Query: *[_type == "jobCategory"]{    _id,    _createdAt,    category,    openings[]{      title,      location,      link    }}
export type JobsQueryResult = Array<{
  _id: string;
  _createdAt: string;
  category: string | null;
  openings: Array<{
    title: string | null;
    location: string | null;
    link: string | null;
  }> | null;
}>;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "cta"]{\n  _id,\n  _createdAt,\n  title,\n  description,\n  primaryButtonText,\n  primaryButtonLink,\n  secondaryButtonText,\n  secondaryButtonLink,\n  variant,\n  activateSecondaryButton,\n  showCTA\n}': CTA_QUERYResult;
    '*[_type == "jobCategory"]{\n  _id,\n  _createdAt,\n  category,\n  openings[]{\n    title,\n    location,\n    link\n  }\n}': JOBS_QUERYResult;
    '*[_type == "feature"]{\n  _id,\n  _createdAt,\n  title,\n  description,\n  icon\n}': FEATURES_QUERYResult;
    '*[_type == "faq"]{\n  _id,\n  _createdAt,\n  question,\n  answer\n}': FAQS_QUERYResult;
    '*[_type == "event"] | order(published desc)[0...3]{\n  _id,\n  _createdAt,\n  id,\n  title,\n  summary,\n  image,\n  label,\n  author,\n  published,\n  href,\n  "slug": slug.current\n}': EVENTS_QUERYResult;
    '*[_type == "event"] {\n  _id,\n  _createdAt,\n  title,\n  summary,\n  "slug": slug.current,\n  image,\n  label,\n  author,\n  published,\n  href\n}': ALL_EVENTS_QUERYResult;
    '*[_type == "event" && slug.current == $slug][0] {\n  _id,\n  _createdAt,\n  title,\n  summary,\n  content,\n  "slug": slug.current,\n  image,\n  label,\n  author,\n  published,\n  href\n}': EVENT_BY_SLUG_QUERYResult;
    '*[_type == "heroComponent"][0]{\n    _id,\n    _createdAt,\n    title,\n    subtitle,\n    buttonText,\n    buttonLink,\n    showButton,\n    image1,\n    image2,\n    image3,\n    image4\n}': HERO_QUERYResult;
    '*[_type == "cta"]{\n    _id,\n    _createdAt,\n    title,\n    description,\n    primaryButtonText,\n    primaryButtonLink,\n    secondaryButtonText,\n    secondaryButtonLink,\n    variant,\n    activateSecondaryButton,\n    showCTA\n}': CtaQueryResult;
    '*[_type == "event"]{\n    _id,\n    _createdAt,\n    id,\n    title,\n    summary,\n    image,\n    label,\n    author,\n    published,\n    href\n}': EventsQueryResult;
    '*[_type == "faq"]{\n    _id,\n    _createdAt,\n    question,\n    answer\n}': FaqsQueryResult;
    '*[_type == "feature"]{\n    _id,\n    _createdAt,\n    title,\n    description,\n    icon\n}': FeaturesQueryResult;
    '*[_type == "jobCategory"]{\n    _id,\n    _createdAt,\n    category,\n    openings[]{\n      title,\n      location,\n      link\n    }\n}': JobsQueryResult;
  }
}
