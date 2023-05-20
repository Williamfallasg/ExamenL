import Layout from "../components/Layout";



export default function index({ data }) {
    return (
        <Layout>


            <div className="carousel">
                <div className="carousel-inner">
                    <div className="row -md-2">
                        {data.map(({ name, id, full_name, avatar_url }, index) => (
                            <div className={`col-md-3 ${index === 0 ? 'active' : ''}`} key={id}>
                                <div className="card bg-primary text-light">
                                    <img src="/portafolio5.png" alt="" className="img-fluid" />
                                    <div className="card-body">
                                        <h5>Nombre:</h5>
                                        <p>{name} - {id}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




        </Layout >
    )

}

export async function getStaticProps() {
    try {
        const res = await fetch('https://api.github.com/users/Williamfallasg/repos')
        const data = await res.json()
        return {
            props: { data }
        }

    } catch (error) {
        console.log(error)
    }


}