import { Container, Slider, Left, Right } from './styles'
import { SliderData } from '../SliderData'
import { useState } from 'react'


interface SliderData {
    id: number;
    image: string;
}

export default function Header() {

    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }

    console.log(SliderData)

    return (
        <Container>
            <strong>Olá, Seja bem vindo(a)</strong>

            <Slider>
                <Left onClick={prevSlide} />
                <Right onClick={nextSlide} />
                {SliderData.map((value, index) => (
                    <div>
                        {index === current && (
                            <img src={value.image} alt="Banners Flow" />
                        )}
                        
                    </div>
                ))}
                
            </Slider>
        </Container>
    )
}