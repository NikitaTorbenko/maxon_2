<template>
    <div>
      <BarChart
        :chart-data="chartData"
        :chart-options="chartOptions"
      />
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { BarChart } from "vue-chart-3";
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
  
  // Регистрация компонентов Chart.js
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default defineComponent({
    name: "ChartComponent",
    components: {
      BarChart,
    },
    data() {
      return {
        // Данные для диаграммы
        chartData: {
          labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
          datasets: [
            {
              label: "Продажи",
              backgroundColor: "#42A5F5",
              data: [30, 50, 70, 40, 90, 60],
            },
          ],
        },
        // Опции для диаграммы
        chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "График продаж",
            },
          },
        },
      };
    },
  });
  </script>
  
  <style scoped>
  /* Дополнительное оформление */
  </style>
  