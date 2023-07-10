import Ipbase from "@everapi/ipbase-js";

export async function getTime() {
  try {
    const ipBase = new Ipbase(process.env.IPBASE_API_KEY);
    const res = await ipBase.info();

    return res;
  } catch (error) {
    console.log(error);
  }
}
