export class CareerOneStopHelper {

  private userId: string;
  private baseUrl: string;
  private token: string;

  constructor( args = {} ) {
    for( const key of Object.keys( this ) ) {
      if( args[key] !== undefined ) {
        this[key] = args[key];
      }
    }

    return this;
  }

  //#region Getters and Setters
  setUserId( _userId: string ): CareerOneStopHelper {
    this.userId = _userId;

    return this;
  }

  setBaseUrl( _url: string ): CareerOneStopHelper {
    this.baseUrl = _url;

    return this;
  }

  setToken( _token: string ): CareerOneStopHelper {
    this.token = _token;

    return this;
  }

  private getUserId(): string {
    return this.userId;
  }

  private getBaseUrl(): string {
    return this.baseUrl;
  }

  private getToken(): string {
    return this.token;
  }

  //#endregion

}