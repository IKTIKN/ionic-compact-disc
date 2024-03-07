
export interface AlbumFirestore {
    createdOn: Date
    title: string
    artist: string
    genres: string[]
    releaseYear: number
    releaseId: number
    masterId: number 
    coverUrl: string
    barcode: string
    favorite: boolean
    scanUrls?: string[]
}