import Image from 'next/image'


export default function Header() {
    return (
        <header className='flex flex-col mt-2'>
            <div className='flex justify-center my-6'>
                <Image
                    className='rounded-full'
                    src="https://lh3.googleusercontent.com/GrQx2bXJfqWsY5J9YVQdjixy0Mi675_bCLmV10_jSPJeVLLBgHuBk3or8gb95lsMYTmZMiYT8omiZYdB_64crHtCxVdL8dEpKd1m"
                    height={150}
                    width={150}
                    alt="Recipe Food"
                />
            </div>
            <h1 className=' text-center text-3xl font-bold font-extralight animate__animated animate__fadeInDown'>
                Food Recipe Blog
            </h1>
        </header>
    )
}
