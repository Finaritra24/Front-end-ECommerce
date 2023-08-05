export default class FetchHelper{

  static setUrl(url:string){
      return "http://localhost:8081/"+url;
  }
  static sendMethodGet=async (url:string)=>{
    const response=await fetch(FetchHelper.setUrl(url),{
        method:"GET"
    });
    const data=await response.json();
    return data;
  }


}
