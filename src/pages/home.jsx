import react from 'react'
import Hero from '../components/hero/Hero'
import Grafico from '../components/grafico/Grafico'
import Services from '../components/services/Services'
import Profissionais from '../components/profissionais/Profissionais'


const Home = () => {
    return (
        <>
        <Hero />
        <Grafico />
        <Services />
        <Profissionais />
        </>
    )
}

export default Home