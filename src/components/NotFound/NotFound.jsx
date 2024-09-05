import monke from '../../img/monke2.jpg'

const NotFound =  () => {
    return (
        <div className='error'>
            <h1>Page Not Found</h1>
            <img src={monke} alt="notFound" />
        </div>
    )
}

export default NotFound;