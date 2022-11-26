export type StrapiResponseData<T = any> = {
    "id": number,
    "attributes": T,
    "meta": Record<string, any>
}

export type StrapiResponse<T = any> = {
    data: StrapiResponseData<T>,
    "meta": Record<string, any>
}

export type StrapiImage = {
    attributes: {
        hash: string,
        height: number,
        mime: "image/png" | string,
        name: string,
        previewUrl: string,
        provider: 'local',
        provider_metadata?: Record<string, any>,
        size: number,
        updatedAt: string,
        url: string,
        width: number
    }
}