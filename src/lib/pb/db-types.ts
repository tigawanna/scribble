/**
 * This file was @generated using typed-pocketbase
 */

// https://pocketbase.io/docs/collections/#base-collection
type BaseCollectionRecord = {
    id: string;
    created: string;
    updated: string;
};

// https://pocketbase.io/docs/collections/#auth-collection
type AuthCollectionRecord = {
    id: string;
    created: string;
    updated: string;
    username: string;
    email: string;
    emailVisibility: boolean;
    verified: boolean;
};

// https://pocketbase.io/docs/collections/#view-collection
type ViewCollectionRecord = {
    id: string;
};

// utilities

type MaybeArray<T> = T | T[];

// ===== sherpa_user =====

export type SherpaUserResponse = {
    github_username?: string;
    linkedin_username?: string;
    country?: string;
    city?: string;
    phone?: string;
    skills?: string;
    last_resume_on?: string;
    last_letter_on?: string;
    langauges?: string;
    avatar?: string;
    avatar_url?: string;
    about_me?: string;
    github_access_token?: string;
} & AuthCollectionRecord;

export type SherpaUserCreate = {
    github_username?: string;
    linkedin_username?: string;
    country?: string;
    city?: string;
    phone?: string;
    skills?: string;
    last_resume_on?: string;
    last_letter_on?: string;
    langauges?: string;
    avatar?: string;
    avatar_url?: string ;
    about_me?: string;
    github_access_token?: string;
};

export type SherpaUserUpdate = {
    github_username?: string;
    linkedin_username?: string;
    country?: string;
    city?: string;
    phone?: string;
    skills?: string;
    last_resume_on?: string;
    last_letter_on?: string;
    langauges?: string;
    avatar?: string;
    avatar_url?: string ;
    about_me?: string;
    github_access_token?: string;
};

export type SherpaUserCollection = {
    type: 'auth';
    collectionId: 'rk2hpsmgen3ohg8';
    collectionName: 'sherpa_user';
    response: SherpaUserResponse;
    create: SherpaUserCreate;
    update: SherpaUserUpdate;
    relations: {
        'sherpa_projects(user)': SherpaProjectsCollection[];
        'sherpa_education(user)': SherpaEducationCollection[];
        'sherpa_experience(user)': SherpaExperienceCollection[];
        'sherpa_content(user)': SherpaContentCollection[];
        'sherpa_hackathon(user)': SherpaHackathonCollection[];
        'sherpa_internship(user)': SherpaInternshipCollection[];
        'sherpa_job_application(user)': SherpaJobApplicationCollection[];
        'sherpa_resume(user)': SherpaResumeCollection[];
    };
};

// ===== sherpa_projects =====

export type SherpaProjectsResponse = {
    name: string;
    description: string;
    repo_url: string;
    image_url?: string;
    languages?: string;
    libraries?: string;
    image?: string;
    user: string;
} & BaseCollectionRecord;

export type SherpaProjectsCreate = {
    name: string;
    description: string;
    repo_url: string ;
    image_url?: string ;
    languages?: string;
    libraries?: string;
    image?: string;
    user: string;
};

export type SherpaProjectsUpdate = {
    name?: string;
    description?: string;
    repo_url?: string ;
    image_url?: string ;
    languages?: string;
    libraries?: string;
    image?: string;
    user?: string;
};

export type SherpaProjectsCollection = {
    type: 'base';
    collectionId: 's5o7w1pgfdcqm6f';
    collectionName: 'sherpa_projects';
    response: SherpaProjectsResponse;
    create: SherpaProjectsCreate;
    update: SherpaProjectsUpdate;
    relations: {
        user: SherpaUserCollection;
        'sherpa_resume(project)': SherpaResumeCollection[];
    };
};

// ===== sherpa_education =====

export type SherpaEducationResponse = {
    school: string;
    qualification: 'Certificate' | 'Bachelors' | 'Masters' | 'Ph';
    field: string;
    from: string;
    to: string;
    user: string;
} & BaseCollectionRecord;

