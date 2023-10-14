export const removeDuplicateData = (array:any[], data_filter?:string ): any[]=>{
  const arrayMap = new Map<any, any>();
  if(data_filter){
    array.forEach((data_only)=>{
      arrayMap.set(data_filter??'', data_only);
    })
  }else{
    array.forEach((data_only)=>{
      arrayMap.set(data_only, data_only);
    });
  }
  return Array.from(arrayMap.values());
}
