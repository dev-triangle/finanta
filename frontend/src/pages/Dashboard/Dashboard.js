import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './Dashboard.css'
import graph1 from '../../assets/jpeg/graph1.jpg'
import propic from '../../assets/jpeg/propic.jpg'

function Dashboard() {
  return (
    <MainLayout>
    <div className='dashboard__container'>
     <div className='dashboard__leftcont'>
      <div className='dashboard__graphchart'>
        <div className='dashboard__graphsection'>
        <img className='d__graph' src={graph1} alt="graph_ui" />
        </div>
        <div className='dashboard__chart'>
               <h3>your saving is: 100000</h3>
              <h3>your monthly income is: 200000</h3>
        </div>

      </div>
      <div className='dashboard__premium'>
       <div className='dashboard__upgrade'>
         <div className='dashboard__text'>
            <h3>Upgrade your plan</h3>
            <p>Try the unique features of our app</p>
            
         </div>
         <div className='dashboard__btns'>
            <div className='glow-on-hover'>Upgrade</div>
         </div>
         

       </div>
          
      </div>
     </div>
     <div className='dashboard__profile'>
      <div className='dashboard__namespic'>
       <img className='propic' src={propic}alt="graph_ui" />
       <div className='dashboard__names'>
         <h3>Catylyn</h3>
         <h5>Caty</h5>
       </div>
      </div>
     <div className='dashboard__details'>
       <p>Age : 18</p>
       <p>Gender : M</p>
       <p>Job : Architect</p>
     </div>
     </div>
    
    </div>
    </MainLayout>
  )
}

export default Dashboard