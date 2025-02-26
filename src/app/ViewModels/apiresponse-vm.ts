export interface APIResponseVM {

    success:boolean,
    data:any,
    messages:string[],
    PageNo?:number,
    TotalPages?:number,
    ItemsPerPage?:number
}

