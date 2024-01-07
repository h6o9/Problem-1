/// SessionStorage

async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
      resolve("Data fetch Sucessfully Yahoo")
      }, 2000);
    })
  }
  
  
  async function useFunction() {
  try{
    const usage = await fetchData();
    sessionStorage.setItem('using Data', usage);
    const getData = sessionStorage.getItem('using Data');
    console.log("Data Fetch Sucessfully:", getData);
  } catch(erorr) {
    console.log("Data is not fatch sucessfully");
  }
    
  }

  useFunction();