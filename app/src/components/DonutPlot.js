import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import homeStyle from '../../globals.css'
import {Tooltip} from "recharts";

Chart.register(ArcElement);
const label = ['test1', 'section 2', 'section 3', 'section 4', 'section 5', 'section 6'];
const data = {
 labels: label,
 datasets: [{
 label: ['Doughnut chart','Doughnut chart','Doughnut chart','Doughnut chart','Doughnut chart','Doughnut chart'],
 data: [65, 130, 83, 89, 76, 55, 40],
 backgroundColor: [
 'rgba(255, 99, 132)',
 'rgba(255, 159, 64)',
 'rgba(255, 205, 86)',
 'rgba(75, 192, 192)',
 'rgba(54, 162, 235)',
 'rgba(153, 102, 255)',
 'rgba(201, 203, 207)'
        ],
 borderColor: [
 'rgb(255, 99, 132)',
 'rgb(255, 159, 64)',
 'rgb(255, 205, 86)',
 'rgb(75, 192, 192)',
 'rgb(54, 162, 235)',
 'rgb(153, 102, 255)',
 'rgb(201, 203, 207)'
        ],
 borderWidth: 1,
 hoverBorderWidth: 8,
 hoverBorderColor: ['rgb(255, 99, 132)',
 'rgb(255, 159, 64)',
 'rgb(255, 205, 86)',
 'rgb(75, 192, 192)',
 'rgb(54, 162, 235)',
 'rgb(153, 102, 255)',
 'rgb(201, 203, 207)'],
    }]
};

const options = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            // Hier den aktuellen Namen des Feldes zurückgeben
            const label = context[0].label;
            return label;
          },
          label: function (context) {
            return context.formattedValue + ' units';
          },
        },
      },
    },
  };

const LineChartWithTooltip = () => {
 return (
 <div className={homeStyle.main}>
 <h2 className='font-extrabold'>Donut Sample</h2>
 <Doughnut
 data={data}
 options={options}
 /><Tooltip />
 </div>
        );
    };

export default LineChartWithTooltip;