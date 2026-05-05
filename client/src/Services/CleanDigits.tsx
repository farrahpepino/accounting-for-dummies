export function CleanDigits(value: string){
  if (value == null) return ""; 
  const cleanStr = value.endsWith(".") ? value.replace(".", "") : value;    
  return cleanStr;
}