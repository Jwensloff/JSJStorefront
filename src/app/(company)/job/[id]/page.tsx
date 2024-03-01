import supabase from '@/src/config/supabaseClient'
import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/Header/Header'
import { CareerProps } from '@/src/types'
import { Button } from '../../../../tailwind'

const getJobDetails = async (id: number) => {
  let { data, error } = await supabase
    .from('open_jobs')
    .select('')
    .eq('id', `${id}`)

  if (error) {
    throw error
  }
  if (data) {
    return data
  }
}

export default async function JobDetails({
  params,
}: {
  params: { id: string }
}) {
  const jobDetails = await getJobDetails(Number(params.id))

  const generateJobDetails = (jobDesc: CareerProps | any) => {
    const formattedJobQ = jobDesc?.qualifications
      .split(/\//)
      .filter(Boolean)

    const formattedJobR = jobDesc?.responsibilities
      .split(/\//)
      .filter(Boolean)

    const formattedBenefits = jobDesc?.benefits
      .split(/,/)
      .filter(Boolean)

    return (
      <div key={jobDesc.id} className="flex flex-col gap-5 xl:w-1/2">
        <h2 className="font-extrabold text-4xl">{jobDesc.title}</h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <p className="font-bold">Location:</p>
          <p>
            {jobDesc.location.state}, {jobDesc.location.country}
          </p>
          <p className="font-bold">Remote: </p>
          <p>{jobDesc.location.remote ? 'Yes' : 'No'}</p>
          <p className="font-bold">Job Type:</p>
          <p>{jobDesc.type}</p>
          <p className="font-bold">Salary:</p>
          <p>{jobDesc.salary}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Expected Start: </p>
          <p>
            {' '}
            {jobDesc.start_date.month} - {jobDesc.start_date.year}
          </p>
        </div>
        <p>{jobDesc.description}</p>
        <p className="font-bold">Responsibilities -</p>
        <ul>
          {formattedJobR.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <p className="font-bold">Qualifications -</p>
        <ul>
          {formattedJobQ.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <p className="font-bold">Benefits -</p>
        <ul>
          {formattedBenefits.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <a href='/fallback'>
        <Button
          color="blue"
          className="w-1/2 mt-10"
          placeholder={undefined}
        >
          APPLY
        </Button>
        </a>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="m-20 flex flex-col items-center">
        {jobDetails && jobDetails?.map((job) => generateJobDetails(job))}
      </div>
      <Footer />
    </div>
  )
}
