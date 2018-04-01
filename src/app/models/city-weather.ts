export class CityWeather {

  public city: string;
  public countryCode: string;
  public temp: string;
  public humidity: string;
  public pressure: string; 
  public updated_at: Date;

  constructor(params?:any){
    if(params) {
      this.city = params.name || null;
      this.countryCode = params.sys.country || null;
      this.temp = params.main.temp || null;
      this.humidity = params.main.humidity || null;
      this.pressure = params.main.pressure || null;
      this.updated_at = new Date();
    }
  }
  
}
