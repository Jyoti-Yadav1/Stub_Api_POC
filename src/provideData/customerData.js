export async function  getCustomers(){
    try {
      const res = await fetch(
        "https://run.mocky.io/v3/7bf448cb-52b6-4d34-a8f2-17bdd3b29584"
      );
      console.log(res);
      const data = res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
};
