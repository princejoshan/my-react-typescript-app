export interface QueryEntry {
    queryType?: string;

    id: number;
    caseType: string;
    query: string;
    subCaseType: string;
  }
  
  export interface QueryState {
    entries: QueryEntry[];
    filteredEntries : QueryEntry[];
    searchQuery:string;
  }