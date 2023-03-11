import React from 'react'
import AdminSidebar from '../../../components/Admin/AdminSidebar/AdminSidebar'
import PlanLIst from '../../../components/Admin/PlanList/PlanLIst'

function PlanListPage() {
  return (
    <div className='d-flex'>
      
<AdminSidebar />

<PlanLIst />
    </div>
  )
}

export default PlanListPage
