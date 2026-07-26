/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Trash2,
  Pencil
  
} from "lucide-react";


interface Member {
  _id:string;
  name:string;
  email:string;
}


interface Lead {

  _id:string;
  name:string;
  email:string;
  phone:string;
  company?:string;
  message:string;
  status:string;

  assignedTo?:Member;

}



const AdminLeads = () => {


const [leads,setLeads] = useState<Lead[]>([]);
const [members,setMembers] = useState<Member[]>([]);
const [loading,setLoading] = useState(true);



const token = localStorage.getItem("token");



useEffect(()=>{

 fetchLeads();
 fetchMembers();

},[]);





const fetchLeads = async()=>{

try{

const {data}=await axios.get(
"http://localhost:3000/api/leads",
{
headers:{
Authorization:`Bearer ${token}`
}
}
);


setLeads(data.leads);


}catch(err){

console.log(err);

}
finally{

setLoading(false);

}

};





const fetchMembers = async()=>{


try{


const {data}=await axios.get(
"http://localhost:3000/api/users/members",
{
headers:{
Authorization:`Bearer ${token}`
}
}
);


setMembers(data.users);



}catch(err){

console.log(err);

}


};






// Assign Lead

const assignLead = async(
leadId:string,
userId:string
)=>{


try{


await axios.put(

`http://localhost:3000/api/leads/${leadId}/assign`,

{
userId
},

{
headers:{
Authorization:`Bearer ${token}`
}
}

);


fetchLeads();


}catch(err){

console.log(err);

}


};







// Delete Lead

const deleteLead = async(id:string)=>{


const confirmDelete =
window.confirm(
"Delete this lead?"
);


if(!confirmDelete)
return;



try{


await axios.delete(

`http://localhost:3000/api/leads/${id}`,

{
headers:{
Authorization:`Bearer ${token}`
}
}

);



fetchLeads();



}catch(err){

console.log(err);

}



};







// Edit Lead

const editLead = async(lead:Lead)=>{


const name = prompt(
"Lead Name",
lead.name
);


if(!name)
return;



const phone = prompt(
"Phone",
lead.phone
);



try{


await axios.put(

`http://localhost:3000/api/leads/${lead._id}`,

{
name,
phone
},

{
headers:{
Authorization:`Bearer ${token}`
}
}

);



fetchLeads();



}catch(err){

console.log(err);

}



};







if(loading){

return <h1>Loading...</h1>

}





return (

<div className="p-6 bg-slate-50 min-h-screen">


<h1 className="text-3xl font-bold mb-6">
Manage Leads
</h1>



<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">



{
leads.map((lead)=>(


<div
key={lead._id}
className="bg-white rounded-2xl p-5 shadow"
>



<div className="flex justify-between">


<div>

<h2 className="font-bold text-lg">
{lead.name}
</h2>


<p className="text-sm text-slate-500">
{lead.email}
</p>


<p>
{lead.phone}
</p>


</div>




<div className="flex gap-2">


<button
onClick={()=>editLead(lead)}
>

<Pencil
className="text-blue-600"
/>

</button>



<button
onClick={()=>deleteLead(lead._id)}
>

<Trash2
className="text-red-600"
/>

</button>



</div>


</div>





<p className="mt-4 text-sm">
{lead.message}
</p>





<div className="mt-5">


<label className="text-sm font-semibold">
Assign Member
</label>



<select

value={
lead.assignedTo?._id || ""
}

onChange={(e)=>
assignLead(
lead._id,
e.target.value
)
}

className="mt-2 w-full border rounded-lg p-2"

>


<option value="">
Select Member
</option>



{
members.map(member=>(

<option
key={member._id}
value={member._id}
>

{member.name}

</option>


))

}



</select>



</div>






<div className="mt-4">


<span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">

{lead.status}

</span>


</div>



</div>


))

}



</div>


</div>

);


};



export default AdminLeads;