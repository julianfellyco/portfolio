import { useEffect } from 'react'
import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import AOS from 'aos'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  const data = {
    labels: ['JavaScript', 'React', 'Next.js', 'CSS', 'Tailwind', 'Firebase'],
    datasets: [
      {
        label: 'Proficiency',
        data: [85, 80, 70, 75, 80, 60],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
      },
    ],
  }

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        ticks: { stepSize: 20 },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => `Proficiency: ${ctx.raw}%`,
        },
      },
    },
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="w-full max-w-md">
        <Radar data={data} options={options} />
      </div>
    </section>
  )
}
