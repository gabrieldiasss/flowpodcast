export interface Episodes {
    id: string;
    title: string;
    duration: string;
    cover: string;
    mp3: string;
}

export interface IEpisode {
    episode: {
        title: string;
        description: string;
        created_at: string;
        duration: string;
        mp3: string;
        cover: string;
        id: number;
    }
}

export interface ISelectedEpisode {
    mp3: string;
    cover: string;
}