export type SherpaEducationCreate = {
    school: string;
    qualification: 'Certificate' | 'Bachelors' | 'Masters' | 'Ph';
    field: string;
    from: string;
    to: string;
    user: string;
};

export type SherpaEducationUpdate = {
    school?: string;
    qualification?: 'Certificate' | 'Bachelors' | 'Masters' | 'Ph';
    field?: string;
    from?: string;
    to?: string;
    user?: string;
};

export type SherpaEducationCollection = {
    type: 'base';
    collectionId: 'pxcw0ing5irbeln';
    collectionName: 'sherpa_education';
    response: SherpaEducationResponse;
    create: SherpaEducationCreate;
    update: SherpaEducationUpdate;
    relations: {
        user: SherpaUserCollection;
        'sherpa_resume(education)': SherpaResumeCollection[];
    };
};

// ===== sherpa_experience =====

export type SherpaExperienceResponse = {
    position: string;
    company: string;
    description: string;
    user: string;
    from: string;
    to: string;
} & BaseCollectionRecord;

export type SherpaExperienceCreate = {
    position: string;
    company: string;
    description: string;
    user: string;
    from: string;
    to: string;
};

export type SherpaExperienceUpdate = {
    position?: string;
    company?: string;
    description?: string;
    user?: string;
    from?: string;
    to?: string;
};

export type SherpaExperienceCollection = {
    type: 'base';
    collectionId: 'p2jghljn8ui4yb1';
    collectionName: 'sherpa_experience';
    response: SherpaExperienceResponse;
    create: SherpaExperienceCreate;
    update: SherpaExperienceUpdate;
    relations: {
        user: SherpaUserCollection;
        'sherpa_resume(experience)': SherpaResumeCollection[];
    };
};

// ===== sherpa_content =====

export type SherpaContentResponse = {
    title: string;
    type?: 'Video' | 'Blog' | 'Gist' | 'Podcast';
    description: string;
    content_url: string;
    user: string;
} & BaseCollectionRecord;

export type SherpaContentCreate = {
    title: string;
    type?: 'Video' | 'Blog' | 'Gist' | 'Podcast';
    description: string;
    content_url: string ;
    user: string;
};

export type SherpaContentUpdate = {
    title?: string;
    type?: 'Video' | 'Blog' | 'Gist' | 'Podcast';
    description?: string;
    content_url?: string ;
    user?: string;
};

export type SherpaContentCollection = {
    type: 'base';
    collectionId: 'c9iduxiox7kxnvk';
    collectionName: 'sherpa_content';
    response: SherpaContentResponse;
    create: SherpaContentCreate;
    update: SherpaContentUpdate;
    relations: {
        user: SherpaUserCollection;
        'sherpa_resume(content)': SherpaResumeCollection[];
    };
};

// ===== sherpa_hackathon =====

export type SherpaHackathonResponse = {
    name: string;
    description: string;
    technologies: string;
    from: string;
    to: string;
    link: string;
    user: string;
} & BaseCollectionRecord;

export type SherpaHackathonCreate = {
    name: string;
    description: string;
    technologies: string;
    from: string;
    to: string;
    link: string ;
    user: string;
};

export type SherpaHackathonUpdate = {
    name?: string;
    description?: string;
    technologies?: string;
    from?: string;
    to?: string;
    link?: string ;
    user?: string;
};

export type SherpaHackathonCollection = {
    type: 'base';
    collectionId: '8fxbokb9tx7tb31';
    collectionName: 'sherpa_hackathon';
    response: SherpaHackathonResponse;
    create: SherpaHackathonCreate;
    update: SherpaHackathonUpdate;
    relations: {
        user: SherpaUserCollection;
        'sherpa_resume(hackathon)': SherpaResumeCollection[];
    };
};

// ===== sherpa_internship =====

export type SherpaInternshipResponse = {
    description: string;
    role: string;
    company: string;
    from: string;
    to: string;
    user: string;
} & BaseCollectionRecord;

export type SherpaInternshipCreate = {
    description: string;
    role: string;
    company: string;
    from: string;
    to: string;
    user: string;
};

