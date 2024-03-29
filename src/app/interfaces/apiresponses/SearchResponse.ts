export interface SearchResponse {
    pagination: Pagination
    results: Result[]
}

export interface Pagination {
    page: number
    pages: number
    per_page: number
    items: number
    urls: Urls
}

export interface Urls { }

export interface Result {
    country: string
    year?: string
    format: string[]
    label: string[]
    type: string
    genre: string[]
    style: string[]
    id: number
    barcode: string[]
    user_data: UserData
    master_id: number
    master_url: string
    uri: string
    catno: string
    title: string
    thumb: string
    cover_image: string
    resource_url: string
    community: Community
    format_quantity: number
    formats: Format[]
}

export interface UserData {
    in_wantlist: boolean
    in_collection: boolean
}

export interface Community {
    want: number
    have: number
}

export interface Format {
    name: string
    qty: string
    descriptions: string[]
    text?: string
}