import Footer from '@/src/components/Footer/Footer'
import Header from '@/src/components/Header/Header'
import { Rating, Select, Option } from '@/src/tailwind'

const getLandingProductData = async (productID: string | undefined) => {
  const response = await fetch(`https://fakestoreapi.com/products/${productID}`)

  if (!response.ok) {
    throw new Error('Oops, something went wrong')
  }

  return response.json()
}

export default async function Product({ params }: any) {
  const { id, title, price, description, image, rating } =
    await getLandingProductData(params.id)
  const formattedDescription = description.split(/,|\/|\./).filter(Boolean)

  const roundNumber = (num: number) => {
    return Math.round(num)
  }

  const roundedRating = roundNumber(rating.rate)

  const productDisplay = (
    <div className="lg:flex  gap-40 m-10 w-fit">
      <img src={image} alt={title} className="object-contain w-80 " />
      <div className="flex-col space-y-10">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex">
          <div className="flex flex-row items-center gap-1 ">
            <p className="font-bold text-4xl ">${price}</p>
            <div className="border border-black h-full m-1"></div>
            <div className="border border-black h-full m-1"></div>
            <Rating
              value={roundedRating}
              placeholder={undefined}
              unratedColor="blue"
              ratedColor="blue"
              readonly
            />
            <p>
              {roundedRating}/5{' '}
              <span className="text-xs italic underline">
                {rating.count} Customer Review's
              </span>
            </p>
          </div>
        </div>
        <div className="border border-black w-full m-1"></div>
        <div>
          <Select variant='static' label='Select Size' placeholder={undefined}>
            <Option value='xx-small'>XX-Small</Option>
            <Option value='x-small'>X-Small</Option>
            <Option value='small'>Small</Option>
            <Option value='medium'>Medium</Option>
            <Option value='large'>Large</Option>
            <Option value='x-large'>X-Large</Option>
            <Option value='xx-large'>XX-Large</Option>
            <Option value='xxx-large'>XXX-Large</Option>
          </Select>
        </div>
        <ul>
          {formattedDescription.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="overflow-auto">
      <Header />
      <div className="">{productDisplay}</div>
      <Footer />
    </div>
  )
}
