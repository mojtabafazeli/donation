export default async function getAllProvinces() {
    const res = await fetch('https://iran-locations-api.vercel.app/api/v1/states')

    return res.json();
}
