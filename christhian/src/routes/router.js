import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, DetalhesPage, PokedexPage } from'../pages/index'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <HomePage/> } />
                <Route path='/Detalhes/:id' element={ <DetalhesPage/> } />
                <Route path='/pokedex' element={ <PokedexPage/> } />
            </Routes>
        </BrowserRouter>
    )
}