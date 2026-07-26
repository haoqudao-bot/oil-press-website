import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    description: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }).optional(),
    category: z.string(),
    model: z.string(),
    modelFr: z.string().default(''),
    modelId: z.string().default(''),
    images: z.array(z.string()),
    specifications: z.array(z.object({
      name: z.string(),
      value: z.string(),
    })),
    specificationsFr: z.array(z.object({
      name: z.string(),
      value: z.string(),
    })).default([]),
    specificationsAr: z.array(z.object({
      name: z.string(),
      value: z.string(),
    })).default([]),
    specificationsId: z.array(z.object({
      name: z.string(),
      value: z.string(),
    })).default([]),
    featured: z.boolean().default(false),
    related: z.array(z.string()).default([]),
    applicableSeeds: z.array(z.string()).default([]),
    applicableSeedsFr: z.array(z.string()).default([]),
    applicableSeedsAr: z.array(z.string()).default([]),
    applicableSeedsId: z.array(z.string()).default([]),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    faqFr: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    faqAr: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    faqId: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    videoUrl: z.string().default(''),
    seoKeywords: z.array(z.string()).default([]),
    updatedAt: z.date().default(() => new Date()),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    icon: z.string(),
    description: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    order: z.number().default(99),
  }),
});

const solutions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    seedName: z.string(),
    icon: z.string(),
    description: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    recommendedProducts: z.array(z.string()).default([]),
    processSteps: z.array(z.object({
      step: z.string(),
      description: z.string(),
    })).default([]),
    processStepsFr: z.array(z.object({
      step: z.string(),
      description: z.string(),
    })).default([]),
    processStepsAr: z.array(z.object({
      step: z.string(),
      description: z.string(),
    })).default([]),
    processStepsId: z.array(z.object({
      step: z.string(),
      description: z.string(),
    })).default([]),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    faqFr: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    faqAr: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    faqId: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    seoKeywords: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    type: z.enum(['comparison', 'guide', 'blog', 'news']).default('guide'),
    description: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    publishedAt: z.date().default(() => new Date()),
    seoKeywords: z.array(z.string()).default([]),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    description: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    publishedAt: z.date().default(() => new Date()),
    seoKeywords: z.array(z.string()).default([]),
  }),
});

export const collections = { products, categories, solutions, resources, news };
