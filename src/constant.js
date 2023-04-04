export const resolveAfter2Seconds =(wait) =>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved..');
      }, wait);
    });
  }
  export const formatNumber = (num) =>{
    return num.toLocaleString(undefined,
      {'minimumFractionDigits':0,'maximumFractionDigits':4}).toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",")
  }