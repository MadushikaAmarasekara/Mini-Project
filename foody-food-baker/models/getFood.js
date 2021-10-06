
import db from './firebaseconfig'
export default async function GetFood(){
  const foodData = []
  var response = await db.collection('food').get()

  response.forEach((docs)=>{
    foodData.push(docs.data())
  })
  //console.log(foodData);
  return foodData;

}