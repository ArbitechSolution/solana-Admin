export const resolveAfter2Seconds =(wait) =>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved..');
      }, wait);
    });
  }
  export const formatNumber = (num) =>{
    // return num.toLocaleString('en-US');
    return num.toLocaleString('en-US').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }