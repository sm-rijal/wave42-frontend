import React from 'react'
import Layout from '../components/Layout'
import { Line } from 'react-chartjs-2'

function Charts() {

    const labels = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun']
    const data = {
        labels,
        datasets: [{
            label: 'My Chart',
            backgroundColor: 'red',
            borderColor: 'orange',
            data: [0, 10, 5, 2, 15, 25]
        }]
    }

  return (
    <Layout title='Charts'>
        <h3>Line Chart</h3>
        <div>
            <Line data={data} />
        </div>
    </Layout>
  )
}

export default Charts