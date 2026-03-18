const uniqueKeywords = (keywords: string[]) => Array.from(new Set(keywords));

const coreKeywords = [
  "appopener",
  "app opener",
  "app scheduler",
  "auto open apps",
  "automatic app launcher",
  "open apps automatically",
  "schedule apps automatically",
  "task scheduling app",
  "app launch automation",
  "automatic app scheduler",
  "productivity app",
  "workflow automation",
  "app reminder",
  "task automation",
];

const downloadKeywords = [
  "app opener download",
  "app opener apk",
  "app scheduler download",
  "download app opener apk",
  "download app without google play",
  "direct apk download",
  "android app scheduler",
  "app opener for android",
  "schedule apps android",
  "productivity android app",
];

const intentKeywords = [
  "open in app",
  "open in app youtube",
  "youtube app opener link",
  "youtube open in app link",
  "app opener online",
  "app opener for pc",
];

export const seoKeywords = uniqueKeywords([
  ...coreKeywords,
  ...downloadKeywords,
  ...intentKeywords,
]);

export const pageKeywordGroups = {
  home: uniqueKeywords([
    ...seoKeywords,
    "app scheduler apk",
    "auto open apps android",
    "android productivity automation",
  ]),
  about: uniqueKeywords([
    ...seoKeywords,
    "about appopener",
    "app opener company",
  ]),
  blog: uniqueKeywords([
    ...seoKeywords,
    "app opener blog",
    "app scheduler tips",
    "android automation guide",
  ]),
  contact: uniqueKeywords([
    ...seoKeywords,
    "contact appopener",
    "appopener support",
  ]),
  privacy: uniqueKeywords([
    ...seoKeywords,
    "appopener privacy policy",
    "app scheduler privacy",
  ]),
  terms: uniqueKeywords([
    ...seoKeywords,
    "appopener terms of service",
    "app scheduler terms",
  ]),
};