export type SherpaInternshipUpdate = {
    description?: string;
    role?: string;
    company?: string;
    from?: string;
    to?: string;
    user?: string;
};

export type SherpaInternshipCollection = {
    type: 'base';
    collectionId: '1drmbc5pextvec1';
    collectionName: 'sherpa_internship';
    response: SherpaInternshipResponse;
    create: SherpaInternshipCreate;
    update: SherpaInternshipUpdate;
    relations: {
        user: SherpaUserCollection;
        'sherpa_resume(internship)': SherpaResumeCollection[];
    };
};

// ===== sherpa_job_application =====

export type SherpaJobApplicationResponse = {
    title: string;
    description: string;
    posting_url: string;
    cover_letter?: string;
    resume?: string;
    user: string;
} & BaseCollectionRecord;

export type SherpaJobApplicationCreate = {
    title: string;
    description: string;
    posting_url: string ;
    cover_letter?: string;
    resume?: string;
    user: string;
};

export type SherpaJobApplicationUpdate = {
    title?: string;
    description?: string;
    posting_url?: string ;
    cover_letter?: string;
    resume?: string;
    user?: string;
};

export type SherpaJobApplicationCollection = {
    type: 'base';
    collectionId: 'qw5z9dkd7443bfw';
    collectionName: 'sherpa_job_application';
    response: SherpaJobApplicationResponse;
    create: SherpaJobApplicationCreate;
    update: SherpaJobApplicationUpdate;
    relations: {
        user: SherpaUserCollection;
        'sherpa_resume(job_application)': SherpaResumeCollection[];
    };
};

// ===== sherpa_resume =====

export type SherpaResumeResponse = {
    project?: string;
    internship?: string;
    education?: string;
    hackathon?: string;
    content?: string;
    experience?: string;
    job_application?: string;
    user: string;
    body?: string;
} & BaseCollectionRecord;

export type SherpaResumeCreate = {
    project?: string;
    internship?: string;
    education?: string;
    hackathon?: string;
    content?: string;
    experience?: string;
    job_application?: string;
    user: string;
    body?: string;
};

export type SherpaResumeUpdate = {
    project?: string;
    internship?: string;
    education?: string;
    hackathon?: string;
    content?: string;
    experience?: string;
    job_application?: string;
    user?: string;
    body?: string;
};



export type SherpaResumeCollection = {
    type: 'base';
    collectionId: 'a4fxdhn0qbp2edh';
    collectionName: 'sherpa_resume';
    response: SherpaResumeResponse;
    create: SherpaResumeCreate;
    update: SherpaResumeUpdate;
    relations: {
        project: SherpaProjectsCollection;
        internship: SherpaInternshipCollection;
        education: SherpaEducationCollection;
        hackathon: SherpaHackathonCollection;
        content: SherpaContentCollection;
        experience: SherpaExperienceCollection;
        job_application: SherpaJobApplicationCollection;
        user: SherpaUserCollection;
    };
};

// ===== scribble_posts =====

export type ScribblePostsResponse = {
    title?: string;
    content?: string;
    contentMarkdown?: string;
    user_id?: string;
    status?: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED';
    tags?: any;
    publishingDetails?: any;
    devToArticleCoverImagePath?: string;
    devToArticleId?: string;
    devToBlogUrl?: string;
    hashNodeArticleCoverImagePath?: string;
    hashNodeArticleId?: string;
    hashNodeBlogUrl?: string;
    last_published_at?: string;
    mediumArticleId?: string;
    mediumBlogUrl?: string;
    post_media?: Array<string>;
} & BaseCollectionRecord;

export type ScribblePostsCreate = {
    title?: string;
    content?: string;
    contentMarkdown?: string;
    user_id?: string;
    status?: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED';
    tags?: any;
    publishingDetails?: any;
    devToArticleCoverImagePath?: string;
    devToArticleId?: string;
    devToBlogUrl?: string;
    hashNodeArticleCoverImagePath?: string;
    hashNodeArticleId?: string;
    hashNodeBlogUrl?: string;
    last_published_at?: string;
    mediumArticleId?: string;
    mediumBlogUrl?: string;
    post_media?: MaybeArray<string>;
};

