import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SellerDashboard = () => {
    const data = useSelector((data)=>data.userData.userRole)

    const navigate = useNavigate()

    // useEffect(()=>{
    //     if(data !== "SELLER"){
    //         navigate("/seller/login")
    //     }
    // } , [])
    
  return (
    <div>Seller Dashboard</div>
  )
}

export default SellerDashboard