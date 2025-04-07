export interface Award {
    title: string;
    year: string;
    organization: string;
    description: string;
    videoUrl: string;
}

export const awards: Award[] = [
    {
        title: "Best branch of the future",
        year: "2013",
        organization: "Gildemeister Hyundai",
        description: "Awarded for innovative approach to automotive retail and customer experience",
        videoUrl: "https://vimeo.com/77175594",
    },
]; 