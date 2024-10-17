const Footer = () => {
  return (
    <div className="bg-black h-fit text-white flex flex-col justify-center items-center border-t-2 border-gray-500 py-5">
      <h1 className="text-xl font-thin">Created and Designed by Tushar Bhatt</h1>
      <div className="my-5 flex gap-10 py-10">
        <a href="https://github.com/TusharBhatt-2003" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/tushar-bhatt-05b8b11a5/" target="_blank" rel="noopener noreferrer">
          <img
          className="rounded-md"
           src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Footer