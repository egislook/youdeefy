export function compose(){
  return Array.from(arguments).reverse().reduce( function(obj, nextFn){ return Object.assign(obj, nextFn(obj)) }, {} );
}