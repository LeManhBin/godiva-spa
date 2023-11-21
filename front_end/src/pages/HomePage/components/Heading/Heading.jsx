
const Heading = ({title, content}) => {
  return (
    <div className="text-center">
        <h1 className="text-3xl uppercase font-extrabold text-[#8D25C4] text-center">{title}</h1>
        <p className="text-center text-2xl font-semibold text-[#8D25C4]">{content}</p>
    </div>
  )
}


export default Heading