export type ScribblePostsUpdate = {
    title?: string;
    content?: string;
    contentMarkdown?: string;
    user_id?: string;
    status?: 'DRAFT' | 'SCHEDULED' | 'PUBLISHED';
    tags?: any;
    publishingDetails?: any;
    devToArticleCoverImagePath?: string;
    devToArticleId?: string;
    devToBlogUrl?: string;
    hashNodeArticleCoverImagePath?: string;
    hashNodeArticleId?: string;
    hashNodeBlogUrl?: string;
    last_published_at?: string;
    mediumArticleId?: string;
    mediumBlogUrl?: string ;
    post_media?: MaybeArray<string>;
    'post_media-'?: MaybeArray<string>;
};
export type ScribblePostsCollection = {
    type: 'base';
    collectionId: '6itgi5d0trmi1yb';
    collectionName: 'scribble_posts';
    response: ScribblePostsResponse;
    create: ScribblePostsCreate;
    update: ScribblePostsUpdate;
    relations: {};
};

// ===== scribble_user =====

export type ScribbleApiKeys = {
    hashnode?: {
        key: string;
        username: string;
    };
    devto?:{
        key: string;
        username: string;
    };
    medium?: {
        key: string;
        username: string;
    }
    github?: {
        key: string;
        username: string;
    }
};


export type ScribbleUserResponse = {
    github_username?: string;
    linkedin_username?: string;
    country?: string;
    city?: string;
    phone?: string;
    langauges?: string;
    avatar?: string;
    about_me?: string;
    keys?: ScribbleApiKeys;
    github_access_token?: string;
} & AuthCollectionRecord;

export type ScribbleUserCreate = {
    github_username?: string;
    linkedin_username?: string;
    country?: string;
    city?: string;
    phone?: string;
    langauges?: string;
    avatar?: string;
    about_me?: string;
    keys?: ScribbleApiKeys;
    github_access_token?: string;
};

export type ScribbleUserUpdate = {
    github_username?: string;
    linkedin_username?: string;
    country?: string;
    city?: string;
    phone?: string;
    langauges?: string;
    avatar?: string;
    about_me?: string;
    keys?:ScribbleApiKeys;
    github_access_token?: string;
};

export type ScribbleUserCollection = {
    type: 'auth';
    collectionId: '51hjtt652zdrck6';
    collectionName: 'scribble_user';
    response: ScribbleUserResponse;
    create: ScribbleUserCreate;
    update: ScribbleUserUpdate;
    relations: {};
};

// ===== scribble_providers =====

export type ScribbleProvidersResponse = {
    token?: string;
    name?: 'devto' | 'mediaum' | 'hashnode';
    other?: any;
} & BaseCollectionRecord;

export type ScribbleProvidersCreate = {
    token?: string;
    name?: 'devto' | 'mediaum' | 'hashnode';
    other?: any;
};

export type ScribbleProvidersUpdate = {
    token?: string;
    name?: 'devto' | 'mediaum' | 'hashnode';
    other?: any;
};

export type ScribbleProvidersCollection = {
    type: 'base';
    collectionId: 'hcmninkr66kpow4';
    collectionName: 'scribble_providers';
    response: ScribbleProvidersResponse;
    create: ScribbleProvidersCreate;
    update: ScribbleProvidersUpdate;
    relations: {};
};

// ===== Schema =====

export type Schema = {
    // sherpa_user: SherpaUserCollection;
    // sherpa_projects: SherpaProjectsCollection;
    // sherpa_education: SherpaEducationCollection;
    // sherpa_experience: SherpaExperienceCollection;
    // sherpa_content: SherpaContentCollection;
    // sherpa_hackathon: SherpaHackathonCollection;
    // sherpa_internship: SherpaInternshipCollection;
    // sherpa_job_application: SherpaJobApplicationCollection;
    sherpa_resume: SherpaResumeCollection;
    scribble_posts: ScribblePostsCollection;
    scribble_user: ScribbleUserCollection;
    scribble_providers: ScribbleProvidersCollection;
};
