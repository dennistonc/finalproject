import React from 'react'
import Layout from './layout'

const Home = () => (
    (<Layout title='Home' description='add product' className='container col-md-8 offset-md-2'>
 <form>
      <div className="form-group">
          <label className="text-muted">Product Name</label>
          <input type="text" className="form-control"/>
      </div>

      <div className="form-group">
          <label className="text-muted">Quantity</label>
          <input type="number" className="form-control"/>
      </div>

      <div className="form-group">
          <label className="text-muted">Price</label>
          <input type="number" className="form-control"/>
      </div>

      <div className="form-group">
          <label className="text-muted">Quick Descriptions</label>
          <input type="text" className="form-control"/>
      </div>

      <div className="form-group">
          <label className="text-muted">imageURL</label>
          <input type="string" className="form-control"/>
      </div>


 </form>
    </Layout>
    )
)
export default Home