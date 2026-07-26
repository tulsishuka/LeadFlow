import { useEffect, useState } from "react";
import axios from "axios";


interface Activity {

_id:string;

type:string;

message:string;

createdAt:string;

user?:{
 name:string;
 email:string;
 role:string;
};

lead?:{
 name:string;
 email:string;
 company:string;
};

}



const Activity = ()=>{


const [activities,setActivities]=useState<Activity[]>([]);



useEffect(()=>{

fetchActivities();

},[]);



const fetchActivities=async()=>{

try{


const token=localStorage.getItem("token");


const {data}=await axios.get(

"http://localhost:3000/api/activities",

{
headers:{
Authorization:`Bearer ${token}`
}
}

);



setActivities(data.activities);



}catch(error){

console.log(error);

}

};




return (

<div className="p-6">


<h1 className="text-3xl font-bold mb-6">
Member Activity
</h1>



<div className="space-y-5">


{
activities
.filter(
(activity)=>activity.type==="note"
)
.map((activity)=>(


<div
key={activity._id}
className="
bg-white
shadow
rounded-xl
p-5
"
>


<div className="flex justify-between">


<div>


<h2 className="font-bold text-lg">

{activity.user?.name}

</h2>


<p className="text-sm text-gray-500">

{activity.user?.role}

</p>


</div>



<p className="text-sm text-gray-500">

{
new Date(activity.createdAt)
.toLocaleString()
}

</p>


</div>



<hr className="my-3"/>



<p className="font-semibold">

Note:
</p>


<p>
{activity.message}
</p>




<div className="mt-3 text-sm text-gray-600">


Lead:

<b>
 {activity.lead?.name}
</b>


<br/>


Company:

<b>
 {activity.lead?.company}
</b>


</div>



</div>


))

}


</div>


</div>

)

}


export default Activity;