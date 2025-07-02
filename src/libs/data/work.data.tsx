export type Work = {
  company: string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'BDCalling IT LTD.',
    deliverable: [
      'At BDCalling IT, I worked as a Frontend Developer, focusing on building and maintaining responsive websites for clients across various industries. My role involved using technologies like React, Next.js, and CMS platforms to deliver optimized, user-friendly digital experiences.',
    ],
    fromDate: '2023-08-15',
    toDate: 'Present',
  },
  {
    company: 'VisitBD Project',
    deliverable: [
      'VisitBD is a tourism-focused web platform that helps users explore the beauty, culture, and destinations of Bangladesh. I worked as the Frontend Developer using Next.js, collaborating with a 3-person team including a backend and API developer.',
    ],
    fromDate: '2022-10-01',
    toDate: '2023-03-25',
  },
]
