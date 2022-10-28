import React from 'react'
import './Carloan.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axiosInstance from '../../utils/axios'
import { useEffect,useState } from 'react'
import baseUrl from '../../utils/urls'
import Carcards from './Carcards'

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['', '' ],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 90],
        backgroundColor: [
          'rgb(159, 180, 181)',
          'rgb(60, 119, 207)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        
        borderWidth: 1,
      },
    ],
  };

  
  
function Carloan() {

  const [cardata,setCardata]= useState([])
  const [userdetail,setUserdetail]=useState([])
let filteredvalues=[]
  const checkcondition=(element)=>{
    console.log(element)
           if((20/100)*userdetail.ntincome>element.monthly_payment)
           return element
  }

    useEffect(()=>{
       axiosInstance.get(`${baseUrl}/car-loans/`).then((res)=>{
          setCardata(res.data)
          console.log(res.data)

       }).then(()=>{
        axiosInstance.get(`${baseUrl}/user-detail/`).then((res)=>{
          setUserdetail(res.data)
        })
       }).then(()=>{
           filteredvalues=cardata.filter(checkcondition)
       })

    },[])

    
  return (
    <MainLayout>
    <div class="Carloan__container">
        <div class="Carloan__left">
            <h1>Car loan calulation</h1>
            <h1>pie chart</h1>
            <div className="Carloan_canvas">
            <p>blue-total income</p>
            <p>grey-10% income</p>
            
            <Pie style={{margin:'0 auto'}} data={data} />;
           
            
            </div>
                <div className="car_loans_container">

               
                  {filteredvalues.map((item)=>{
                  return(
                   <Carcards key={item.id} agent={ item.agent} carname={item.car_name} duration={item.duration} interestrate={item.interest_rate} phno={item.phno} />
   ) })}
 </div>
           
            
        </div>
        <div class="Carloan__right">
            <h1>add section</h1>
        </div>
    </div> 
    </MainLayout>
  )
}

export default Carloan