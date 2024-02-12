import Link from 'next/link'


export default function Header() {
  
  const categories = [
    {
      name: "Women's",
      link: '/womens',
    },
    {
      name: "Men's",
      link: '/mens',
    },
    {
      name: 'Jewelry',
      link: '/jewelry',
    },
  ]
  
  return (
    <header className="flex flex-row justify-between  items-center text-center w-screen border border-black">
      <h1 className='text-7xl bg-gray-custom p-5'>JSJ</h1>
      <>
        <ul className="flex space-x-6 text-2xl">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link className='font-extrabold cursor-pointer hover:underline' href={cat.link}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </>
      <div>Search</div>
      <Link href='/shopping-cart' className='pr-10 cursor-pointer hover:underline'>Cart</Link>
    </header>
  )
}
