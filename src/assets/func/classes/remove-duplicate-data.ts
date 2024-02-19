export const removeDuplicateData = (array:any[], data_filter:string ): any[]=>{
  const arrayMap = new Map<string, any>();
  array.forEach((data_only)=>{
    arrayMap.set(data_filter, data_only);
  })

  return Array.from(arrayMap.values());
}
