const labels = [
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "sun"
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'hsl(10, 79%, 65%)',
    borderColor: 'hsl(10, 79%, 65%)',
    borderRadius: '5',
    hoverBackgroundColor: 'hsl(186, 34%, 60%)',
    display: false,
    data: [0, 10, 5, 2, 20, 30, 45],
  }],
};


const config = {
  type: 'bar',
  data: data,
  options: {
  scales: {
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      grid: {
        display:false,
      },
    }, 
  }
  },
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);