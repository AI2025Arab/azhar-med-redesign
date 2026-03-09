export type SwotAnalysis = {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
};

export type ProjectImage = {
    id: string;
    original_url: string;
    redesign_url: string;
    title: string;
    aspect_ratio: "horizontal" | "vertical";
    description: string;
    swot_analysis: SwotAnalysis;
};

export type ExperimentImage = {
    id: string;
    url: string;
    title: string;
    isHorizontal: boolean;
};

export type ProjectDetails = {
    title: string;
    description: string;
    studentName: string;
    supervisor: string;
    course: string;
};

export type SiteDocImage = {
    id: string;
    url: string;
    title?: string;
    description?: string;
};

export type ProjectData = {
    project: ProjectDetails;
    images: ProjectImage[];
    experiments: ExperimentImage[];
    siteDocumentation: SiteDocImage[];
};
