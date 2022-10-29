const labels = [
    'MAX WALLET',
    'MAX BUY',
    'MAX SELL'

];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ["#FC85F2","#FDCC01","#299FD5"],

        data: [5, 1, 1],
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,

            }}
    }
};

