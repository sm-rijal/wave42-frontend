import React from 'react'
import Layout from '../components/Layout'
import { Line, Pie } from 'react-chartjs-2'

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

    const dataPie = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <Layout title='Charts'>
        <div className='container'>
            <h3>Line Chart</h3>
            <div className='d-flex gap-5' style={{width: 550}}>
                <Line data={data} />
                <Pie data={dataPie} />
            </div>
        </div>
    </Layout>
  )
}

export default Charts