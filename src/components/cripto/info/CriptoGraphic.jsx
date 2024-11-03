import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const CriptoGraphic = ({ cripto, history }) => {
    if (!history || history.length === 0) return <div>No hay datos disponibles para la gráfica.</div>;

    const data = {
        labels: history.map(item => new Date(item.date).toLocaleDateString()), 
        datasets: [
            {
                label: 'Precio USD',
                data: history.map(item => item.priceUsd), 
                fill: false,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: { display: true, text: 'Fecha', color: '#ffffff' },
                ticks: { color: '#ffffff' },
            },
            y: {
                title: { display: true, text: 'Precio USD', color: '#ffffff' },
                ticks: { color: '#ffffff' },
            },
        },
        plugins: {
            legend: { labels: { color: '#ffffff' } },
            tooltip: { titleColor: '#ffffff', bodyColor: '#ffffff' },
        },
    };

    return (
        <div className="chart-container">
            <h1>Historial de Precios</h1>
            <Line data={data} options={options} />
        </div>
    );
};

export default CriptoGraphic;
